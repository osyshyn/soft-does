import mongoose, { Schema, Document } from "mongoose";
import {IAuthor, IBlogCategory, IBlogComments, IContentfulMedia} from "../types/contentful/BlogPost";

interface Section {
  heading: string;
  content: string;
}

interface Comment {
  author: string;
  date: string;
  text: string;
}

interface IButton {
    id: string;
    title: string;
    url: string;
}

interface IStep {
    id: string;
    stepNumber?: string | number;
    stepTitle?: string;
    stepDescription?: string;
}

interface IHeroCarousel {
    id: string;
    image: any;
    url: string;
}

export interface IPost extends Document {
  _id: string;
  mainImage?: IContentfulMedia | null;
  author?: IAuthor | null;
  testimonialText?: Document | string | null;
  category?: IBlogCategory | null;
  postContent?: Document | string | null;
  authorPosition: string;
  title: string;
  heroDescription: string;
  heroButton1: IButton;
  heroButton2: IButton;
  heroCarousel: IHeroCarousel[];
  introduction: string;
  stepTitle: string;
  steps: IStep[];
  sections: Section[];
  sidebarContactTitle: string;
  sidebarContactButton: IButton;
  imagePreviewUrl?: string;
  imageAuthorUrl?: string;
  imageUrl?: string;
    comments?: IBlogComments[] | null;
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
