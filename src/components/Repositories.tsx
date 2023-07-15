import { Repository, getAllRepositories } from "../util";
import { RepoCard } from "./RepoCard";
import { useEffect, useState } from "react";

export const Repositories = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const repo = repos[0];

  useEffect(() => {
    const getRepos = async () => {
      setRepos(await getAllRepositories());
    };

    getRepos();
  }, []);

  return <RepoCard repo={repo} />;
};
