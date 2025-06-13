import Link from "next/link";
import Image from "next/image";
import { IPost } from "@models/Post";

// import Wallet from "@shared/assets/images/blog/wallet.png";
import People from "@shared/assets/images/blog/people.png";
// import Peripheral from "@shared/assets/images/blog/peripheral.png";

import s from "./topics.module.scss";

// const TOPICS = [
//   {
//     id: 1,
//     title: "Simon Jones",
//     subtitle: "CIO in Healthcare",
//     img: Wallet,
//   },
//   {
//     id: 2,
//     title: "Simon Jones",
//     subtitle: "CIO in Healthcare",
//     img: People,
//   },
//   {
//     id: 3,
//     title: "Simon Jones",
//     subtitle: "CIO in Healthcare",
//     img: Peripheral,
//   },
// ];

interface TopicsProps {
  posts: IPost[];
}

export const Topics = ({ posts }: TopicsProps) => {
  return (
    <section className={s.root}>
      <ul className={s.container}>
        {/* {TOPICS.map((item, index) => (
          <li key={index}>
            <Image aria-hidden alt="" src={item.img.src} className={s.image} width={item.img.width} height={item.img.height} />
            <div className={s.info}>
              <div>
                <p className={s.title}>{item.title}</p>
                <p className={s.subtitle}>{item.subtitle}</p>
              </div>
              <p className={s.description}>
                “Yalantis has been a great fit for us because of their experience, responsiveness, value, and time to market. From the very start, they’ve been able to staff an
                effective development team in no time and perform as expected.”
              </p>
              <button className={s.btn}>Read more</button>
            </div>
          </li>
        ))} */}
        {posts.map((post) => {
          return (
            <li key={post._id}>
              <Image alt={post.title} src={post.imageUrl || People} className={s.image} width={300} height={200} />
              <div className={s.info}>
                <div>
                  <p className={s.title}>{post.author}</p>
                  <p className={s.subtitle}>{post.authorPosition}</p>
                </div>
                <p className={s.description}>{post.introduction.slice(0, 100)}</p>
                <Link className={s.btn} href={`/posts/${post._id}`}>
                  Read more
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
