import { z } from "zod";
import { octokit } from "./getOctokit";
import { type Repository, repositorySchema, Topic } from "@/schemas/repository";
import { type Project, technologyTopicsSchema } from "@/schemas/project";

type CategorizedProject = {
  highlighted: Project[];
  others: Project[];
};

export const getRepositories = async (): Promise<CategorizedProject> => {
  const { data: _data } = await octokit.request({
    method: "GET",
    url: "https://api.github.com/users/hitarthdesai/repos",
  });

  // Ensuring data is a list to allow type safety on the filter and map functions
  const data = z.array(z.any()).parse(_data);

  const supportedRepos = data.filter((repo): repo is Repository => {
    const { success, data } = repositorySchema.safeParse(repo);

    const shouldShowOnPortfolio =
      data?.topics.includes(Topic.Portfolio) ?? false;

    return success && shouldShowOnPortfolio;
  });

  const projects: Project[] = supportedRepos.map((repo) => {
    const { name, topics: _topics, description, html_url, contents_url } = repo;
    const topics = new Set(_topics);

    topics.delete(Topic.Portfolio);
    topics.delete(Topic.Ongoing);
    const isHighlighted = topics.delete(Topic.Highlighted);

    const topicsArray = technologyTopicsSchema.parse(Array.from(topics));
    const thumbnail_url = contents_url.replace("{+path}", "thumbnail.png");
    return {
      name,
      isHighlighted,
      topics: topicsArray,
      description,
      github_url: html_url,
      thumbnail_url,
    };
  });

  const initialCategorizedProjects: CategorizedProject = {
    highlighted: [],
    others: [],
  };

  const categorizedProjects = projects.reduce((acc, project) => {
    if (project.isHighlighted) {
      acc.highlighted.push(project);
    } else {
      acc.others.push(project);
    }

    return acc;
  }, initialCategorizedProjects);

  return categorizedProjects;
};
