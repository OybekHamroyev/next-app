// models/GroupModel.ts
import mongoose, { Schema, models, model } from "mongoose";

const groupSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
  },
  { timestamps: true }
);

export const GroupModel = models.Group || model("Group", groupSchema);
