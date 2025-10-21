import React from "react";

export default function Header() {
  return (
    <header className="bg-white p-4 shadow-md flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">Reputation Dashboard</h1>
      <div className="text-sm text-gray-500">Live guest review monitoring</div>
    </header>
  );
}
