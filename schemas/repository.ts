import { z } from "zod";

export const TechnologyTopic = {
  Css: "css",
  Firebase: "firebase",
  MaterialUi: "material-ui",
  Nextjs: "nextjs",
  Reactjs: "reactjs",
  Javascript: "javascript",
  MantineUi: "mantine-ui",
  NextAuth: "next-auth",
  Stripe: "stripe",
  Django: "django",
  Html: "html",
  Python: "python",
  Js: "js",
} as const;

export const RepositoryTopic = {
  ...TechnologyTopic,
  Highlighted: "highlighted",
} as const;

const repositoryTopicSchema = z.nativeEnum(RepositoryTopic);

export const repositorySchema = z.object({
  name: z.string(),
  topics: z.array(repositoryTopicSchema).min(1),
  contents_url: z.string().url(),
  description: z.string().min(1),
  html_url: z.string().url(),
});

export type Repository = z.infer<typeof repositorySchema>;
