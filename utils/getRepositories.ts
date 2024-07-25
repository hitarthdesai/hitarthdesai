import { z } from "zod";
import { octokit } from "./getOctokit";
import { Repository, repositorySchema } from "@/schemas/repository";

export const getRepositories = async (): Promise<Repository[]> => {
  const { data: _data } = await octokit.request({
    method: "GET",
    url: "https://api.github.com/users/hitarthdesai/repos",
  });
  const data = z.array(z.any()).parse(_data);

  const supportedRepos = data.filter((repo): repo is Repository => {
    const { success } = repositorySchema.safeParse(repo);
    return success;
  });

  return supportedRepos;

  // const repos: Repository[] = [];
  // for (const item of data) {
  //   const {
  //     name = "",
  //     full_name = "",
  //     created_at = "",
  //     homepage = "",
  //     topics = [],
  //     languages_url = "",
  //     contents_url = "",
  //     html_url = "/",
  //     watch_count = 0,
  //     forks_count = 0,
  //   }: RawRepository = item;

  //   /** TODO: Remove this conditional fetch */
  //   const description =
  //     name === "instagram-v2" ? await getDescription(contents_url) : "";
  //   const thumbnail =
  //     name === "instagram-v2" ? await getThumbnail(contents_url) : "";
  //   const languages = await getLanguages(languages_url);
  //   const date_created_at = new Date(created_at);
  //   const dateString = new Intl.DateTimeFormat("en-US", {
  //     year: "numeric",
  //     month: "short",
  //     day: "2-digit",
  //   }).format(date_created_at);

  //   repos.push({
  //     name,
  //     full_name,
  //     description,
  //     thumbnail,
  //     homepage,
  //     topics,
  //     watch_count,
  //     forks_count,
  //     languages,
  //     created_at: dateString,
  //     gh_url: html_url,
  //   });
  // }

  // return repos;
};
