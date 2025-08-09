import mongoose from "mongoose";
import express from "express";
import { configDotenv } from "dotenv";
import { connectDB } from "./config/database.js";
import userRoutes from "./routes/userRoutes.js";
import workspaceRoutes from "./routes/workspaceRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import inviteRoutes from "./routes/inviteRoutes.js";

const app = express();
configDotenv();

connectDB();

//Default route
app.get("/api", () =>
  console.log("Welcome to Workspace and Tasks Management API")
);

//routes
app.use("/api/user", userRoutes);
app.use("/api/workspace", workspaceRoutes);
app.use("/api/task", taskRoutes);
app.use("/api/invite", inviteRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
