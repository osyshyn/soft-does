import Image from "next/image";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { IPost } from "@models/Post";

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

interface PostPageProps {
  post: IPost;
}

const colors = ["#173B91", "#BF81FF", "#D75186"];

export default function PostPage({ post }: PostPageProps) {
  const router = useRouter();
  const { id } = router.query;

  const ICONS = [Facebook, Tg, Whatsapp, X, Plus];

  return (
    <>
      <SEO title={post.title} description={post.introduction} pathname={`/posts/${id}`} />
      <Layout posts={true}>
        <Hero />
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
              <h1 className={s.title}>{post.title}</h1>
              {post.introduction.split("\n\n").map((text, i) => (
                <p key={i} className={s.text}>
                  {text}
                </p>
              ))}

              {post.sections.map((section, index) => (
                <>
                  <section key={index} className={s.section}>
                    <h2 className={s.title}>{section.heading}</h2>
                    {section.content.split("\n\n").map((text, i) => (
                      <p key={i} className={s.text}>
                        {text}
                      </p>
                    ))}
                  </section>

                  {index === 2 && (
                    <div className={s.ideaWrapper}>
                      <Image aria-hidden alt="" className={s.image} src={Idea.src} width={Idea.width} height={Idea.height} />
                      <div>
                        <h3>Do you have an interesting idea?</h3>
                        <p>Book a call with the representative to get answers to all the questions you may have. </p>
                        <button className={s.buttonGreen}>Let’s discuss</button>
                      </div>
                    </div>
                  )}
                </>
              ))}

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
                  <li>5 key factors that affect the cost of building a website</li>
                  <li>How much do website hosting platforms (CMS) cost?</li>
                  <li>3 ways to build your website and how it will affect costs</li>
                  <li>Next steps</li>
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const protocol = ctx.req.headers["x-forwarded-proto"] || "http";
  const host = ctx.req.headers.host;
  const { id } = ctx.params!;
  const res = await fetch(`${protocol}://${host}/api/posts/${id}`);

  if (!res.ok) {
    return { notFound: true };
  }

  const post: IPost = await res.json();

  return {
    props: {
      post,
      pathname: `/posts/${id}`,
    },
  };
};
