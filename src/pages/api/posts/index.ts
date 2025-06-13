import connectDB from "../../../lib/mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import Post from "@models/Post";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();

  if (req.method === "POST") {
    try {
      const newPost = await Post.create(req.body);
      return res.status(201).json(newPost);
    } catch (error) {
      console.error("POST error:", error);
      return res.status(500).json({ error: "Failed to create post" });
    }
  }

  if (req.method === "GET") {
    try {
      const posts = await Post.find();
      return res.status(200).json(posts);
    } catch (error) {
      console.error("GET error:", error);
      return res.status(500).json({ error: "Failed to fetch posts" });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
