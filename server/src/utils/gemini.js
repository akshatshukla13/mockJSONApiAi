// import { GoogleGenerativeAI } from "@google/generative-ai";
// import { configDotenv } from "dotenv";
// configDotenv({ path: "./.env" });
// export const getData = async (prompt,imagesThatCanBeUsed) => {
//   const modifyPrompt = `Generate mock objects for [${prompt}]. just json text not anything else. ALso if user want real images link to be used then use the data i am giving here. Images link that can be used is = ${imagesThatCanBeUsed}`;
//   const genAI = new GoogleGenerativeAI(process.env.GEMINIAPIKEY);
//   const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
//   const result = await model.generateContent(modifyPrompt);
//   const data = result.response.text();
//   return data.trim().substring(7, data.length - 4);
// };


import { GoogleGenerativeAI } from "@google/generative-ai";
import { configDotenv } from "dotenv";

configDotenv({ path: "./.env" });

export const getData = async (prompt, imagesThatCanBeUsed = {}) => {
  try {
    // Convert images object to string representation
    const imagesString = JSON.stringify(imagesThatCanBeUsed);
    
    const modifyPrompt = `
      You are a JSON data generator. Strictly follow these instructions:
      1. Generate mock data for: ${prompt}
      2. Return ONLY valid JSON format text, nothing else
      3. Do not include any markdown formatting or code blocks
      4. If real images are requested, use these available image URLs: ${imagesString}
      5. The response must be parseable with JSON.parse()
      6. Structure the data appropriately for the requested mock objects
      7. If no images are needed, ignore the image URLs
    `;

    const genAI = new GoogleGenerativeAI(process.env.GEMINIAPIKEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const result = await model.generateContent(modifyPrompt);
    const responseText = result.response.text();
    
    // Clean the response to ensure it's valid JSON
    let jsonString = responseText.trim();
    
    // Remove potential markdown code block wrappers
    if (jsonString.startsWith('```json')) {
      jsonString = jsonString.substring(7);
    }
    if (jsonString.startsWith('```')) {
      jsonString = jsonString.substring(3);
    }
    if (jsonString.endsWith('```')) {
      jsonString = jsonString.substring(0, jsonString.length - 3);
    }
    
    // Parse to validate it's proper JSON, then return stringified version
    const parsedData = JSON.parse(jsonString);
    return JSON.stringify(parsedData);
    
  } catch (error) {
    console.error("Error generating content:", error);
    throw new Error("Failed to generate valid JSON data");
  }
};