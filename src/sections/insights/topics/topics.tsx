import Link from "next/link";
import Image from "next/image";
import People from "@shared/assets/images/blog/people.png";
import s from "./topics.module.scss";
import { IBlogMain } from "../../../types/contentful/BlogPost";

interface TopicsProps {
    posts: IBlogMain[];
}

export const Topics = ({ posts }: TopicsProps) => {
    return (
        <section className={s.root}>
            <ul className={s.container}>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Image
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
                                <p className={s.title}>
                                    {post.author?.authorName || "Unknown Author"}
                                </p>
                                <p className={s.subtitle}>
                                    {post.author?.authorRole || ""}
                                </p>
                            </div>
                            <p className={s.description}>
                                {typeof post.testimonialText === "string"
                                    ? post.testimonialText
                                    : ""}
                            </p>
                            <Link className={s.btn} href={`/blog/${post.slug}`}>
                                {post.readMoreLabel || "Read more"}
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};
