import mongoose from "mongoose";
import express from "express";
import { configDotenv } from "dotenv";
import { connectDB } from "./config/database.js";

const app = express();
configDotenv();

connectDB();

app.listen(process.env.PORT, () => {
  console.log("Server is running on port ", process.env.PORT);
});
