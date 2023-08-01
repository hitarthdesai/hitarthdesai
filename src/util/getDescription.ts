import { Octokit } from "@octokit/core";

export const getDescription = async (contents_url: string): Promise<string> => {
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

  try {
    const {
      data: { content },
    } = await octokit.request({
      method: "GET",
      url: contents_url + "description.txt",
    });
    return Buffer.from(content, "base64").toString();
  } catch (e) {
    console.error("In getDescription:", e);
    return "";
  }
};
