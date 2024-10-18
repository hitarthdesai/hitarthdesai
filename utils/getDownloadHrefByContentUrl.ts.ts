import { z } from "zod";
import { octokit } from "./getOctokit";

const fileHrefSchema = z.object({
  download_url: z.string().url(),
});

type GetDownloadHrefByContentUrlProps = {
  url: string;
};

export const getDownloadHrefByContentUrl = async ({
  url,
}: GetDownloadHrefByContentUrlProps): Promise<string | undefined> => {
  try {
    const { data: _data } = await octokit.request({
      method: "GET",
      url,
    });

    const data = fileHrefSchema.parse(_data);
    return data.download_url;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
