import mongoose, { Schema } from "mongoose";

const memberSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  role: {
    type: String,
    enum: ["owner", "member"],
    required: true,
  },
});

import mongoose, { Schema } from "mongoose";

const workspaceSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Workspace cannot exist without name"],
      unique: true,
    },
    description: { type: String, maxLength: 200 },
    owner: { type: Schema.Types.ObjectId },
    members: { type: [memberSchema], required: true },
  },
  { timestamps: true }
);

export const workspace = mongoose.model("Workspace", workspaceSchema);
