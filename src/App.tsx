import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="flex">
      <div>
        <Sidebar></Sidebar>
      </div>
      <div className="flex-1">
        <Header />
      </div>
    </div>
  );
}

export default App;
