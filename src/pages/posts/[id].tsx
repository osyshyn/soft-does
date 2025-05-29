import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { IPost } from "@models/Post";

import { SEO } from "@shared/ui/seo";
import Layout from "@shared/components/layout/layout";
import { Hero } from "@sections/postPage/hero/hero";

import { ICONS } from "./constants";
import { Profile } from "@shared/assets/icons/blog/profile";

import s from "./post.module.scss";

interface PostPageProps {
  post: IPost;
}

export default function PostPage({ post }: PostPageProps) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <SEO title={post.title} description={post.introduction} pathname={`/posts/${id}`} />
      <Layout>
        <Hero />
        <section className={s.post}>
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
              <section key={index} className={s.section}>
                <h2 className={s.title}>{section.heading}</h2>
                {section.content.split("\n\n").map((text, i) => (
                  <p key={i} className={s.text}>
                    {text}
                  </p>
                ))}
              </section>
            ))}
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
        </section>
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const res = await fetch(`${process.env.SITE_URL}/api/posts/${id}`);

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
