"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import s from "../../../insights/releases/releases.module.scss";

import People from "@assets/images/blog/people-work.png";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import Image from "next/image";
import { fetchPostsByCategory } from "../../../../app/api/contentful/api";
import { IAuthor } from "../../../../types/contentful/BlogPost";

import { paginArrowActive as PaginArrowActive } from "@assets/icons/paginArrowActive";
import { paginArrowDis as PaginArrowDis } from "@assets/icons/paginArrowDis";
import PreservingLink from "@shared/components/preserving-link/preserving-link";

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
            <Image
              aria-hidden
              alt={post.title}
              src={
                post.image?.url
                  ? post.image.url.startsWith("//")
                    ? `https:${post.image.url}`
                    : post.image.url
                  : People
              }
              className={s.image}
              width={300}
              height={200}
            />
            <div className={s.info}>
              <div>
                <p className={s.title}>
                  {post.author?.authorName || "Unknown Author"}
                </p>
                <p className={s.subtitle}>{post.author?.authorRole || ""}</p>
              </div>
              <div className={s.description}>
                {post.testimonialText &&
                  (typeof post.testimonialText === "string"
                    ? post.testimonialText
                    : documentToReactComponents(post.testimonialText))}
              </div>
              <PreservingLink className={s.btn} href={`/posts/${post.sys.id}`}>
                Read more
              </PreservingLink>
            </div>
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
