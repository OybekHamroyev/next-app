// src/models/StudentModel.ts
import mongoose, { Schema, model, models, Document, Model } from "mongoose";

// 1. Interfeys
export interface StudentDocument extends Document {
  name: string;
  age: number;
  groupId: mongoose.Types.ObjectId;
}

// 2. Schema
const studentSchema = new Schema<StudentDocument>(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    groupId: {
      type: Schema.Types.ObjectId,
      ref: "Group",
      required: true,
    },
  },
  { timestamps: true }
);

// 3. Model
export const StudentModel: Model<StudentDocument> =
  models.Student || model<StudentDocument>("Student", studentSchema);
