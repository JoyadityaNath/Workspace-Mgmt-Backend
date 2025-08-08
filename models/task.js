import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },

    status: {
      type: String,
      required: true,
      enum: ["todo", "in-progess", "completed"],
    },
    dueDate: {
      type: Date,
    },
    workspace: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Workspace",
      required: true,
    },
    assignedto: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const task = mongoose.model("Task", taskSchema);
