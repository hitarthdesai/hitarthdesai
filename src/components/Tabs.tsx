import { Repository } from "@/util";

export const Tabs = ({ repos }: { repos: Repository[] }) => {
  return (
    <>
      {repos?.map(({ name }, index) => {
        const isActive = index === 4;
        return (
          <>
            <div
              id={`tab-${index}`}
              className={`w-[5rem] relative ${
                isActive ? "tab-active" : "tab-inactive"
              }`}
            >
              <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 ">
                <p className="text-xs truncate text-white">{index}</p>
              </div>
              {!isActive && (
                <span className="absolute -left-[.1rem] bottom-1/3 h-[40%] border-[.01rem] border-gray-500"></span>
              )}
            </div>
          </>
        );
      })}
    </>
  );
};
