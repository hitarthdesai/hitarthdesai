import { Octokit } from "@octokit/core";

export const getThumbnail = async (contents_url: string): Promise<string> => {
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
  console.log("Getting Description");

  try {
    const {
      data: { download_url },
    } = await octokit.request({
      method: "GET",
      url: contents_url + "thumbnail.jpg",
    });

    return download_url;
  } catch (e) {
    console.error("In getThumbnail:", e);
    return "";
  }
};
