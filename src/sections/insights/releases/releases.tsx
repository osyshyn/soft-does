import Image from "next/image";

import { Arrow } from "@shared/assets/icons/short-arrow-right";
import Devices from "@shared/assets/images/blog/devices.png";
import Robot from "@shared/assets/images/blog/robot.png";
import People from "@shared/assets/images/blog/people-work.png";
import Notebook from "@shared/assets/images/blog/notebook.png";
import Monitors from "@shared/assets/images/blog/monitors.png";
import ManNotebook from "@shared/assets/images/blog/man-notebook.png";

import s from "./releases.module.scss";

const TOPICS1 = [
  {
    id: 1,
    title: "Simon Jones",
    subtitle: "CIO in Healthcare",
    img: Devices,
  },
  {
    id: 2,
    title: "Simon Jones",
    subtitle: "CIO in Healthcare",
    img: Devices,
  },
  {
    id: 3,
    title: "Simon Jones",
    subtitle: "CIO in Healthcare",
    img: Robot,
  },
  {
    id: 4,
    title: "Simon Jones",
    subtitle: "CIO in Healthcare",
    img: Robot,
  },
];

const TOPICS2 = [
  {
    id: 1,
    title: "Simon Jones",
    subtitle: "CIO in Healthcare",
    img: People,
  },
  {
    id: 2,
    title: "Simon Jones",
    subtitle: "CIO in Healthcare",
    img: Notebook,
  },
  {
    id: 3,
    title: "Simon Jones",
    subtitle: "CIO in Healthcare",
    img: Monitors,
  },
  {
    id: 4,
    title: "Simon Jones",
    subtitle: "CIO in Healthcare",
    img: ManNotebook,
  },
];

export const Releases = () => {
  return (
    <section className={s.root}>
      <article className={s.article}>
        <div className={s.captionContainer}>
          <h2>Press releases</h2>
          <button>
            More
            <Arrow className={s.arrow} />
          </button>
        </div>
        <ul className={s.container}>
          {TOPICS1.map((item, index) => (
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
          ))}
        </ul>
      </article>

      <article className={s.article}>
        <div className={s.captionContainer}>
          <h2>Press releases</h2>
          <button>
            More
            <Arrow className={s.arrow} />
          </button>
        </div>
        <ul className={s.container}>
          {TOPICS2.map((item, index) => (
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
          ))}
        </ul>
      </article>
    </section>
  );
};
