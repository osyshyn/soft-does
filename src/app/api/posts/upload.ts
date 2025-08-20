import type { NextApiRequest, NextApiResponse } from "next";
import formidable, { File } from "formidable";
import { v2 as cloudinary } from "cloudinary";

export const config = {
  api: {
    bodyParser: false,
  },
};

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

type FormidableFile = File & { filepath: string };

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const form = formidable({ keepExtensions: true });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ message: "Form parsing error", error: err });
    }

    const file = files?.image as FormidableFile | FormidableFile[] | undefined;

    if (!file) {
      return res.status(400).json({ message: "No image uploaded" });
    }

    const uploadFile = Array.isArray(file) ? file[0] : file;

    try {
      const result = await cloudinary.uploader.upload(uploadFile.filepath, {
        folder: "nextjs_uploads",
      });

      return res.status(200).json({ imageUrl: result.secure_url });
    } catch (error) {
      return res.status(500).json({ message: "Upload to Cloudinary failed", error });
    }
  });
}
