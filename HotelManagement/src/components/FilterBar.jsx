import React from "react";

export default function FilterBar({ filters, setFilters, sources }) {
  return (
    <div className="bg-white p-4 rounded mb-6 flex flex-col md:flex-row gap-4 items-start md:items-center">
      <div className="flex gap-2 items-center">
        <label className="text-sm">Sentiment</label>
        <select
          value={filters.sentiment}
          onChange={(e) =>
            setFilters((f) => ({ ...f, sentiment: e.target.value }))
          }
          className="border p-2 rounded text-sm"
        >
          <option value="all">All</option>
          <option value="positive">Positive</option>
          <option value="neutral">Neutral</option>
          <option value="negative">Negative</option>
        </select>
      </div>
      <div className="flex gap-2 items-center">
        <label className="text-sm">Source</label>
        <select
          value={filters.source}
          onChange={(e) =>
            setFilters((f) => ({ ...f, source: e.target.value }))
          }
          className="border p-2 rounded text-sm"
        >
          <option value="all">All</option>
          {sources.map((src) => (
            <option key={src} value={src}>
              {src}
            </option>
          ))}
        </select>
      </div>
      <div className="ml-auto flex gap-2 items-center">
        <label className="text-sm">Search</label>
        <input
          type="text"
          placeholder="Search guest/title/text"
          value={filters.query}
          onChange={(e) => setFilters((f) => ({ ...f, query: e.target.value }))}
          className="border p-2 rounded text-sm"
        />
      </div>
    </div>
  );
}
