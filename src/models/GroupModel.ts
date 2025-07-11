import mongoose, { Schema } from "mongoose";

const groupSchema = new Schema({
  name: { type: String, required: true },
  description: String,
});
export const Group =
  mongoose.models.Group || mongoose.model("Group", groupSchema);
