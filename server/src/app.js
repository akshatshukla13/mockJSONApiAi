import express from "express";
import cors from "cors";
import { createData } from "./controller/createData.js";
import cookieParser from "cookie-parser";
import { serveData } from "./controller/serveData.js";

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.post("/create/", createData);

app.get("/api/:key", serveData);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

export { app };
