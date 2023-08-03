import { INACTIVE_CHART_ANCHORS } from "./constants";

export type LanguageData = {
  name: string;
  usage: number;
};

export type Repository = {
  name: string;
  full_name: string;
  created_at: string;
  description: string;
  thumbnail: string;
  homepage: string;
  topics: string[];
  languages: LanguageData[];
  watch_count: number;
  forks_count: number;
  gh_url: string;
};

export type Coordinate = {
  x: number;
  y: number;
};

export type InactiveChartAnchor = keyof typeof INACTIVE_CHART_ANCHORS;
