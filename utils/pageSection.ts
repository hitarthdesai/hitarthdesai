export const PageSection = {
  Hero: "hero",
  Projects: "projects",
} as const;

export type PageSectionKeys = (typeof PageSection)[keyof typeof PageSection];
