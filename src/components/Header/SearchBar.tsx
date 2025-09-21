import React from "react";

const SearchBar: React.FC = () => (
  <form
    className="mx-4 flex items-center rounded bg-gray-100 px-3 py-1"
    role="search"
    aria-label="Search"
    data-testid="header-search"
  >
    <span className="mr-2 text-gray-400" aria-hidden="true">
      🔍
    </span>
    <input
      className="bg-gray-100 text-gray-600 outline-none"
      type="search"
      placeholder="Search"
      aria-label="Search input"
      data-testid="search-input"
    />
    <kbd className="ml-2 rounded bg-gray-200 px-2 py-0.5 text-xs text-gray-400">⌘/</kbd>
  </form>
);

export default SearchBar;
