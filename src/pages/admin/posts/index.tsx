import { useState } from "react";
import Link from "next/link";
import { IPost } from "@models/Post";

import { withAdminAuth } from "@shared/utils/withAdminAuth";

import s from "./posts.module.scss";

export default function PostsPage({ initialPosts }: { initialPosts: IPost[] }) {
  const [posts, setPosts] = useState<IPost[]>(initialPosts);

  const deletePost = async (id: string) => {
    const confirmed = confirm("Are you sure you want to delete this post?");
    if (!confirmed) return;

    const res = await fetch(`/api/posts/${id}`, { method: "DELETE" });
    if (res.ok) {
      setPosts((prev) => prev.filter((post) => post._id !== id));
    }
  };

  return (
    <div className={s.wrapper}>
      <h1>Manage Posts</h1>
      <ul className={s.postList}>
        {posts.map((post) => (
          <li key={post._id} className={s.postItem}>
            <h2>Title: {post.title}</h2>
            <p>By {post.author}</p>
            <div className={s.actions}>
              <Link href={`/admin/posts/edit/${post._id}`}>Edit </Link>
              <button onClick={() => deletePost(post._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>

      <Link href="/admin/posts/create" className={s.createButton}>
        + Create New Post
      </Link>
    </div>
  );
}

export const getServerSideProps = withAdminAuth(async (ctx) => {
  const protocol = ctx.req.headers["x-forwarded-proto"] || "http";
  const host = ctx.req.headers.host;
  const res = await fetch(`${protocol}://${host}/api/posts`);
  const posts = await res.json();
  return { props: { initialPosts: posts } };
});
