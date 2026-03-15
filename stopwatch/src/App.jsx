import React from "react";
import StopWatch from "./components/StopWatch";

export default function App() {
  return (
    <div className="min-h-screen bg-linear-to-r from-purple-600 via-pink-400 to-red-500 flex items-cente justify-center">
      <StopWatch />
    </div>
  );
}
