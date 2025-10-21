import axios from "axios";

const BASE_URL = "https://j66igefcvufdzz-8000.proxy.runpod.net/api/reviews";

/**
 * Fetch paginated reviews
 */
export const getReviews = async (page = 1, limit = 20) => {
  try {
    const res = await axios.get(`${BASE_URL}?page=${page}&limit=${limit}`);
    return res.data.data || res.data;
  } catch (err) {
    console.error("Error fetching reviews:", err);
    return [];
  }
};
// /**
//  * Fetch paginated reviews
//  */
export const getSingleReview = async (id, page = 1, limit = 20) => {
  try {
    const res = await axios.get(`${BASE_URL}?page=${page}&limit=${limit}`);
    return res.data.data || res.data;
  } catch (err) {
    console.error("Error fetching single review:", err);
    return null;
  }
};

/**
 * Generate AI response for a single review
 * @param {string} reviewId - ID of the review
 * @returns {Promise<string>} - AI-generated response text
 */
export const getAiResponse = async (reviewId) => {
  try {
    const res = await axios.post(`${BASE_URL}/${reviewId}/generate-response`);
    return res.data?.response || "No response generated.";
  } catch (err) {
    console.error("Error generating AI response:", err);
    return "Error generating AI response.";
  }
};
