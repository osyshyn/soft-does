import {IBlogPost} from "../../types/contentful/BlogPost";

export default function getSimilarArticles(posts: IBlogPost[], currentId: string | number): IBlogPost[] {
    const idx = posts.findIndex(p => String(p.id) === String(currentId));
    if (idx === -1) return posts.slice(0, 2);

    const prev = posts.slice(Math.max(0, idx - 2), idx);
    const next = posts.slice(idx + 1, idx + 3);

    return [...prev, ...next];
}