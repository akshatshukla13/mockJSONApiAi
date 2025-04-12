import { model } from "../model/model.js";
import { getData } from "../utils/gemini.js";
import { fetchImages } from "../utils/index.js";

export const createData = async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }
  
  const imagesThatCanBeUsed = await fetchImages(prompt);

  const result = await getData(prompt,imagesThatCanBeUsed);
  console.log(result);

  const key = Math.random().toString(36).slice(2) + Date.now().toString(36);

  const apiData = model.create({
    key,
    value: result,
  });

  const isApiDataAvailable = await model.findOne({ key: key });

  if (isApiDataAvailable) {
    return res.status(200).json({data : isApiDataAvailable});
  } else {
    return res.status(400).json({ error: "Some error occured" });
  }
};
