import { genAI } from "../config/genAI.js";

export const summarizeResponse = async (query, context) => {
    try {
        if (!query || !context) {
            return {
                success: false,
                error: "Query and context are required for summarization"
            };
        }

        const response = await genAI.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `
            You are an expert, knowledgeable, and friendly guide for Ethiopian Tourism.
Your goal is to provide travelers with accurate, engaging, and premium insights about Ethiopia's history, culture, and nature.

Rules:
- Answer the user's question using ONLY the provided data.
- Use a professional yet welcoming tone.
- Keep responses clear and easy to read.
- Do not add or guess information not found in the data.
- If the information is not in the data, politely say you don't have that specific detail yet.

Question:
${query}

Data:
${context}
      `
        });

        return {
            success: true,
            finalResponse: response.text
        };



    } catch (err) {
        console.error("Summarization error:", err);
        return {
            success: false,
            error: "LLM summarization failed: " + (err.message || "Unknown error")
        };
    }
};


export const generateGreetingResponse = async (query) => {
    try {
        const response = await genAI.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `
You are an expert, knowledgeable, and friendly guide for Ethiopian Tourism.
Your goal is to provide travelers with accurate, engaging, and premium insights about Ethiopia's history, culture, and nature.

The user has greeted you. Respond with a welcoming, professional, and friendly greeting.
Briefly mention how you can help them explore Ethiopia.

Greeting:
${query}
      `
        });

        return {
            success: true,
            finalResponse: response.text
        };

    } catch (err) {
        console.error("Greeting generation error:", err);
        return {
            success: false,
            error: "Greeting generation failed: " + (err.message || "Unknown error")
        };
    }
};
