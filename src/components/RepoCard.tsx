import { Repository } from "@/util";

export const RepoCard = ({ repo }: { repo: Repository }) => {
  // const { created_at, full_name } = repo;
  const full_name = "Hitarth";

  return (
    <div className="w-screen bg-white flex items-center justify-center">
      <div className="min-w-[60rem] max-w-[60rem] aspect-video bg-black flex flex-col">
        <div
          id="top-bar"
          className="pb-2 flex flex-row border-solid border-gray-500 border-b-4"
        >
          <div id="controls" className="min-w-[3rem] pt-2 pl-1 flex flex-row">
            <div className="w-3 h-3 mx-1 rounded-full bg-red-600"></div>
            <div className="w-3 h-3 mx-1 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 mx-1 rounded-full bg-green-600"></div>
          </div>
        </div>
        <div
          id="repo-name"
          className="bg-gray-500 min-w-screen h-8 px-1 pb-[4px]"
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
