import { IncomingForm } from "formidable";
import nodemailer from "nodemailer";

export const config = {
  api: {
    bodyParser: false,
  },
};

const parseForm = (req) =>
  new Promise((resolve, reject) => {
    const form = new IncomingForm({ keepExtensions: true });
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  // const { name, email, company, number, message } = req.body;
  try {
    const { fields, files } = await parseForm(req);

    const uploadedFile = files?.file?.length ? files.file[0] : null;

    const getField = (val) => (Array.isArray(val) ? val[0] : val);

    const name = getField(fields.name);
    const email = getField(fields.email);
    const company = getField(fields.company);
    const number = getField(fields.number);
    const message = getField(fields.message);

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nPhone: ${number}\nMessage: ${message}`,
      attachments: uploadedFile
        ? [
            {
              filename: uploadedFile?.originalFilename,
              path: uploadedFile?.filepath,
              encoding: "base64",
            },
          ]
        : [],
    });

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("API error:", error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}
