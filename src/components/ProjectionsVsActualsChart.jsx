import React from "react";
import { mockChartData } from "../constants";

const maxValue = 30; // For the scale up to 30M

const yLabels = [30, 20, 10];

const ProjectionsVsActualsChart = () => (
  <section
    className="rounded-[2rem] px-8 py-8 bg-gray-50 w-full h-full relative"
    aria-label="Projections vs Actuals"
    data-testid="graph-component"
  >
    <h3 className="font-semibold text-lg text-gray-700 pb-5" data-testid="graph-title">
      Projections vs Actuals
    </h3>
    <div className="flex">
      {/* Y-axis labels & grid lines */}
      <div className="flex flex-col justify-between items-end h-52 mr-2 relative z-10 pt-2 pb-2">
        {yLabels.map((label, i) => (
          <div key={label} className="flex items-center relative h-[33%] w-12">
            <span className="text-xs text-gray-400 mr-2 w-8 text-right">{label}M</span>
          </div>
        ))}
        {/* Zero label */}
        <span className="text-xs text-gray-400 mr-2 w-8 text-right">0</span>
      </div>
      {/* Chart area */}
      <div className="relative w-full h-52 pt-2 pb-2">
        {/* Horizontal grid lines */}
        {yLabels.map((label, i) => (
          <div
            key={label}
            className="absolute left-0 right-0 border-t border-gray-200"
            style={{ top: `${(i)/(yLabels.length)*100}%` }}
            aria-hidden="true"
          />
        ))}
        {/* Bars */}
        <div className="flex items-end h-full w-full space-x-6 relative z-20">
          {mockChartData.map((d, i) => (
            <div key={d.month} className="flex flex-col items-center w-16 h-full justify-end">
              <div className="relative w-[34px] h-44 flex flex-col justify-end">
                {/* Projected bar */}
                <div
                  className="absolute bottom-0 left-0 w-full bg-blue-200 rounded-t-md"
                  style={{ height: `${(d.projected / maxValue) * 100}%` }}
                  data-testid={`projected-bar-${i}`}
                />
                {/* Actual bar */}
                <div
                  className="absolute bottom-0 left-0 w-full bg-blue-600 opacity-60 rounded-t-md"
                  style={{ height: `${(d.actual / maxValue) * 100}%` }}
                  data-testid={`actual-bar-${i}`}
                />
              </div>
              <span className="mt-3 text-sm text-gray-600 font-medium" data-testid={`month-label-${i}`}>
                {d.month}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProjectionsVsActualsChart;
