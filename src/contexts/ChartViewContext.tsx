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
  hasDragStarted: boolean;
  inactiveChartAnchor: InactiveChartAnchor;
  toggleActiveChart: () => void;
  onDragInactiveChartStart: (event: DragEvent<HTMLDivElement>) => void;
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

  const [hasDragStarted, setHasDragStarted] = useState<boolean>(false);

  const [inactiveChartAnchor, setInactiveChartAnchor] =
    useState<InactiveChartAnchor>(INACTIVE_CHART_ANCHORS.BR);

  const toggleActiveChart = useCallback(() => {
    setIsTopicsCarouselActive((prev) => !prev);
  }, []);

  const onDragInactiveChartStart = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      console.log(event);
      setHasDragStarted(true);
    },
    []
  );

  const onDragInactiveChartEnd = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      console.log(event);
      setHasDragStarted(false);
    },
    []
  );

  const chartViewContextValues = useMemo(
    () => ({
      isTopicsCarouselActive,
      hasDragStarted,
      inactiveChartAnchor,
      toggleActiveChart,
      onDragInactiveChartStart,
      onDragInactiveChartEnd,
    }),
    [
      isTopicsCarouselActive,
      hasDragStarted,
      inactiveChartAnchor,
      toggleActiveChart,
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
