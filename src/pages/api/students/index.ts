import { dbConnect } from "../../../lib/dbConnect";
import { Student } from "../../../models/StudentModel";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    const students = await Student.find().populate("groupId");
    res.json(students);
  } else if (req.method === "POST") {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } else {
    res.status(405).end();
  }
}
