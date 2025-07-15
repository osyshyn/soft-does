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

// Групування по категоріях
function groupByCategory(posts: IBlogMain[]) {
  const map: Record<string, IBlogMain[]> = {};
  posts.forEach(post => {
    const catName = post.category?.name || "Uncategorized";
    if (!map[catName]) map[catName] = [];
    map[catName].push(post);
  });
  return map;
}

export const Releases = ({ posts }: ReleasesProps) => {
  const grouped = groupByCategory(posts);

  return (
      <section className={s.root}>
        {Object.entries(grouped).map(([category, posts]) => {
          const mainPosts = posts.slice(0, 4);
          const hasMore = posts.length > 4;

          return (
              <article key={category} className={s.article}>
                <div className={s.captionContainer}>
                  <h2>{category}</h2>
                  {hasMore && (
                      <Link href={`/blog/category/${encodeURIComponent(category)}`}>
                        <button>
                          More
                          <Arrow className={s.arrow} />
                        </button>
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
                                    : documentToReactComponents(post.testimonialText))
                            }
                          </div>
                          <Link className={s.btn} href={`/blog/${post.slug}`}>
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
