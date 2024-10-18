import { z } from "zod";
import { repositorySchema, TechnologyTopic } from "./repository";

const repositoryPropsOnProject = repositorySchema.pick({
  name: true,
  description: true,
});

export const technologyTopicsSchema = z.array(z.nativeEnum(TechnologyTopic));

export const projectSchema = z.object({
  ...repositoryPropsOnProject.shape,
  isHighlighted: z.boolean(),
  topics: technologyTopicsSchema,
  github_url: z.string().url(),
  thumbnail_url: z.string().url(),
});

export type Project = z.infer<typeof projectSchema>;
