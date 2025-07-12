import mongoose, {
  Schema,
  model,
  models,
  Document,
  Model,
  InferSchemaType,
} from "mongoose";

// Faqat SchemaType interfeys
const groupSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
});

// Schema asosida tur hosil qilamiz
type GroupDocument = InferSchemaType<typeof groupSchema>;

// Model yaratamiz
export const GroupModel: Model<GroupDocument> =
  models.Group || model("Group", groupSchema);

export type { GroupDocument };
