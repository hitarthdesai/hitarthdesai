import { Repository } from "@/util";
import { TopicsCarousel } from "./TopicsCarousel";
import { LanguagesChart } from "./LanguagesChart";
import { useCallback, useState } from "react";
import { InactiveChartAnchors } from "@/util/types";
import { INACTIVE_CHART_ANCHORS } from "../util/constants";

type ShowcaseProps = {
  repo: Repository;
};

const getClassnameFromAnchor = (anchor: InactiveChartAnchors) => {
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
  repo: { name, description, topics, languages, ...rest },
}: ShowcaseProps) => {
  const [isTopicsCarouselActive, setIsTopicsCarouselActive] =
    useState<boolean>(false);
  const toggleActiveChart = useCallback(() => {
    setIsTopicsCarouselActive((prev) => !prev);
  }, []);

  const [inactiveChartAnchor, setInactiveChartAnchor] =
    useState<InactiveChartAnchors>(INACTIVE_CHART_ANCHORS.BR);
  const inactiveChartAnchorClassname =
    getClassnameFromAnchor(inactiveChartAnchor);

  const changeInactiveChartAnchor = useCallback(
    (newAnchor: InactiveChartAnchors) => {
      setInactiveChartAnchor(newAnchor);
    },
    []
  );

  return (
    <main className="w-full h-full p-4 flex flex-col text-2xl bg-gray-600">
      <div className="flex flex-row mb-2 text-white">
        <strong className="pr-1">HittuDesai</strong>
        <span>/</span>
        <p className="pl-1">{name || "DEFAULT_REPO_NAME"}</p>
      </div>
      <div className="w-full h-full flex-grow flex flex-row gap-4 overflow-hidden">
        <article className="flex-grow rounded-md p-4 bg-gray-700">
          <div className="w-full rounded-lg aspect-video bg-white mb-8" />
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
        <div className="relative min-w-[400px] max-w-[400px] min-h-[400px] max-h-[400px]">
          <TopicsCarousel
            width={isTopicsCarouselActive ? 400 : 200}
            height={isTopicsCarouselActive ? 400 : 200}
            toggleActiveChart={toggleActiveChart}
            // changeInactiveChartAnchor={changeInactiveChartAnchor}
            topics={topics}
            className={
              isTopicsCarouselActive
                ? "chart-active"
                : `chart-inactive ${inactiveChartAnchorClassname}`
            }
          />
          <LanguagesChart
            width={!isTopicsCarouselActive ? 400 : 200}
            height={!isTopicsCarouselActive ? 400 : 200}
            toggleActiveChart={toggleActiveChart}
            // changeInactiveChartAnchor={changeInactiveChartAnchor}
            data={languages}
            className={
              !isTopicsCarouselActive
                ? "chart-active"
                : `chart-inactive ${inactiveChartAnchorClassname}`
            }
          />
        </div>
      </div>
    </main>
  );
};
