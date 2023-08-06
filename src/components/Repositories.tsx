import { Repository, getAllRepositories } from "../util";
import { Showcase } from "./Showcase";
import { Tabs } from "./Tabs";
import { useEffect, useRef, useState } from "react";

export const Repositories = () => {
  const tabsRef = useRef<HTMLDivElement>(null);
  const [repos, setRepos] = useState<Repository[]>([]);
  const [activeRepoIndex, setActiveRepoIndex] = useState<number>(-1);

  useEffect(() => {
    const getRepos = async () => {
      setRepos(await getAllRepositories());
    };

    getRepos();
  }, []);

  useEffect(() => {
    if (repos.length === 0) return;
    setActiveRepoIndex(Math.floor(Math.random() * repos.length));
  }, [repos]);

  const activeRepoIndexSetter = (newIndex: number) => {
    setActiveRepoIndex(newIndex);
  };

  return (
    <div className="w-full h-full grid place-items-center py-20">
      <div className="partial-border w-[60rem] aspect-video flex flex-col m-8 rounded-xl">
        <div className="h-8 flex flex-row bg-black">
          <div className="w-fit h-full flex flex-row items-center mx-2">
            <div className="w-3 h-3 mx-1 rounded-full bg-red-600" />
            <div className="w-3 h-3 mx-1 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 mx-1 rounded-full bg-green-600" />
          </div>
          <div ref={tabsRef} className="w-full h-full flex flex-row grow">
            {repos.length > 0 && (
              <Tabs
                tabs={repos.map((repo, index) => ({
                  ...repo,
                  isActive: index === activeRepoIndex,
                }))}
                width={tabsRef.current?.offsetWidth || 0}
                activeTabSetter={activeRepoIndexSetter}
              />
            )}
          </div>
        </div>
        <div className="bg-chrome-active-tab min-w-screen px-1 py-1">
          <div className="w-full py-2 rounded-full flex items-center justify-between bg-black">
            <p className="ml-4 text-xs text-white">
              {repos[activeRepoIndex]?.homepage ||
                "This has not been hosted yet"}
            </p>
          </div>
        </div>
        {activeRepoIndex >= 0 && <Showcase repo={repos[activeRepoIndex]} />}
      </div>
    </div>
  );
};
