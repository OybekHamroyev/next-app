// ✅ pages/api/students/[id].ts
import type { NextApiRequest, NextApiResponse } from "next";
import { dbConnect } from "@/lib/dbConnect";
import { StudentModel } from "@/models/StudentModel";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  const { id } = req.query;

  if (!id || typeof id !== "string") {
    return res.status(400).json({ error: "Invalid ID" });
  }

  try {
    switch (req.method) {
      case "GET": {
        const student = await StudentModel.findById(id).populate("groupId");
        if (!student) {
          return res.status(404).json({ error: "Student not found" });
        }
        return res.status(200).json(student);
      }

      case "PUT": {
        const updatedStudent = await StudentModel.findByIdAndUpdate(
          id,
          req.body,
          { new: true, runValidators: true }
        );
        if (!updatedStudent) {
          return res.status(404).json({ error: "Student not found" });
        }
        return res.status(200).json(updatedStudent);
      }

      case "DELETE": {
        const deletedStudent = await StudentModel.findByIdAndDelete(id);
        if (!deletedStudent) {
          return res.status(404).json({ error: "Student not found" });
        }
        return res.status(204).end();
      }

      default:
        res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    return res.status(500).json({ error: "Server error", details: error });
  }
}
