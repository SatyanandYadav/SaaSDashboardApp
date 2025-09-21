import React from "react";
import MapImage from "../assets/Dashboard/Map";

// Mock data
const revenueData = {
  currentWeek: 58211,
  previousWeek: 68768,
  currentLine: [12, 11, 13, 15, 19, 25], // (in M)
  prevLine: [9, 18, 15, 12, 20, 22],     // (in M)
  months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
};
const locations = [
  { name: "New York", value: 72 },
  { name: "San Francisco", value: 39 },
  { name: "Sydney", value: 25 },
  { name: "Singapore", value: 61 }
];

// Line path generator for SVG (mocked for smooth look)
const linePath = vals => {
  const hGap = 60;
  return vals.map((v, i) => `${i === 0 ? "M" : "L"}${hGap * i},${170 - v * 5}`).join(" ");
};

export const RevenueChart = () => (
  <section className="bg-gray-50 rounded-[2rem] px-7 py-7 flex-1 min-w-[550px] mr-6" aria-label="Revenue Chart">
    <div className="flex items-center space-x-7 mb-4">
      <h3 className="font-bold text-lg flex-shrink-0">Revenue</h3>
      <span className="flex items-center space-x-2 text-gray-600 font-medium">
        <span className="w-3 h-3 rounded-full bg-black mr-1 inline-block" />
        Current Week <span className="font-bold ml-1">${revenueData.currentWeek.toLocaleString()}</span>
      </span>
      <span className="flex items-center space-x-2 text-gray-600 font-medium">
        <span className="w-3 h-3 rounded-full bg-blue-200 mr-1 inline-block" />
        Previous Week <span className="font-bold ml-1">${revenueData.previousWeek.toLocaleString()}</span>
      </span>
    </div>
    <svg width={370} height={200} className="block overflow-visible w-full mb-2">
      {/* Y axis grid lines */}
      {[30, 20, 10].map((y, idx) => (
        <g key={y}>
          <text x={0} y={35 + idx * 50} fontSize="13" fill="#d1d5db">{y}M</text>
          <line x1={35} y1={35 + idx * 50} x2={350} y2={35 + idx * 50} stroke="#e5e7eb" strokeWidth={1} />
        </g>
      ))}
      {/* Current week line */}
      <path
        d={linePath(revenueData.currentLine)}
        stroke="black"
        strokeWidth={4}
        fill="none"
      />
      {/* Dashed previous week line */}
      <path
        d={linePath(revenueData.prevLine)}
        stroke="#93c5fd"
        strokeWidth={4}
        strokeDasharray="8"
        fill="none"
      />
      {/* Months x-axis */}
      {revenueData.months.map((m, idx) => (
        <text key={m} x={35 + idx * 60} y={190} textAnchor="middle" fontSize="15" fill="#6b7280">{m}</text>
      ))}
    </svg>
  </section>
);

export const RevenueByLocation = () => (
  <section className="bg-gray-50 rounded-[2rem] px-7 py-7 min-w-[260px]" aria-label="Revenue by Location">
    <h3 className="font-bold text-lg mb-5">Revenue by Location</h3>
    <div className="mb-6 flex justify-center">
      <MapImage />
      
    </div>
    <ul>
      {locations.map(loc => (
        <li key={loc.name} className="flex items-center justify-between mb-3">
          <span className="font-medium text-gray-700">{loc.name}</span>
          <span className="font-bold">{loc.value}K</span>
        </li>
      ))}
    </ul>
  </section>
);
