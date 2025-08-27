"use client";

import { Arrow } from "@shared/assets/icons/short-arrow-right";
import { IBlogMain } from "../../../types/contentful/BlogPost";
import PreservingLink from "@shared/components/preserving-link/preserving-link";
import { useState, useEffect } from "react";
import { fetchBlog } from "app/api/contentful/api";
import { BlogCard } from "@shared/components/cards";

import s from "./releases.module.scss";
import clsx from "clsx";

function groupByCategory(posts: IBlogMain[]) {
  const map: Record<string, IBlogMain[]> = {};
  posts.forEach((post) => {
    const catName = post.category?.name?.toLowerCase() || "uncategorized";
    if (!map[catName]) map[catName] = [];
    map[catName].push(post);
  });
  return map;
}

export const Releases = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    fetchBlog().then(setPosts);
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  const grouped = groupByCategory(posts);

  const featuredPosts = grouped["featured"] || [];
  const otherCategories = Object.entries(grouped)
    .filter(([cat]) => cat !== "featured")
    .sort(([a], [b]) => {
      if (a === "uncategorized") return 1;
      if (b === "uncategorized") return -1;
      return a.localeCompare(b);
    });

  return (
    <section className={"wrapper"}>
      <div className={clsx(s.root, "container")}>
        {featuredPosts.length > 0 && (
          <div>
            <div className={s.captionContainer}></div>
            <ul className={s.container}>
              {featuredPosts.slice(0, 4).map((post) => (
                <li key={post.id}>
                  <BlogCard post={post} />
                </li>
              ))}
            </ul>
          </div>
        )}

        {otherCategories.map(([category, posts]) => {
          const mainPosts = posts.slice(0, 4);
          const hasMore = posts.length > 4;

          const categoryId = posts[0]?.category?.id || "unknown";

          return (
            <div key={category}>
              <div className={s.category}>
                <h2 className={s.category__title}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </h2>
                {hasMore && (
                  <PreservingLink
                    href={`/blog/category/${categoryId}`}
                    className={s.category__moreBtn}
                  >
                    More
                    <Arrow className={s.category__arrow} />
                  </PreservingLink>
                )}
              </div>
              <ul className={s.container}>
                {mainPosts.map((post) => (
                  <li key={post.id}>
                    <BlogCard post={post} />
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};
