import Pie, { ProvidedProps } from "@visx/shape/lib/shapes/Pie";
import { GradientTealBlue } from "@visx/gradient";
import { LanguageData } from "@/util/types";
import { useChartViewContext } from "../contexts/ChartViewContext";

export type LanguagesChartProps = {
  width: number;
  height: number;
  data: LanguageData[];
  className?: string;
};

export const LanguagesChart = ({
  data,
  width,
  height,
  className,
}: LanguagesChartProps) => {
  const {
    hasDragStarted,
    toggleActiveChart,
    onDragInactiveChartStart,
    onDragInactiveChartEnd,
  } = useChartViewContext();
  const radius = Math.min(width, height) / 2;
  const centerX = width / 2;
  const centerY = height / 2;

  return (
    <div
      draggable
      className={`${className}`}
      onClick={toggleActiveChart}
      onDragStart={onDragInactiveChartStart}
      onDragEnd={onDragInactiveChartEnd}
    >
      <svg width={width} height={height}>
        <GradientTealBlue id="visx-pie-gradient" />
        <rect width={width} height={height} fill="url('#visx-pie-gradient')" />
        {!hasDragStarted && (
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
                          fill={`rgba(255, 102, 153, ${
                            1 - index / (arcs.length + 1)
                          })`}
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
        )}
      </svg>
    </div>
  );
};
