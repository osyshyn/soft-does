import Image from "next/image";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { IPost } from "@models/Post";
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';

import { SEO } from "@shared/ui/seo";
import Layout from "@shared/components/layout/layout";
import { Hero } from "@sections/postPage/hero/hero";
import { Simplify } from "@sections/postPage/simplify/simplify";

import { Facebook } from "@shared/assets/icons/blog/facebook";
import { Tg } from "@shared/assets/icons/blog/tg";
import { Whatsapp } from "@shared/assets/icons/blog/whatsapp";
import { X } from "@shared/assets/icons/blog/x";
import { Plus } from "@shared/assets/icons/blog/plus";
import { Profile } from "@shared/assets/icons/blog/profile";
import Robot from "@shared/assets/images/blog/robot.png";
import Idea from "@shared/assets/images/blog/do_you_have_idea.png";

import s from "./post.module.scss";
import {useEffect, useState} from "react";
import {fetchBlog, fetchFullBlogPostList} from "../api/contentful/api";

interface PostPageProps {
  post: IPost;
}

const colors = ["#173B91", "#BF81FF", "#D75186"];

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

  // Витягуємо контент поста з Contentful
  const postContent = Array.isArray(posts) && posts[0]?.postContent ? posts[0].postContent : post.postContent;

  // Витягуємо всі h1/h2/h3 для навігації та зберігаємо id для скролу
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

  // Кастомний рендер для rich text з id для заголовків
  const richTextOptions: Options = {
    renderNode: {
      'heading-2': (node, children) => {
        // Знаходимо індекс цього заголовка для id
        const idx = postContent.content.findIndex((n: any) => n === node);
        return <h2 className={s.title} id={`heading-${idx}`}>{children}</h2>;
      },
      'heading-3': (node, children) => {
        const idx = postContent.content.findIndex((n: any) => n === node);
        return <h3 className={s.title} id={`heading-${idx}`}>{children}</h3>;
      },
      'paragraph': (node, children) => <p className={s.text}>{children}</p>,
    },
  };

  return (
    <>
      <SEO title={post.title} description={post.introduction} pathname={`/posts/${id}`} />
      <Layout posts={true}>
        <Hero title={Array.isArray(posts) && posts[0]?.title ? posts[0].title : post.title} desc={Array.isArray(posts) && posts[0]?.heroDescription ? posts[0].heroDescription : post.heroDescription} />
        <Simplify />
        <section className={s.post}>
          <div>
            <div className={s.leftSide}>
              <p>Share:</p>
              <ul>
                {ICONS.map((Icon, i) => (
                  <li key={i}>
                    <Icon />
                  </li>
                ))}
              </ul>
            </div>

            <div className={s.content}>
              {/* Не виводимо мокові title та introduction */}
              {/* Відображаємо контент поста з Contentful */}
              {postContent && documentToReactComponents(postContent, richTextOptions)}

                {/*<>*/}
                {/*  <section key={index} className={s.section}>*/}
                {/*    <h2 className={s.title}>{section.heading}</h2>*/}
                {/*    {section.content.split("\n\n").map((text, i) => (*/}
                {/*      <p key={i} className={s.text}>*/}
                {/*        {text}*/}
                {/*      </p>*/}
                {/*    ))}*/}
                {/*  </section>*/}

                {/*  /!*{index === 2 && (*!/*/}
                {/*  /!*  <div className={s.ideaWrapper}>*!/*/}
                {/*  /!*    <Image aria-hidden alt="" className={s.image} src={Idea.src} width={Idea.width} height={Idea.height} />*!/*/}
                {/*  /!*    <div>*!/*/}
                {/*  /!*      <h3>Do you have an interesting idea?</h3>*!/*/}
                {/*  /!*      <p>Book a call with the representative to get answers to all the questions you may have. </p>*!/*/}
                {/*  /!*      <button className={s.buttonGreen}>Let’s discuss</button>*!/*/}
                {/*  /!*    </div>*!/*/}
                {/*  /!*  </div>*!/*/}
                {/*  /!*)}*!/*/}
                {/*</>*/}

              <div className={s.comments}>
                <div>
                  <h2>Comments</h2>
                  <p>{post.comments.length} comments</p>
                </div>
                <ul>
                  {post.comments.map((comment, index) => (
                    <li key={index}>
                      <div>
                        <div className={s.pfp} style={{ backgroundColor: colors[index % colors.length] }}>
                          {comment.author.slice(0, 1)}
                        </div>
                        <div>
                          <p>{comment.author}</p>
                          <p>{comment.date}</p>
                        </div>
                      </div>
                      <p>{comment.text}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={s.articles}>
                <h2>similar articles</h2>

                <ul>
                  <li>
                    <Image aria-hidden alt="" src={Robot.src} className={s.image} width={Robot.width} height={Robot.height} />
                    <div>
                      <div>
                        <h3>Simon Jones</h3>
                        <p>CIO in Healthcare</p>
                      </div>
                      <p>
                        “Yalantis has been a great fit for us because of their experience, responsiveness, value, and time to market. From the very start, they’ve been able to
                        staff an effective development team in no time and perform as expected.”
                      </p>
                      <button>Read more</button>
                    </div>
                  </li>
                  <li>
                    <Image aria-hidden alt="" src={Robot.src} className={s.image} width={Robot.width} height={Robot.height} />
                    <div>
                      <div>
                        <h3>Simon Jones</h3>
                        <p>CIO in Healthcare</p>
                      </div>
                      <p>
                        “Yalantis has been a great fit for us because of their experience, responsiveness, value, and time to market. From the very start, they’ve been able to
                        staff an effective development team in no time and perform as expected.”
                      </p>
                      <button>Read more</button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className={s.rightSide}>
              <div>
                <div className={s.authorImg}>
                  <Profile />
                </div>
                <div>
                  <p>{post.author}</p>
                  <p>{post.authorPosition}</p>
                </div>
              </div>

              <div>
                <div>
                  <p>Table of contents</p>
                  <div className={s.line}></div>
                </div>
                <ul>
                  {headings.map((heading, i) => (
                    <li key={heading.id}>
                      <a href={`#${heading.id}`} style={{ color: '#000' }}>{heading.text}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p>Do you have an interesting idea?</p>
                <button>Let’s discuss</button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string };

  // Повертаємо мокові дані для тесту, щоб сторінка завжди відкривалась
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
