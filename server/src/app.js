import express from "express";
import cors from "cors";
import { createData } from "./controller/createData.js";
import cookieParser from "cookie-parser";
import { serveData } from "./controller/serveData.js";

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors({
  origin: 'https://fake-api-three-theta.vercel.app'
}));

app.post("/create/", createData);

app.get("/api/:key", serveData);

app.get("/", (req, res) => {
  res.redirect("https://fake-api-three-theta.vercel.app/");
});

export { app };
