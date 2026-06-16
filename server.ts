import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import dotenv from "dotenv";
import fetch from "node-fetch";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post("/api/chat", async (req, res) => {
    const { messages, latestMessage } = req.body;
    
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("Gemini API key is missing on the server.");
      return res.status(500).json({ error: "AI assistant key is not configured in settings." });
    }

    try {
      const ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      // Format previous history into the format that Gemini expects if provided
      const contents = latestMessage || (messages && messages[messages.length - 1]?.content);

      if (!contents) {
        return res.status(400).json({ error: "Message content is required" });
      }

      const response = await ai.models.generateContent({
        model: 'gemini-3.5-flash',
        contents: contents,
        config: {
          systemInstruction: `You are the Alexsoft Studio Business Consultant AI. 
          Alexsoft Studio builds high-end software in Uzbekistan.
          Tone: Sophisticated, business-focused, professional.
          Key values: Automation, AI-driven profit increase, market-leading quality.
          Our projects: Billz, Express24, IMZO, Zamon Pay, MedCheck, Tashkent Logistics.
          Pricing: Landing pages from $1,500, SaaS from $5,000, Enterprise AI from $15,000.
          Speak clearly, explain technology in terms of ROI and business growth. If user chats in Russian, reply in Russian. If Uzbek, reply in Uzbek. If English, reply in English. Keep answers relatively concise and highly business-driven.`,
        }
      });

      res.json({ text: response.text });
    } catch (error: any) {
      console.error("Gemini server error:", error);
      res.status(500).json({ error: "AI systems are currently busy. Please contact the CEO directly.", details: error.message });
    }
  });

  app.post("/api/submit-order", async (req, res) => {
    const { orderDetails, userInfo } = req.body;
    
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.log("\n📬 [DEMO MODE: ORDER RECEIVED]");
      console.log("👤 CLIENT:", userInfo);
      console.log("📊 PROJECT:", orderDetails);
      console.log("💡 Tip: To send these to a real Telegram channel, set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in AI Studio Settings.\n");
      return res.json({ success: true, demo: true });
    }

    const message = `
🚀 *НОВАЯ ЗАЯВКА - ALEXSOFT STUDIO*

👤 *КЛИЕНТ:*
• Имя: ${userInfo.name}
• Контакт: ${userInfo.contact}

📊 *ДЕТАЛИ ПРОЕКТА:*
• Тип: ${orderDetails.type}
• Среда: ${orderDetails.platforms.join(", ")}
• Логика: ${orderDetails.complexity}
• Фичи: ${orderDetails.features.length > 0 ? orderDetails.features.join(", ") : "Стандарт"}

💰 *ОЦЕНКА:* ${orderDetails.finalPrice}
    `;

    try {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "Markdown",
        }),
      });

      if (response.ok) {
        res.json({ success: true });
      } else {
        const errData: any = await response.json();
        console.error("Telegram API Error:", JSON.stringify(errData, null, 2));
        
        let userErrorMessage = "Failed to send message to Telegram";
        if (errData.error_code === 403) {
          userErrorMessage = "Bot blocked or conversation not started. Please type /start to your bot.";
        } else if (errData.error_code === 400) {
          userErrorMessage = "Invalid Chat ID. Please check your TELEGRAM_CHAT_ID environment variable.";
        }
        
        res.status(errData.error_code || 500).json({ 
          error: userErrorMessage,
          details: errData
        });
      }
    } catch (error) {
      console.error("Network Error:", error);
      res.status(500).json({ error: "Network error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
