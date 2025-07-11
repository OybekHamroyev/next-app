import { dbConnect } from "../../../lib/dbConnect";
import { Student } from "../../../models/StudentModel";

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;

  if (req.method === "GET") {
    const student = await Student.findById(id).populate("groupId");
    res.json(student);
  } else if (req.method === "PUT") {
    const student = await Student.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(student);
  } else if (req.method === "DELETE") {
    await Student.findByIdAndDelete(id);
    res.status(204).end();
  } else {
    res.status(405).end();
  }
}
