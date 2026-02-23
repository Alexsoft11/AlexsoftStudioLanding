import { GoogleGenAI } from "@google/genai";

async function researchPricing() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const response = await ai.models.generateContent({
    model: "gemini-3-pro-preview",
    contents: "Research current market prices for high-end software development, custom AI solutions, and enterprise digital transformation in Uzbekistan (Tashkent) and globally for premium boutique agencies. Compare these to the following current prices for 'Alexsoft Studio': Landing from $1,500, E-commerce from $4,500, Custom AI from $15,000. Provide a recommended 'Premium' pricing structure that reflects a top-tier studio positioning.",
    config: {
      tools: [{ googleSearch: {} }],
    },
  });

  console.log(response.text);
}

researchPricing();
