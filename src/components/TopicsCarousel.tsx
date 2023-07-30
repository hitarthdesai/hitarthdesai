import { getCircleVectors } from "../util/getCircleVectors";
import { Coordinate } from "../util/types";
import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";

type TopicsCarouselProps = {
  topics: string[];
};

const RADIUS = 70;

export const TopicsCarousel = ({ topics }: TopicsCarouselProps) => {
  const iconsContainer = useRef<HTMLDivElement>(null);
  const iconUnitVectors = getCircleVectors(topics.length);

  const [newOrigin, setNewOrigin] = useState<Coordinate | null>(null);
  useEffect(() => {
    if (!iconsContainer.current) return;

    setNewOrigin({
      x: iconsContainer.current.getBoundingClientRect().width / 2,
      y: iconsContainer.current.getBoundingClientRect().height / 2,
    } as Coordinate);
  }, []);

  console.log(newOrigin);

  return (
    <div
      ref={iconsContainer}
      className="relative row-span-2 col-span-2 w-full h-full flex flex-wrap place-items-center animate-spin-slow"
    >
      {newOrigin &&
        topics.map((topic, index) => {
          const location: Coordinate = {
            x: RADIUS * iconUnitVectors[index].x + newOrigin.x,
            y: RADIUS * iconUnitVectors[index].y + newOrigin.y,
          };

          return (
            <Icon
              key={index}
              name={topic}
              className="flex-grow flex-shrink basis-auto animate-spin-slow-reverse"
              location={location}
            />
          );
        })}
    </div>
  );
};
