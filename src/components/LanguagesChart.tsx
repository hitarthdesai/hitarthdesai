import Pie, { ProvidedProps } from "@visx/shape/lib/shapes/Pie";
import { GradientPinkBlue } from "@visx/gradient";
import { LanguageData } from "@/util/types";
import { useRef } from "react";

export type PieProps = {
  data: LanguageData[];
};

export const LanguagesChart = ({ data }: PieProps) => {
  const languagesContainer = useRef<HTMLDivElement>(null);
  const width = languagesContainer.current?.getBoundingClientRect().width ?? 0;
  const height =
    languagesContainer.current?.getBoundingClientRect().height ?? 0;

  const radius = Math.min(width, height) / 2;
  const centerX = width / 2;
  const centerY = height / 2;

  return (
    <div
      ref={languagesContainer}
      className="row-span-2 col-span-2 w-full h-full flex flex-wrap"
    >
      {languagesContainer.current && (
        <svg width={width} height={height}>
          <GradientPinkBlue id="visx-pie-gradient" />
          <rect
            rx={14}
            width={width}
            height={height}
            fill="url('#visx-pie-gradient')"
          />
          <g transform={`translate(${centerX}, ${centerY})`}>
            <Pie
              data={data}
              pieValue={(d) => d.usage}
              outerRadius={radius - 16}
            >
              {({ arcs, path }: ProvidedProps<LanguageData>) => (
                <>
                  {arcs.map((arc, index) => {
                    const [centroidX, centroidY] = path.centroid(arc);
                    return (
                      <g key={index}>
                        <path
                          d={path(arc) ?? ""}
                          fill={`rgba(93, 30, 91, ${1 - index / arcs.length})`}
                        />
                        <g>
                          <text
                            fill="white"
                            x={centroidX}
                            y={centroidY}
                            dy=".33em"
                            fontSize={9}
                            textAnchor="middle"
                            pointerEvents="none"
                          >
                            {arc.data.name}
                          </text>
                        </g>
                      </g>
                    );
                  })}
                </>
              )}
            </Pie>
          </g>
        </svg>
      )}
    </div>
  );
};
