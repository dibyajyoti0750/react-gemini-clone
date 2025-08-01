import { GoogleGenAI } from "@google/genai";

export async function main(prompt) {
  try {
    const ai = new GoogleGenAI({
      apiKey: "AIzaSyAyRsCnNX7UFUDL2pT3lvBuWW0NAj6Zqaw",
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

    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
    return "Something went wrong while processing your request.";
  }
}
