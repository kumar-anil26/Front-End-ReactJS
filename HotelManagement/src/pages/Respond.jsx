import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getReviews } from "../services/api";

export default function Respond() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [review, setReview] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    getReviews().then((data) => setReview(data.find((r) => r.id === id)));
  }, [id]);

  if (!review) return <div className="p-4">Loading review...</div>;

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold mb-2">Respond to {review.guest}</h2>
      <textarea
        rows={6}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full border p-2 rounded"
      />
      <div className="mt-3 flex gap-3">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => navigate(`/review/${id}`)}
        >
          Send Response
        </button>
        <button
          className="px-4 py-2 border rounded"
          onClick={() => navigate(-1)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
