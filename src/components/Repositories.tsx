import { Repository, getAllRepositories } from "../util";
import { Tabs } from "./Tabs";
import { useEffect, useMemo, useState } from "react";

export const Repositories = () => {
  const full_name = "Hitarth Desai";
  const [repos, setRepos] = useState<Repository[]>([]);

  useEffect(() => {
    const getRepos = async () => {
      setRepos(await getAllRepositories());
    };

    getRepos();
  }, []);

  return (
    <div className="w-screen bg-white flex items-center justify-center">
      <div className="w-[60rem] aspect-video bg-black flex flex-col">
        <div
          id="top-bar"
          // className="h-10 flex flex-row items-center border-solid border-gray-500 border-b-4 overflow-x-scroll"
          className="h-8 flex flex-row overflow-x-scroll"
        >
          <div
            id="controls"
            className="w-fit h-full flex flex-row items-center mx-2 "
          >
            <div className="w-3 h-3 mx-1 rounded-full bg-red-600" />
            <div className="w-3 h-3 mx-1 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 mx-1 rounded-full bg-green-600" />
          </div>
          <Tabs repos={repos} />
        </div>
        <div
          id="repo-name"
          className="bg-gray-500 min-w-screen h-8 px-1 py-[4px]"
        >
          <div className="bg-gray-800 w-full h-full rounded-full">
            <p className="ml-4">{full_name}</p>
          </div>
        </div>
        {/* <div className="w-full h-full">
      <div className="ml-3 mt-3">{name}</div>
      <div className="w-full h-1/2 bg-red-300 mt-3"></div>
    </div>
    <div className="w-full flex justify-end mb-3">
      <p className="pr-3 border-r-4">{created_at}</p>
      <Logo name="github" size={24} className="ml-3" />
      <Logo name="website" size={24} className="ml-3 mr-3" />
    </div> */}
      </div>
    </div>
  );
};
