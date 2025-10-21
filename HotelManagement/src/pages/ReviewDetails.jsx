import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getAiResponse, getSingleReview } from "../services/api";

export default function ReviewDetails() {
  const { id } = useParams();
  const [review, setReview] = useState(null);
  const [aiResponse, setAiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");

  useEffect(() => {
    getSingleReview(id, page).then((data) => {
      const found = data.reviews.find((r) => r.id === id);
      setReview(found);
      setAiResponse(found?.aiResponse || "");
    });
  }, [id, page]);

  if (!review) return <div className="p-4">Loading review...</div>;

  // Format date as "Oct 25"
  const formattedDate = new Date(review.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  const handleGenerateAIResponse = async () => {
    if (!review) return;
    setLoading(true);
    const reply = await getAiResponse(id);
    setAiResponse(reply);
    setLoading(false);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-2xl font-semibold">Detail View</h1>

      {/* Guest Info */}
      <div className="bg-white p-6 rounded-lg shadow space-y-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <p className="text-xs text-gray-500">Guest</p>
          <p className="font-medium">{review.guestName}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Source</p>
          <p className="font-medium">{review.source}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Date</p>
          <p className="font-medium">{formattedDate}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Rating</p>
          <p className="font-medium flex items-center gap-1">
            {Array.from({ length: 5 }, (_, i) => (
              <span
                key={i}
                className={
                  i < review.rating ? "text-yellow-400" : "text-gray-300"
                }
              >
                ★
              </span>
            ))}
            <span className="text-gray-500 text-sm">({review.rating}/5)</span>
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Sentiment</p>
          <p className="font-medium capitalize">{review.sentiment}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Status</p>
          <span
            className={`inline-block px-2 py-1 text-xs rounded ${
              review.rating <= 1 && review.sentiment === "negative"
                ? "bg-red-100 text-red-800"
                : "bg-green-100 text-green-800"
            }`}
          >
            {review.rating <= 1 && review.sentiment === "negative"
              ? "Critical"
              : "Normal"}
          </span>
        </div>
      </div>

      {/* Critical Alert */}
      {review.rating <= 1 && review.sentiment === "negative" && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded">
          <p className="font-semibold flex items-center gap-2">
            ⚠️ This review has been flagged by AI as critical.
          </p>
          <p className="text-sm mt-1">
            Extremely low rating (1 star) + negative sentiment. Recommended
            Action: Escalate to relevant staff immediately.
          </p>
        </div>
      )}

      {/* Review Content */}
      <div className="bg-white p-4 rounded shadow">
        <p className="font-semibold mb-2">Review Content</p>
        <p className="text-gray-700">{review.reviewText}</p>
      </div>

      {/* AI Suggested Response */}
      <div className="bg-white p-4 rounded shadow space-y-2">
        <div className="flex justify-between items-center">
          <p className="font-semibold">AI Suggested Response</p>
          <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
            Auto generated
          </span>
        </div>
        <textarea
          className="w-full p-2 border rounded"
          rows={5}
          value={aiResponse}
          onChange={(e) => setAiResponse(e.target.value)}
          placeholder="AI suggested reply will appear here..."
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-3">
        <button
          onClick={() => window.history.back()}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Back
        </button>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={handleGenerateAIResponse}
          disabled={loading}
        >
          {loading ? "Generating..." : "Respond (AI)"}
        </button>
      </div>
    </div>
  );
}
