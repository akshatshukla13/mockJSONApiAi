import { model } from "../model/model.js";

export const serveData = async (req, res) => {
  console.log(req.params.key);

  const { key } = req.params;
  if (!key) {
    return res.status(400).json({ error: "key is required" });
  }

  const isApiDataAvailable = await model.findOne({ key: key });
  console.log(typeof isApiDataAvailable);
  console.log(isApiDataAvailable);
  if (isApiDataAvailable) {
    return res.status(200).json(JSON.parse(isApiDataAvailable.value));
  } else {
    return res.status(400).json({ error: "Some error occured" });
  }
};
