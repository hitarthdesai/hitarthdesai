import { Octokit } from "@octokit/core";
import { Repository } from "./types";
import { getLanguages } from "./getLanguages";
import { getDescription } from "./getDescription";

type RawRepository = Omit<Repository, "languages"> & {
  contents_url: string;
  languages_url: string;
};

export const getAllRepositories = async (): Promise<Repository[]> => {
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

  const { data } = await octokit.request({
    method: "GET",
    url: "https://api.github.com/users/HittuDesai/repos",
  });

  const repos: Repository[] = [];
  for (const item of data) {
    const {
      name = "",
      full_name = "",
      created_at = "",
      homepage = "",
      topics = [],
      languages_url = "",
      contents_url = "",
      watch_count = 0,
      forks_count = 0,
    }: RawRepository = item;

    /** TODO: Remove the conditional fetch for only one repo */
    const description =
      name === "instagram-v2" ? await getDescription(contents_url) : "";
    const languages = await getLanguages(languages_url);
    const date_created_at = new Date(created_at);
    const dateString = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    }).format(date_created_at);

    repos.push({
      name,
      full_name,
      description,
      homepage,
      topics,
      watch_count,
      forks_count,
      languages,
      created_at: dateString,
    });
  }

  return repos;
};
