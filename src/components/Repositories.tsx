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
    <div className="w-screen bg-white flex items-center justify-center">
      <div className="w-[60rem] aspect-video bg-black flex flex-col">
        <div id="top-bar" className="h-8 flex flex-row overflow-x-scroll">
          <div
            id="controls"
            className="w-fit h-full flex flex-row items-center mx-2 "
          >
            <div className="w-3 h-3 mx-1 rounded-full bg-red-600" />
            <div className="w-3 h-3 mx-1 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 mx-1 rounded-full bg-green-600" />
          </div>
          <div ref={tabsRef} className="w-full h-full flex flex-row">
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
        <div className="bg-gray-500 min-w-screen h-8 px-1 py-[4px]">
          <div className="w-full h-full rounded-full flex items-center justify-between bg-gray-800 ">
            <p className="ml-4 text-xs text-white">
              {repos[activeRepoIndex]?.homepage ||
                "This has not been hosted yet"}
            </p>
            <button className="mr-4 text-xs text-white">Dummy Button</button>
          </div>
        </div>
        {activeRepoIndex >= 0 && <Showcase repo={repos[activeRepoIndex]} />}
      </div>
    </div>
  );
};
