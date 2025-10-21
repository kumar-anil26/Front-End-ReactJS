import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import ReviewDetails from "./pages/ReviewDetails";
import Respond from "./pages/Respond";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/review/:id" element={<ReviewDetails />} />
          <Route path="/respond/:id" element={<Respond />} />
          <Route path="*" element={<div className="p-4">Page not found</div>} />
        </Routes>
      </div>
    </Router>
  );

}
