// models/StudentModel.ts
import mongoose, { Schema, model, models } from "mongoose";

const studentSchema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    groupId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Group",
      required: true,
    },
  },
  { timestamps: true }
);

export const StudentModel = models.Student || model("Student", studentSchema);
