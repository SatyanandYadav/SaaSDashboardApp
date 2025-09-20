import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="flex gap-4 bg-gray-100 p-4 shadow">
      <Link to="/dashboard" className="hover:text-blue-500">
        Dashboard
      </Link>
      <Link to="/orderList" className="hover:text-green-500">
        OrderList
      </Link>
    </nav>
  );
};

export default Navbar;
