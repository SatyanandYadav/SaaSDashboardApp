import React from "react";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import SearchBar from "./SearchBar";

const Header: React.FC = () => (
  <header
    className="flex h-16 items-center justify-between bg-white px-4 shadow"
    aria-label="Main Header"
    data-testid="main-header"
  >
    <HeaderLeft />
    <div className="flex items-center">
      <SearchBar />
      <HeaderRight />
    </div>
  </header>
);

export default Header;
