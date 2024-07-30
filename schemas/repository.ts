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
  Rust: "rust",
  Swift: "swift",
  SwiftUi: "swiftui",
  Php: "php",
} as const;

const RepositoryTopic = {
  Highlighted: "highlighted",
  Portfolio: "portfolio",
  Ongoing: "ongoing",
} as const;

export const Topic = {
  ...RepositoryTopic,
  ...TechnologyTopic,
} as const;

const topicSchema = z.nativeEnum(Topic);

export const repositorySchema = z.object({
  name: z.string(),
  topics: z.array(topicSchema),
  contents_url: z.string().url(),
  description: z.string().nullable(),
  html_url: z.string().url(),
});

export type Repository = z.infer<typeof repositorySchema>;
