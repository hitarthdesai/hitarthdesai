import Pie, { ProvidedProps } from "@visx/shape/lib/shapes/Pie";
import { GradientPinkBlue } from "@visx/gradient";
import { LanguageData } from "@/util/types";

const defaultMargin = { top: 0, right: 0, bottom: 0, left: 0 };

export type PieProps = {
  width: number;
  height: number;
  data: LanguageData[];
  margin?: typeof defaultMargin;
};

export default function LanguagesChart({
  width,
  height,
  data,
  margin = defaultMargin,
}: PieProps) {
  if (width < 10) return null;

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const radius = Math.min(innerWidth, innerHeight) / 2;
  const centerY = innerHeight / 2;
  const centerX = innerWidth / 2;

  return (
    <svg width={width} height={height}>
      <GradientPinkBlue id="visx-pie-gradient" />
      <rect
        rx={14}
        width={width}
        height={height}
        fill="url('#visx-pie-gradient')"
      />
      <g
        transform={`translate(${centerX + margin.left}, ${
          centerY + margin.top
        })`}
      >
        <Pie data={data} pieValue={(d) => d.usage} outerRadius={radius}>
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
}
