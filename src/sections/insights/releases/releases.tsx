import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@shared/assets/icons/short-arrow-right";
import People from "@shared/assets/images/blog/people-work.png";
import s from "./releases.module.scss";
import { IBlogMain } from "../../../types/contentful/BlogPost";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

interface ReleasesProps {
  posts: IBlogMain[];
}

function groupByCategory(posts: IBlogMain[]) {
  const map: Record<string, IBlogMain[]> = {};
  posts.forEach(post => {
    const catName = post.category?.name?.toLowerCase() || "uncategorized";
    if (!map[catName]) map[catName] = [];
    map[catName].push(post);
  });
  return map;
}

export const Releases = ({ posts }: ReleasesProps) => {
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
      <section className={s.root}>
        {featuredPosts.length > 0 && (
            <article className={s.article}>
              <div className={s.captionContainer}>
              </div>
              <ul className={s.container}>
                {featuredPosts.slice(0, 4).map((post) => (
                    <li key={post.id}>
                      <Image
                          aria-hidden
                          alt={post.author?.authorName || "Author"}
                          src={
                            post.mainImage?.url
                                ? post.mainImage.url.startsWith('//')
                                    ? `https:${post.mainImage.url}`
                                    : post.mainImage.url
                                : People
                          }
                          className={s.image}
                          width={300}
                          height={200}
                      />
                      <div className={s.info}>
                        <div>
                          <p className={s.title}>{post.author?.authorName || "Unknown Author"}</p>
                          <p className={s.subtitle}>{post.author?.authorRole || ""}</p>
                        </div>
                        <div className={s.description}>
                          {post.testimonialText &&
                              (typeof post.testimonialText === "string"
                                  ? post.testimonialText
                                  : documentToReactComponents(post.testimonialText))}
                        </div>
                        <Link className={s.btn} href={`/posts/${post.id}`}>
                          Read more
                        </Link>
                      </div>
                    </li>
                ))}
              </ul>
            </article>
        )}

          {otherCategories.map(([category, posts]) => {
              const mainPosts = posts.slice(0, 4);
              const hasMore = posts.length > 4;

              // !!! Ось тут беремо id категорії з першого поста цієї категорії:
              const categoryId = posts[0]?.category?.id || "unknown";

              return (
                  <article key={category} className={s.article}>
                      <div className={s.captionContainer}>
                          <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
                          {hasMore && (
                              <Link href={`/blog/category/${categoryId}`} className={s.moreBtn}>
                                  More
                                  <Arrow className={s.arrow} />
                              </Link>
                          )}
                      </div>
                      <ul className={s.container}>
                          {mainPosts.map((post) => (
                              <li key={post.id}>
                                  <Image
                                      aria-hidden
                                      alt={post.author?.authorName || "Author"}
                                      src={
                                          post.mainImage?.url
                                              ? post.mainImage.url.startsWith('//')
                                                  ? `https:${post.mainImage.url}`
                                                  : post.mainImage.url
                                              : People
                                      }
                                      className={s.image}
                                      width={300}
                                      height={200}
                                  />
                                  <div className={s.info}>
                                      <div>
                                          <p className={s.title}>{post.author?.authorName || "Unknown Author"}</p>
                                          <p className={s.subtitle}>{post.author?.authorRole || ""}</p>
                                      </div>
                                      <div className={s.description}>
                                          {post.testimonialText &&
                                              (typeof post.testimonialText === "string"
                                                  ? post.testimonialText
                                                  : documentToReactComponents(post.testimonialText))}
                                      </div>
                                      <Link className={s.btn} href={`/posts/${post.id}`}>
                                          Read more
                                      </Link>
                                  </div>
                              </li>
                          ))}
                      </ul>
                  </article>
              );
          })}

      </section>
  );
};
