import React, { useEffect, useState } from "react";
import FilterBar from "../components/FilterBar";
import ReviewCard from "../components/ReviewCard";
import { getReviews } from "../services/api";

export default function Dashboard() {
  const [reviews, setReviews] = useState([]);
  const [sources, setSources] = useState([]);
  const [filters, setFilters] = useState({
    sentiment: "all",
    source: "all",
    query: "",
  });
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  //Fetching the all sources
  useEffect(() => {
    const fetchSources = async () => {
      const data = await getReviews(page);
      const uniqueSources = [
        ...new Set(data.reviews.map((r) => r.source).filter(Boolean)),
      ];
      setSources(uniqueSources);
    };

    fetchSources();
  }, [page]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const data = await getReviews(page);

      if (Array.isArray(data)) {
        setReviews(data.reviews);
      } else if (data.reviews && Array.isArray(data.reviews)) {
        setReviews(data.reviews);
      } else {
        setReviews([]);
      }

      setLoading(false);
    };

    fetchData();
  }, [page]);

  const filteredReviews = reviews.filter((r) => {
    const reviewSentiment = r.sentiment?.toLowerCase() || "";
    if (filters.sentiment !== "all" && reviewSentiment !== filters.sentiment)
      return false;

    const reviewSource = r.source?.toLowerCase() || "";
    const filterSource = filters.source?.toLowerCase() || "all";
    if (filters.source !== "all" && reviewSource !== filterSource) return false;

    const q = filters.query.toLowerCase();
    if (
      q &&
      !`${r.guestName} ${r.reviewTitle} ${r.reviewText}`
        .toLowerCase()
        .includes(q)
    )
      return false;

    return true;
  });

  return (
    <div>
      <div className="sticky top-0 z-10 bg-white shadow-sm">
        <FilterBar
          filters={filters}
          setFilters={setFilters}
          sources={sources}
        />
      </div>

      {loading ? (
        <div className="text-center py-12 text-gray-500">Loading reviews…</div>
      ) : (
        <>
          <div className="mx-5 my-4 overflow-x-auto shadow border rounded-lg">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50 text-sm font-semibold text-left">
                  <th className="p-4 ">Date</th>
                  <th className="p-4 ">Guest</th>
                  <th className="p-4 ">Source</th>
                  <th className="p-4 ">Rating</th>
                  <th className="p-4 ">Sentiment</th>

                  <th className="p-4 ">Review</th>
                  <th className="p-4 ">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {filteredReviews.map((r) => (
                  <ReviewCard key={r.id} review={r} currentPage={page} />
                ))}
              </tbody>
            </table>
          </div>

          {filteredReviews.length === 0 && (
            <div className="col-span-full text-center text-gray-500 py-12 border rounded-md">
              No reviews match your filters.
            </div>
          )}

          {/* Pagination */}
          <div className="flex justify-center mt-8 gap-2">
            {[...Array(10)].map((_, i) => {
              const p = i + 1;
              return (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`px-3 py-2 rounded-md border ${
                    page === p ? "bg-black text-white" : "bg-white"
                  }`}
                >
                  {p}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
