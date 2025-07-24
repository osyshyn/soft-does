import { Document } from "@contentful/rich-text-types";

export interface IContentfulMedia {
    sys: { id: string };
    url: string;
    title?: string | null;
    description?: string | null;
    [key: string]: any;
}

export interface IContentfulReference {
    sys: { id: string; linkType?: string; type?: string };
    [key: string]: any;
}

export interface IAuthor {
    id: string;
    authorName: string;
    authorRole?: string | null;
    authorAvatar?: IContentfulMedia | null;
    bio?: string | null;
}

export interface IBlogCategory {
    id: string;
    name: string;
}

export interface IBlogMain {
    id: string;
    mainImage?: IContentfulMedia | null;
    author?: IAuthor | null;
    testimonialText?: Document | string | null;
    slug?: string;
    category?: IBlogCategory | null;
    readMoreLabel?: string | null;
}

export interface IBlogSteps {
    id: string;
    stepNumber?: string | number;
    stepTitle?: string;
    stepDescription?: string;
}

export interface IBlogComments {
    id: string;
    authorName: string;
    authorAvatar?: IContentfulMedia | null;
    commentText: string;
    createdAt: string;
}

export interface IBlogPost {
    id: string;
    mainImage?: IContentfulMedia | null;
    author?: IAuthor | null;
    testimonialText?: Document | string | null;
    slug?: string;
    category?: IBlogCategory | null;
    readMoreLabel?: string | null;
    heroTitle?: string | null;
    heroDescription?: string | null;
    heroImages?: IContentfulMedia[] | null;
    stepTitle?: string | null;
    steps?: IBlogSteps[] | null;
    postContent?: Document | string | null;
    callToAction?: IContentfulReference | null;
    comments?: IBlogComments[] | null;
    // publishedAt?: string | null;
}
