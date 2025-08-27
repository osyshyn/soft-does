import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import People from "@shared/assets/images/blog/people-work.png";
import Image from "next/image";
import PreservingLink from "@shared/components/preserving-link/preserving-link";

import s from "./blog-card.module.scss";
import { IBlogMain } from "types/contentful/BlogPost";

interface IBlogCardProps {
  post: IBlogMain;
}

const BlogCard = ({ post }: IBlogCardProps) => {
  return (
    <article className={s.card}>
      <div className={s.card__image}>
        <Image
          aria-hidden
          alt={post.author?.authorName || "Author"}
          src={
            post.mainImage?.url
              ? post.mainImage.url.startsWith("//")
                ? `https:${post.mainImage.url}`
                : post.mainImage.url
              : People
          }
          fill
          sizes="(max-width: 600px) 90vw, 364px"
        />
      </div>

      <div className={s.card__info}>
        <div>
          <p className={s.card__title}>
            {post.author?.authorName || "Unknown Author"}
          </p>
          <p className={s.card__subtitle}>{post.author?.authorRole || ""}</p>
        </div>

        <div className={s.card__descriptionContainer}>
          <div className={s.card__description}>
            {post.testimonialText &&
              (typeof post.testimonialText === "string"
                ? post.testimonialText
                : documentToReactComponents(post.testimonialText))}
          </div>
        </div>

        <PreservingLink className={s.card__btn} href={`/posts/${post.id}`}>
          Read more
        </PreservingLink>
      </div>
    </article>
  );
};

export default BlogCard;
