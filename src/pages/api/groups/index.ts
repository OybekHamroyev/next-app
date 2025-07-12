// pages/api/groups/index.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { dbConnect } from "@/lib/dbConnect";
import { GroupModel } from "@/models/GroupModel";
import { Group } from "@/models/Group";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const groups: Group[] = await GroupModel.find().lean();
      return res.status(200).json(groups);
    } catch (error) {
      return res.status(500).json({ error: "Server error" });
    }
  } else if (req.method === "POST") {
    try {
      const newGroup = new GroupModel(req.body);
      const savedGroup = await newGroup.save();
      return res.status(201).json(savedGroup);
    } catch (error) {
      return res.status(400).json({ error: "Bad request" });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
