// src/services/aiService.js
const API_KEY = "AIzaSyAoMcehOdslPfqhTyzqvDKTNZ4DMwCtJQ8"; // Replace with your Gemini API key
// src/services/aiService.js
const GEMINI_API_URL = "https://api.gemini.com/v1"; // Ensure this is the correct base URL

export const getAIResponse = async (question) => {
  try {
    const response = await fetch(`${GEMINI_API_URL}/answer`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`, // Ensure this is your correct API key
      },
      body: JSON.stringify({ question }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `Error: ${errorData.message || "Failed to fetch AI response"}`
      );
    }

    const data = await response.json();
    return data.answer; // Adjust based on the actual response structure
  } catch (error) {
    console.error("Error fetching AI response: ", error);
    throw error;
  }
};
