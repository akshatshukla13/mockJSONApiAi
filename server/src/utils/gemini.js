import { GoogleGenerativeAI } from "@google/generative-ai";
import { configDotenv } from "dotenv";
configDotenv({ path: "./.env" });
export const getData = async (prompt) => {
  const modifyPrompt = `Generate mock objects for [${prompt}]. just json text not anything else.`;
  const genAI = new GoogleGenerativeAI(process.env.GEMINIAPIKEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent(modifyPrompt);
  const data = result.response.text();
  return data.trim().substring(7, data.length - 4);
};
