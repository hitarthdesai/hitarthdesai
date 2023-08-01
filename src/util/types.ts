export type LanguageData = {
  name: string;
  usage: number;
};

export type Repository = {
  name: string;
  full_name: string;
  created_at: string;
  description: string;
  homepage: string;
  topics: string[];
  languages: LanguageData[];
  watch_count: number;
  forks_count: number;
};

export type Coordinate = {
  x: number;
  y: number;
};

export type InactiveChartAnchors = keyof typeof INACTIVE_CHART_ANCHORS;
