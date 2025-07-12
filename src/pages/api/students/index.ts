// ✅ pages/api/students/index.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { dbConnect } from "@/lib/dbConnect";
import { StudentModel, StudentDocument } from "@/models/StudentModel";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const students: StudentDocument[] = await StudentModel.find()
        .populate("groupId")
        .lean();
      return res.status(200).json(students);
    } catch (error) {
      return res.status(500).json({ error: "Server error" });
    }
  } else if (req.method === "POST") {
    try {
      const newStudent = new StudentModel(req.body);
      const savedStudent = await newStudent.save();
      return res.status(201).json(savedStudent);
    } catch (error) {
      return res.status(400).json({ error: "Bad request" });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
