// ✅ models/StudentModel.ts - Fully typed with Document
import mongoose, {
  Schema,
  model,
  models,
  Document,
  Model,
  InferSchemaType,
} from "mongoose";

// Define the schema
const studentSchema = new Schema(
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

// Infer the TypeScript type
export type StudentDocument = InferSchemaType<typeof studentSchema>;

// Export the model with proper typing
export const StudentModel: Model<StudentDocument> =
  models.Student || model("Student", studentSchema);
