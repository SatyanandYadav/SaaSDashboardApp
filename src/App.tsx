import React from "react";
import "./App.css";
import { Link, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <nav className="flex gap-4 bg-gray-100 p-4">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/about">About</Link>
        <Link to="/home">Home</Link>
      </nav>

      <Routes>
        {/* Default route redirects to Dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        <Route path="/dashboard" element={<div>Dashboard</div>} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/home" element={<div>Home</div>} />

        {/* Catch-all route redirects to Dashboard */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </div>
  );
}

export default App;
