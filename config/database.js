import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv();

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connection Established ✅");
  } catch (error) {
    console.error("❌Connection error", error);
    process.exit(1);
  }
};
