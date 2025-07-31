import Image from "next/image";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { IPost } from "@models/Post";
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import Link from "next/link";

import { SEO } from "@shared/ui/seo";
import Layout from "@shared/components/layout/layout";
import { Hero } from "@sections/postPage/hero/hero";
import { Simplify } from "@sections/postPage/simplify/simplify";

import { Facebook } from "@shared/assets/icons/blog/facebook";
import { Tg } from "@shared/assets/icons/blog/tg";
import { Whatsapp } from "@shared/assets/icons/blog/whatsapp";
import { X } from "@shared/assets/icons/blog/x";
import { Plus } from "@shared/assets/icons/blog/plus";
import Robot from "@shared/assets/images/blog/robot.png";

import s from "./post.module.scss";
import {useEffect, useRef, useState} from "react";
import {fetchBlog, fetchFullBlogPostList} from "../api/contentful/api";

interface PostPageProps {
  post: IPost;
}

const colors = ["#173B91", "#BF81FF", "#D75186"];

function getSimilarArticles(posts, currentId) {
  const idx = posts.findIndex(p => String(p.id) === String(currentId));
  if (idx === -1) return posts.slice(0, 2);

  const prev = posts.slice(Math.max(0, idx - 2), idx);
  const next = posts.slice(idx + 1, idx + 3);

  return [...prev, ...next];
}


export default function PostPage({ post }: PostPageProps) {
  const router = useRouter();
  const { id } = router.query;

  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    if (id) {
      fetchFullBlogPostList(String(id)).then(setPosts);
    }
  }, [id]);

  const ICONS = [Facebook, Tg, Whatsapp, X, Plus];

  const postContent = Array.isArray(posts) && posts[0]?.postContent ? posts[0].postContent : post.postContent;

  type Heading = { id: string; text: string };
  const headings: Heading[] = [];
  if (postContent && postContent.content) {
    postContent.content.forEach((node: any, idx: number) => {
      if (["heading-1", "heading-2", "heading-3"].includes(node.nodeType)) {
        const text = node.content?.map((n: any) => n.value).join('') || '';
        if (text) headings.push({ id: `heading-${idx}`, text });
      }
    });
  }

  const headingRefs = useRef<{[key: string]: HTMLHeadingElement | null}>({});

  const [activeHeading, setActiveHeading] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      let current = null;
      for (let i = 0; i < headings.length; i++) {
        const id = headings[i].id;
        const el = document.getElementById(id);
        if (el) {
          const { top } = el.getBoundingClientRect();
          if (top - 120 < 0) {
            current = id;
          }
        }
      }
      setActiveHeading(current || (headings[0]?.id ?? null));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings]);

  const richTextOptions: Options = {
    renderNode: {
      'heading-2': (node, children) => {
        const idx = postContent.content.findIndex((n: any) => n === node);
        const id = `heading-${idx}`;
        return (
            <h2
                className={s.title}
                id={id}
                ref={el => headingRefs.current[id] = el}
            >
              {children}
            </h2>
        );
      },
      'heading-3': (node, children) => {
        const idx = postContent.content.findIndex((n: any) => n === node);
        const id = `heading-${idx}`;
        return (
            <h3
                className={s.title}
                id={id}
                ref={el => headingRefs.current[id] = el}
            >
              {children}
            </h3>
        );
      },
      'paragraph': (node, children) => <p className={s.text}>{children}</p>,
    },
  };

  function formatDate(dateStr?: string) {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr;
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  }



  const [allPosts, setAllPosts] = useState([]);
  useEffect(() => {
    fetchBlog().then(setAllPosts);
  }, []);

  const filteredPosts = allPosts.filter(p => String(p.id) !== String(id));
  const similarArticles = getSimilarArticles(filteredPosts, id);

  const heroButton1 = Array.isArray(posts) && posts[0]?.heroButton1 ? posts[0].heroButton1 : post.heroButton1;
  const heroButton2 = Array.isArray(posts) && posts[0]?.heroButton2 ? posts[0].heroButton2 : post.heroButton2;
  const sidebarContactButton = Array.isArray(posts) && posts[0]?.sidebarContactButton ? posts[0].sidebarContactButton : post.sidebarContactButton;
  const stepTitle = Array.isArray(posts) && posts[0]?.stepTitle ? posts[0].stepTitle : post.stepTitle;
  const steps = Array.isArray(posts) && posts[0]?.steps ? posts[0].steps : post.steps || [];
  const carousel = Array.isArray(posts) && posts[0]?.heroCarousel ? posts[0].heroCarousel : post.heroCarousel || [];

  console.log('PostPage steps:', steps);
  return (
    <>
      <SEO title={post.title} description={post.introduction} pathname={`/posts/${id}`} />
      <Layout posts={true}>
        <Hero
            title={Array.isArray(posts) && posts[0]?.title ? posts[0].title : post.title}
            desc={Array.isArray(posts) && posts[0]?.heroDescription ? posts[0].heroDescription : post.heroDescription}
            button1={heroButton1}
            button2={heroButton2}
            carousel={carousel}
        />
        {stepTitle && steps.length > 0 && (
            <Simplify title={stepTitle} steps={steps} />
        )}
        <section className={s.post}>
          <div className={s.layout}>
            <div className={`${s.leftSide} ${s.sticky}`}>
              <p>Share:</p>
              <ul>
                {ICONS.map((Icon, i) => (
                    <li key={i}><Icon /></li>
                ))}
              </ul>
            </div>

            <div className={s.content}>
              {postContent && documentToReactComponents(postContent, richTextOptions)}

              <div className={s.comments}>
                <div>
                  <h2>Comments</h2>
                  <p>{(Array.isArray(posts) && posts[0]?.comments?.length) || 0} comments</p>
                </div>
                <ul>
                  {Array.isArray(posts) && posts[0]?.comments?.length > 0 ? (
                    posts[0].comments.map((comment: any, index: number) => (
                      <li key={index}>
                        <div>
                          <div className={s.pfp} style={{ backgroundColor: colors[index % colors.length] }}>
                          {comment.authorAvatar && comment.authorAvatar.url ? (
                              <img
                                  src={comment.authorAvatar.url}
                                  alt={comment.authorName || comment.author || 'avatar'}
                                  style={{
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '50%',
                                    objectFit: 'cover'
                                  }}
                              />
                          ) : (
                              (comment.authorName || comment.author || '').slice(0, 1)
                          )}
                        </div>
                          <div>
                            <p>{comment.authorName || comment.author}</p>
                            <p>{formatDate(comment.createdAt || comment.date)}</p>
                          </div>
                        </div>
                        <p>{comment.commentText || comment.text}</p>
                      </li>
                    ))
                  ) : (
                    <li>No comments yet.</li>
                  )}
                </ul>
              </div>

              <div className={s.articles}>
                <h2>Similar articles</h2>
                <ul>
                  {similarArticles.length === 0 && <li>No similar articles found.</li>}
                  {similarArticles.map(article => (
                      <li key={article.id} className={s.similarArticleItem}>
                        <Image
                            aria-hidden
                            alt={article.author?.authorName || "Author"}
                            src={
                              article.mainImage?.url
                                  ? article.mainImage.url.startsWith('//')
                                      ? `https:${article.mainImage.url}`
                                      : article.mainImage.url
                                  : Robot.src
                            }
                            className={s.image}
                            width={300}
                            height={200}
                        />
                        <div>
                          <div>
                            <h3>{article.author?.authorName || "Unknown Author"}</h3>
                            <p>{article.author?.authorRole || ""}</p>
                          </div>
                          {article.testimonialText && (
                              <p>
                                {typeof article.testimonialText === "string"
                                    ? article.testimonialText
                                    : documentToReactComponents(article.testimonialText)}
                              </p>
                          )}
                          <Link href={`/posts/${article.id}`}>
                            <button>Read more</button>
                          </Link>
                        </div>
                      </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={`${s.rightSide} ${s.sticky}`}>
              <div>
                <div className={s.authorImg}>
                  <img
                      src={(Array.isArray(posts) && posts[0]?.author?.authorAvatar.url)}
                      alt={(Array.isArray(posts) && posts[0]?.author?.authorName) || (Array.isArray(posts) && posts[0]?.author) || 'avatar'}
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        objectFit: 'cover'
                      }}
                  />

                </div>
                <div>
                  <p>{(Array.isArray(posts) && posts[0]?.author?.authorName)}</p>
                  <p>{(Array.isArray(posts) && posts[0]?.author?.authorRole)}</p>
                </div>
              </div>

              <div>
                <div>
                  <p>Table of contents</p>
                  <div className={s.line}></div>
                </div>
                <ul>
                  {headings.map((heading) => (
                      <li key={heading.id}>
                        <a
                            href={`#${heading.id}`}
                            className={
                              heading.id === activeHeading
                                  ? s.activeLink
                                  : s.inactiveLink
                            }
                        >
                          {heading.text}
                        </a>
                      </li>
                  ))}
                </ul>
              </div>

              {(Array.isArray(posts) && posts[0]?.sidebarContactTitle) || post.sidebarContactTitle ? (
                  <div className={s.sidebarContact}>
                    <p>
                      {Array.isArray(posts) && posts[0]?.sidebarContactTitle
                          ? posts[0].sidebarContactTitle
                          : post.sidebarContactTitle}
                    </p>

                    {(Array.isArray(posts) && posts[0]?.sidebarContactButton) || post.sidebarContactButton ? (
                        (() => {
                          const btn =
                              Array.isArray(posts) && posts[0]?.sidebarContactButton
                                  ? posts[0].sidebarContactButton
                                  : post.sidebarContactButton;

                          return btn.url && btn.title ? (
                              <Link href={btn.url}>
                                <button className={s.buttonWhite}>{btn.title}</button>
                              </Link>
                          ) : btn.title ? (
                              <button className={s.buttonWhite}>{btn.title}</button>
                          ) : null;
                        })()
                    ) : null}
                  </div>
              ) : null}


            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string };

  return {
    props: {
      post: {
        id,
        title: "Test Post",
        introduction: "Test introduction for post with id " + id,
        sections: [
          {
            heading: "Section 1",
            content: "Section 1 content.\n\nMore text here.",
          },
          {
            heading: "Section 2",
            content: "Section 2 content.",
          },
          {
            heading: "Section 3",
            content: "Section 3 content.",
          },
        ],
        comments: [
          {
            author: "John Doe",
            date: "2025-07-29",
            text: "Great post!",
          },
        ],
        author: "John Doe",
        authorPosition: "Writer",
      },
    },
  };
};
