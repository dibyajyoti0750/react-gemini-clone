import { GoogleGenAI } from "@google/genai";

export async function main(prompt) {
  try {
    const ai = new GoogleGenAI({
      apiKey: import.meta.env.VITE_GEMINI_API_KEY,
    });
    const tools = [{ googleSearch: {} }];
    const config = { thinkingConfig: { thinkingBudget: -1 }, tools };
    const model = "gemini-2.5-pro";
    const contents = [{ role: "user", parts: [{ text: prompt }] }];

    const response = await ai.models.generateContentStream({
      model,
      config,
      contents,
    });

    let result = "";
    for await (const chunk of response) {
      result += chunk.text;
    }

    return result;
  } catch (err) {
    console.error(err);
    return "Something went wrong while processing your request.";
  }
}
