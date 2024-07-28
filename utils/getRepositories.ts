import { z } from "zod";
import { octokit } from "./getOctokit";
import {
  Repository,
  repositorySchema,
  RepositoryTopic,
} from "@/schemas/repository";
import { Project, technologyTopicsSchema } from "@/schemas/project";

export const getRepositories = async (): Promise<Project[]> => {
  const { data: _data } = await octokit.request({
    method: "GET",
    url: "https://api.github.com/users/hitarthdesai/repos",
  });
  const data = z.array(z.any()).parse(_data);

  const supportedRepos: Repository[] = data.filter(
    (repo): repo is Repository => {
      const { success } = repositorySchema.safeParse(repo);
      return success;
    }
  );

  const projects: Project[] = supportedRepos.map((repo) => {
    const { name, topics: _topics, description, html_url } = repo;
    const topics = new Set(_topics);
    const isHighlighted = topics.delete(RepositoryTopic.Highlighted);

    const topicsArray = technologyTopicsSchema.parse(Array.from(topics));
    return {
      name,
      isHighlighted,
      topics: topicsArray,
      description,
      github_url: html_url,
    };
  });

  return projects;
};
