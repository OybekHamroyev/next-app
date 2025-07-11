import mongoose, { Schema } from "mongoose";

const studentSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  groupId: {
    type: Schema.Types.ObjectId,
    ref: "Group",
    required: true,
  },
});

export const Student =
  mongoose.models.Student || mongoose.model("Student", studentSchema);
