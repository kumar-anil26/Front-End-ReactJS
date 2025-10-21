import React from "react";
import { Link } from "react-router-dom";

export default function ReviewCard({ review , currentPage}) {
  // Format date → "Oct 25"
  const formattedDate = new Date(review.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  return (
    <tr className="border border-gray-300 hover:bg-gray-50 transition">
      <td className="p-5 text-sm">{formattedDate}</td>
      <td className="p-5 text-sm">{review.guestName}</td>
      <td className="p-5 text-sm">{review.source}</td>
      <td className="p-5 text-sm flex gap-1">
        {Array.from({ length: 5 }, (_, i) => (
          <span
            key={i}
            className={i < review.rating ? "text-yellow-500" : "text-gray-300"}
          >
            ★
          </span>
        ))}
      </td>

      <td className="p-5">
        <span
          className={`px-2 py-1 rounded-full text-xs capitalize ${
            review.sentiment === "positive"
              ? "bg-green-100 text-green-800"
              : review.sentiment === "negative"
              ? "bg-red-100 text-red-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {review.sentiment}
        </span>
      </td>

     

      <td className="p-5 text-sm max-w-xs truncate">{review.reviewText}</td>

      <td className="p-5">
        <Link
          to={`/review/${review.id}?page=${currentPage}`}
          className="text-blue-600 hover:underline text-sm font-medium"
        >
          View
        </Link>
      </td>
    </tr>
  );
}
