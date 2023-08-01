import { INACTIVE_CHART_ANCHORS } from "../util/constants";
import { InactiveChartAnchor } from "../util/types";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

export type ChartViewContextClient = {
  inactiveChartAnchor: InactiveChartAnchor;
  changeInactiveChartAnchor: (newAnchor: InactiveChartAnchor) => void;
};

export type ChartViewProviderProps = {
  children: JSX.Element;
};

const ChartViewContext = createContext<ChartViewContextClient>(
  {} as ChartViewContextClient
);
const ChartViewProvider = ({ children }: ChartViewProviderProps) => {
  const [inactiveChartAnchor, setInactiveChartAnchor] =
    useState<InactiveChartAnchor>(INACTIVE_CHART_ANCHORS.BR);

  const changeInactiveChartAnchor = useCallback(
    (newAnchor: InactiveChartAnchor) => {
      setInactiveChartAnchor(newAnchor);
    },
    []
  );

  const chartViewContextValues = useMemo(
    () => ({ inactiveChartAnchor, changeInactiveChartAnchor }),
    []
  );

  return (
    <ChartViewContext.Provider value={chartViewContextValues}>
      {children}
    </ChartViewContext.Provider>
  );
};

export const useChartViewContext = () => useContext(ChartViewContext);

export default ChartViewProvider;
