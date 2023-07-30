import Pie, { ProvidedProps } from "@visx/shape/lib/shapes/Pie";
import { GradientPinkBlue } from "@visx/gradient";
import { LanguageData } from "@/util/types";

export type LanguagesChartProps = {
  width: number;
  height: number;
  data: LanguageData[];
};

export const LanguagesChart = ({
  data,
  width,
  height,
}: LanguagesChartProps) => {
  const radius = Math.min(width, height) / 2;
  const centerX = width / 2;
  const centerY = height / 2;

  return (
    <svg width={width} height={height}>
      <GradientPinkBlue id="visx-pie-gradient" />
      <rect
        rx={14}
        width={width}
        height={height}
        fill="url('#visx-pie-gradient')"
      />
      <g transform={`translate(${centerX}, ${centerY})`}>
        <Pie data={data} pieValue={(d) => d.usage} outerRadius={radius - 16}>
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
  );
};
