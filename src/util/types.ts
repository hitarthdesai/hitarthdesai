export type Repository = {
  name: string;
  full_name: string;
  created_at: string;
  description: string;
  homepage: string;
  topics: string[];

  languages_url: string;
  languages: string[];

  watch_count: number;
  forks_count: number;
};
