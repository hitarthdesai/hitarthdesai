import { Repository } from "@/util";
import ChartViewProvider from "../contexts/ChartViewContext";
import { ChartView } from "./ChartView";

type ShowcaseProps = {
  repo: Repository;
};

export const Showcase = ({
  repo: { name, description, thumbnail, topics, languages, gh_url },
}: ShowcaseProps) => {
  return (
    <main className="w-full grow p-4 flex flex-col text-2xl bg-chrome-dark">
      <div className="flex flex-row mb-2 text-white">
        <strong className="pr-1">hitarthdesai</strong>
        <span>/</span>
        <p className="pl-1">{name || "DEFAULT_REPO_NAME"}</p>
      </div>
      <div className="w-full h-full flex-grow flex flex-row gap-4 overflow-hidden">
        <article className="flex-grow rounded-md p-4 border-4 border-chrome-active-tab">
          <div className="w-full aspect-video rounded-lg grid place-items-center overflow-hidden bg-white mb-8">
            <img src={thumbnail} alt={`thumbnail for ${name}`} />
          </div>
          <p className="text-sm text-white">
            {description ||
              `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            quos maiores omnis doloremque dolorem, voluptatibus delectus, fugit
            quisquam odit recusandae, placeat reprehenderit. Debitis labore,
            eveniet provident iure velit sunt odio aliquam tempore ratione,
            nesciunt eum tempora? Quidem a, libero, maiores facere reiciendis
            animi cupiditate, quibusdam suscipit harum et ex totam?`}
          </p>
        </article>
        <div className="min-w-[400px] max-w-[400px] flex flex-col rounded-2xl overflow-clip">
          <ChartViewProvider>
            <ChartView topics={topics} languages={languages} />
          </ChartViewProvider>
          <button className="grow mt-2 bg-gradient-0 bg-[length:400%_400%] animate-background-gradient">
            <a href={gh_url} target="_blank" rel="noreferrer">
              Checkout GitHub
            </a>
          </button>
        </div>
      </div>
    </main>
  );
};
