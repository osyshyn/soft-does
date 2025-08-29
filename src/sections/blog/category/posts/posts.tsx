"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import s from "../../../insights/releases/releases.module.scss";

import { Document } from "@contentful/rich-text-types";
import { fetchPostsByCategory } from "../../../../app/api/contentful/api";
import { IAuthor } from "../../../../types/contentful/BlogPost";

import { paginArrowActive as PaginArrowActive } from "@assets/icons/paginArrowActive";
import { paginArrowDis as PaginArrowDis } from "@assets/icons/paginArrowDis";
import { BlogCard } from "@shared/components/cards";

type Post = {
  sys: { id: string };
  title: string;
  description: string;
  image?: { url: string };
  date?: string;
  author?: IAuthor | null;
  testimonialText?: Document | string | null;
  slug?: string;
};

export const CategoryPosts = () => {
  const { category } = useParams();
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 6;
  const totalPages = Math.max(1, Math.ceil(total / limit));

  useEffect(() => {
    if (!category || typeof category !== "string") return;
    fetchPostsByCategory(category, limit, (page - 1) * limit)
      .then(({ posts, total }) => {
        setPosts(posts || []);
        setTotal(total || 0);
      })
      .catch(() => {
        setPosts([]);
        setTotal(0);
      });
  }, [category, page]);

  if (!category) return null;
  if (!posts) return null;

  return (
    <section className={s.root}>
      <ul className={s.container}>
        {posts.map((post) => (
          <li key={post.sys.id}>
            <BlogCard
              post={{
                ...post,
                id: post.sys.id,
              }}
            />
          </li>
        ))}
      </ul>

      <div className={s.pagination}>
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          aria-label="Previous page"
          className={s.arrowBtn}
        >
          <span
            style={{ display: "inline-block", transform: "rotate(180deg)" }}
          >
            {page === 1 ? (
              <span
                style={{ display: "inline-block", transform: "rotate(180deg)" }}
              >
                <PaginArrowDis />
              </span>
            ) : (
              <PaginArrowActive />
            )}
          </span>
        </button>
        <span className={s.pageInfo}>
          {String(page).padStart(2, "0")}/{String(totalPages).padStart(2, "0")}{" "}
          Pages
        </span>
        <button
          onClick={() => setPage((p) => (p * limit < total ? p + 1 : p))}
          disabled={page * limit >= total}
          aria-label="Next page"
          className={s.arrowBtn}
        >
          <span style={{ display: "inline-block" }}>
            {page * limit >= total ? (
              <span
                style={{ display: "inline-block", transform: "rotate(180deg)" }}
              >
                <PaginArrowDis />
              </span>
            ) : (
              <PaginArrowActive />
            )}
          </span>
        </button>
      </div>
    </section>
  );
};
