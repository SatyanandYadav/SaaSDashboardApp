import React from "react";
import ThemeIcon from "../../assets/Header/ThemeIcon";
import RefreshIcon from "../../assets/Header/RefreshIcon";
import NotificationIcon from "../../assets/Header/Notification";
import DashboardIcon from "../../assets/Header/DashboardIcon";

const HeaderRight: React.FC = () => (
  <div className="flex items-center space-x-5" aria-label="Header Right" data-testid="header-right">
    <button className="h-5 w-5" aria-hidden="true" data-testid="icon-sun">
      <ThemeIcon />
    </button>
    <button className="h-5 w-5" aria-hidden="true" data-testid="icon-history">
      <RefreshIcon />
    </button>
    <button className="h-5 w-5" aria-hidden="true" data-testid="icon-bell">
      <NotificationIcon />
    </button>
    <button className="h-5 w-5" aria-hidden="true" data-testid="icon-dash">
      <DashboardIcon />
    </button>
  </div>
);

export default HeaderRight;
