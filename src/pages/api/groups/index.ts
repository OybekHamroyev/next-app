import type { NextApiRequest, NextApiResponse } from "next";
import { dbConnect } from "../../../lib/dbConnect";
import { Group } from "../../../models/GroupModel";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  if (req.method === "GET") {
    const groups = await Group.find();
    res.status(200).json(groups);
  } else if (req.method === "POST") {
    const group = await Group.create(req.body);
    res.status(201).json(group);
  } else {
    res.status(405).end();
  }
}
