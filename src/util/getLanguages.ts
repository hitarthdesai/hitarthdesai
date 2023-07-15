import { Octokit } from "@octokit/core";

export const getLanguages = async (
  languages_url: string
): Promise<string[]> => {
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

  const { data } = await octokit.request({
    method: "GET",
    url: languages_url,
  });

  return data;
};
