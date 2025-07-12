// src/models/GroupModel.ts
import mongoose, { Schema, model, models, Document, Model } from "mongoose";

// 1. Document interfeysini yaratamiz
export interface GroupDocument extends Document {
  name: string;
  description?: string;
}

// 2. Schema aniqlaymiz
const groupSchema = new Schema<GroupDocument>({
  name: { type: String, required: true },
  description: { type: String },
});

// 3. Model tipini to‘g‘ri aniqlaymiz
export const GroupModel: Model<GroupDocument> =
  models.Group || model<GroupDocument>("Group", groupSchema);
