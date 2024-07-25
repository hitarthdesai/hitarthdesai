import { z } from "zod";

const RepositoryTopic = {
  Highlighted: "highlighted",
};

const repositoryTopicSchema = z.nativeEnum(RepositoryTopic);

export const repositorySchema = z.object({
  name: z.string(),
  topics: z.array(repositoryTopicSchema).min(1),
});

export type Repository = z.infer<typeof repositorySchema>;

export const repositoriesSchema = z.array(repositorySchema);
