import mongoose, { Schema } from "mongoose";
import { workspace } from "./workspace";
import validator from "validator";

const inviteSchema = new Schema({
  workspace: { type: Schema.Types.ObjectId, ref: "Workspace", required: true },
  email: { type: String, validate: [validator.isEmail, "Invalid Email"] },
  token: { type: String, required: true },
  expiresAt: { type: Date, required: true },
});

export const invite = mongoose.model("Invite", inviteSchema);
