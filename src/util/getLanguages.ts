import { Octokit } from "@octokit/core";
import { LanguageData } from "./types";

export const getLanguages = async (
  languages_url: string
): Promise<LanguageData[]> => {
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

  const { data } = await octokit.request({
    method: "GET",
    url: languages_url,
  });

  const languages: LanguageData[] = [];
  if (data)
    for (const language of Object.keys(data)) {
      const languageData: LanguageData = {
        name: language,
        usage: Number(data[language]),
      };
      languages.push(languageData);
    }

  return languages;
};
