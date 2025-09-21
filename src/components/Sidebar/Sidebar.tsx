import React from "react";
import UserSection from "./UserSection";
import FavoriteSection from "./FavoriteSection";
import GroupedNav from "./GroupedNav";
import { mockSidebarData as sidebarData } from "../../constants";

const Sidebar = () => (
  <aside
    aria-label="Sidebar Navigation"
    className="flex h-screen w-72 flex-col bg-white p-4 shadow"
    data-testid="sidebar"
  >
    {/* User Section */}
    <UserSection name={sidebarData.user.name} />

    {/* Favorites Section */}
    <FavoriteSection
      items={sidebarData.favorites.items}
      isRecentlyViewed={sidebarData.favorites.isRecentlyViewed}
    />

    {/* Dashboard Section */}
    <GroupedNav data={sidebarData.dashboard} headerName="Dashboard" />

    {/* Pages Section */}
    <GroupedNav data={sidebarData.pages} headerName="Pages" />
  </aside>
);

export default Sidebar;
