import { Repository } from "@/util";
import { InactiveChartAnchor } from "@/util/types";
import { INACTIVE_CHART_ANCHORS } from "../util/constants";
import ChartViewProvider from "../contexts/ChartViewContext";
import { ChartView } from "./ChartView";

type ShowcaseProps = {
  repo: Repository;
};

const getClassnameFromAnchor = (anchor: InactiveChartAnchor) => {
  switch (anchor) {
    case INACTIVE_CHART_ANCHORS.TL:
      return "anchor-tl";
    case INACTIVE_CHART_ANCHORS.TR:
      return "anchor-tr";
    case INACTIVE_CHART_ANCHORS.BR:
      return "anchor-br";
    case INACTIVE_CHART_ANCHORS.BL:
      return "anchor-bl";
  }
};

export const Showcase = ({
  repo: { name, description, thumbnail, topics, languages, ...rest },
}: ShowcaseProps) => {
  return (
    <main className="w-full h-full p-4 flex flex-col text-2xl bg-gray-600">
      <div className="flex flex-row mb-2 text-white">
        <strong className="pr-1">HittuDesai</strong>
        <span>/</span>
        <p className="pl-1">{name || "DEFAULT_REPO_NAME"}</p>
      </div>
      <div className="w-full h-full flex-grow flex flex-row gap-4 overflow-hidden">
        <article className="flex-grow rounded-md p-4 bg-gray-700">
          <div className="w-full rounded-lg aspect-video overflow-hidden bg-white mb-8">
            <img src={thumbnail} />
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
        <ChartViewProvider>
          <ChartView topics={topics} languages={languages} />
        </ChartViewProvider>
      </div>
    </main>
  );
};
