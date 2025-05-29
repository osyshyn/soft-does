import connectDB from "../../lib/mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import Post from "@models/Post";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();

  const { id } = req.query;

  if (req.method === "GET") {
    const post = await Post.findById(id);
    return res.status(200).json(post);
  }

  if (req.method === "PUT") {
    const updatedPost = await Post.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    return res.status(200).json(updatedPost);
  }

  if (req.method === "DELETE") {
    await Post.findByIdAndDelete(id);
    return res.status(204).end();
  }

  res.status(405).json({ error: "Method not allowed" });
}
