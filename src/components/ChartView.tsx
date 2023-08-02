import { TopicsCarousel } from "./TopicsCarousel";
import { LanguagesChart } from "./LanguagesChart";
import { InactiveChartAnchor, LanguageData } from "@/util/types";
import { INACTIVE_CHART_ANCHORS } from "../util/constants";
import { useChartViewContext } from "../contexts/ChartViewContext";

type ChartViewProps = {
  topics: string[];
  languages: LanguageData[];
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

export const ChartView = ({ topics, languages }: ChartViewProps) => {
  const {
    isTopicsCarouselActive,
    isLanguagesChartActive,
    inactiveChartAnchor,
  } = useChartViewContext();

  const inactiveChartAnchorClassname =
    getClassnameFromAnchor(inactiveChartAnchor);

  return (
    <div className="relative min-w-[400px] max-w-[400px] min-h-[400px] max-h-[400px]">
      <TopicsCarousel
        width={isTopicsCarouselActive ? 400 : 200}
        height={isTopicsCarouselActive ? 400 : 200}
        topics={topics}
        className={
          isTopicsCarouselActive
            ? "chart-active"
            : `chart-inactive ${inactiveChartAnchorClassname}`
        }
      />
      <LanguagesChart
        width={isLanguagesChartActive ? 400 : 200}
        height={isLanguagesChartActive ? 400 : 200}
        data={languages}
        className={
          isLanguagesChartActive
            ? "chart-active"
            : `chart-inactive ${inactiveChartAnchorClassname}`
        }
      />
    </div>
  );
};
