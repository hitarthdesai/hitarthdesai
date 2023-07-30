import { getCircleVectors } from "../util/getCircleVectors";
import { Coordinate } from "../util/types";
import { Icon } from "./Icon";

type TopicsCarouselProps = {
  width: number;
  height: number;
  topics: string[];
};

export const TopicsCarousel = ({
  width,
  height,
  topics,
}: TopicsCarouselProps) => {
  const iconUnitVectors = getCircleVectors(topics.length);
  const radius = Math.min(Math.abs(width), Math.abs(height)) / 4;

  return (
    <div className="relative w-full h-full flex flex-wrap animate-spin-slow">
      {topics.map((topic, index) => {
        const location: Coordinate = {
          x: radius * iconUnitVectors[index].x + width / 2,
          y: radius * iconUnitVectors[index].y + height / 2,
        };

        return (
          <Icon
            key={index}
            name={topic}
            className="animate-spin-slow-reverse"
            location={location}
          />
        );
      })}
    </div>
  );
};
