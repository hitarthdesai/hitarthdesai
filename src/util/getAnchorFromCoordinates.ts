import { INACTIVE_CHART_ANCHORS } from "./constants";
import { Coordinate, InactiveChartAnchor } from "./types";

export const getAnchorFromCoordinates = (
  coordinate: Coordinate,
  width: number,
  height: number
): InactiveChartAnchor => {
  const { x, y } = coordinate;

  const isXInLeftHalf = x >= 0 && x < width / 2;
  const isYInTopHalf = y >= 0 && y < height / 2;

  if (isXInLeftHalf) {
    return isYInTopHalf ? INACTIVE_CHART_ANCHORS.TL : INACTIVE_CHART_ANCHORS.BL;
  } else {
    return isYInTopHalf ? INACTIVE_CHART_ANCHORS.TR : INACTIVE_CHART_ANCHORS.BR;
  }
};
