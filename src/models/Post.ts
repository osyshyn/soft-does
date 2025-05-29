import mongoose, { Schema, Document } from "mongoose";

interface Section {
  heading: string;
  content: string;
}

interface Comment {
  author: string;
  date: string;
  text: string;
}

export interface IPost extends Document {
  _id: string;
  author: string;
  authorPosition: string;
  title: string;
  introduction: string;
  sections: Section[];
  comments: Comment[];
  imagePreviewUrl?: string;
  imageAuthorUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

const SectionSchema = new Schema<Section>({
  heading: { type: String, required: true },
  content: { type: String, required: true },
});

const CommentSchema = new Schema<Comment>({
  author: { type: String, required: true },
  date: { type: String, required: true },
  text: { type: String, required: true },
});

const PostSchema = new Schema<IPost>(
  {
    author: { type: String, required: true },
    authorPosition: { type: String, default: "" },
    title: { type: String, required: true },
    introduction: { type: String, required: true },
    sections: { type: [SectionSchema], default: [] },
    comments: { type: [CommentSchema], default: [] },
    imagePreviewUrl: { type: String },
    imageAuthorUrl: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Post || mongoose.model<IPost>("Post", PostSchema);
