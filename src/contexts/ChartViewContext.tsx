import { getAnchorFromCoordinates } from "../util/getAnchorFromCoordinates";
import { INACTIVE_CHART_ANCHORS } from "../util/constants";
import { InactiveChartAnchor } from "../util/types";
import {
  DragEvent,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

export type ChartViewContextClient = {
  isTopicsCarouselActive: boolean;
  isLanguagesChartActive: boolean;
  hasDragStarted: boolean;
  inactiveChartAnchor: InactiveChartAnchor;
  toggleActiveChart: () => void;
  onDragInactiveChartStart: () => void;
  onDragInactiveChartEnd: (event: DragEvent<HTMLDivElement>) => void;
};

export type ChartViewProviderProps = {
  children: JSX.Element;
};

const ChartViewContext = createContext<ChartViewContextClient>(
  {} as ChartViewContextClient
);
const ChartViewProvider = ({ children }: ChartViewProviderProps) => {
  const [isTopicsCarouselActive, setIsTopicsCarouselActive] =
    useState<boolean>(false);

  const isLanguagesChartActive = useMemo(
    () => !isTopicsCarouselActive,
    [isTopicsCarouselActive]
  );

  const [hasDragStarted, setHasDragStarted] = useState<boolean>(false);

  const [inactiveChartAnchor, setInactiveChartAnchor] =
    useState<InactiveChartAnchor>(INACTIVE_CHART_ANCHORS.BR);

  const toggleActiveChart = useCallback(() => {
    setIsTopicsCarouselActive((prev) => !prev);
  }, []);

  const onDragInactiveChartStart = useCallback(() => {
    setHasDragStarted(true);
  }, []);

  const onDragInactiveChartEnd = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      if (!hasDragStarted) return;
      const { currentTarget, clientX, clientY } = event;

      const parent = currentTarget.parentElement;
      if (!parent) {
        setHasDragStarted(false);
        return;
      }

      const { x, y, width, height } = parent.getBoundingClientRect();
      const quadrant = getAnchorFromCoordinates(
        {
          x: clientX - x,
          y: clientY - y,
        },
        width,
        height
      );

      setInactiveChartAnchor(quadrant);
      setHasDragStarted(false);
    },
    [hasDragStarted]
  );

  const chartViewContextValues = useMemo(
    () => ({
      isTopicsCarouselActive,
      isLanguagesChartActive,
      hasDragStarted,
      inactiveChartAnchor,
      toggleActiveChart,
      onDragInactiveChartStart,
      onDragInactiveChartEnd,
    }),
    [
      isTopicsCarouselActive,
      isLanguagesChartActive,
      hasDragStarted,
      inactiveChartAnchor,
      toggleActiveChart,
      onDragInactiveChartStart,
      onDragInactiveChartEnd,
    ]
  );

  return (
    <ChartViewContext.Provider value={chartViewContextValues}>
      {children}
    </ChartViewContext.Provider>
  );
};

export const useChartViewContext = () => useContext(ChartViewContext);

export default ChartViewProvider;
