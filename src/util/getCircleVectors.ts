import { Coordinate } from "./types";

export const getCircleVectors = (n: number) => {
  const angle = (2 * Math.PI) / n;
  const points: Coordinate[] = [{ x: 0, y: 1 }];
  for (let i = 1; i < n; i++) {
    const newPoint: Coordinate = {
      x: Math.sin(i * angle),
      y: Math.cos(i * angle),
    };
    points.push(newPoint);
  }

  return points;
};
