import { configDotenv } from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

configDotenv({ path: "./.env" });

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("running at ", process.env.PORT);
  });
});
