import React from "react";
import DashboardIcon from "../../assets/Header/DashboardIcon";
import StarIcon from "../../assets/Header/StarIcon";

const HeaderLeft: React.FC = () => (
  <div className="flex items-center space-x-3" aria-label="Header Left" data-testid="header-left">
    <button className="h-6 w-6" aria-hidden="true" data-testid="icon-dashboard">
      <DashboardIcon />
    </button>
    <button className="h-6 w-6" aria-hidden="true" data-testid="icon-star">
      <StarIcon />
    </button>
    <span className="font-medium text-gray-600" data-testid="header-title">
      Dashboards
    </span>
    <span className="mx-1 text-gray-400" aria-hidden="true">
      /
    </span>
    <span className="font-semibold text-black" data-testid="header-subtitle">
      Default
    </span>
  </div>
);

export default HeaderLeft;
