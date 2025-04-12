import { GoogleGenerativeAI } from "@google/generative-ai";
import { configDotenv } from "dotenv";
configDotenv({ path: "./.env" });
export const getData = async (prompt,imagesThatCanBeUsed) => {
  const modifyPrompt = `Generate mock objects for [${prompt}]. just json text not anything else. ALso if user want real images link to be used then use the data i am giving here. Images link that can be used is = ${imagesThatCanBeUsed}`;
  const genAI = new GoogleGenerativeAI(process.env.GEMINIAPIKEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent(modifyPrompt);
  const data = result.response.text();
  return data.trim().substring(7, data.length - 4);
};
