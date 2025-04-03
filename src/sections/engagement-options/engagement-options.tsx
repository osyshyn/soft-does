import Image from "next/image";

import { Pin } from "@shared/assets/icons/pin-icon";
import Time from "@shared/assets/images/services/time.png";
import Price from "@shared/assets/images/services/price.png";
import Team from "@shared/assets/images/services/team.png";
import Light from "@shared/assets/images/services/light.png";

import s from "./engagement-options.module.scss";

const OPTIONS = [
  {
    title: "Time and Materials",
    image: Time,
  },
  {
    title: "Fixed price",
    image: Price,
  },
  {
    title: "Managed team",
    image: Team,
  },
  {
    title: "Managed product",
    image: Light,
  },
];

const OPTIONS_INFO = [
  {
    a: "Pay only for actual work done",
    b: "Flexible for changing needs",
    c: "Ideal for agile projects",
  },
  {
    a: "Set budget, set timeline",
    b: "Best for well-defined projects",
    c: "No surprises, total control",
  },
  {
    a: "Dedicated team for your project",
    b: "Expertise without hiring overhead",
    c: "Perfect for long-term work",
  },
  {
    a: "Full product development, start to finish",
    b: "Minimal oversight needed from you",
    c: "End-to-end delivery, ready to launch",
  },
];

export const Engagement = () => {
  return (
    <section className={s.root}>
      <h2 className={s.rootTitle}>Engagement Options</h2>

      <ul className={s.list}>
        {OPTIONS.map((item, index) => (
          <li className={s.block} key={index}>
            <div className={s.icon}>
              <Image src={item.image} alt="" width={item.image.width} height={item.image.height} />
            </div>
            <h3 className={s.title}>{item.title}</h3>
            <ul>
              <li className={s.point}>
                <Pin className={s.pin} />
                {OPTIONS_INFO[index].a}
              </li>
              <li className={s.point}>
                <Pin className={s.pin} />
                {OPTIONS_INFO[index].b}
              </li>
              <li className={s.point}>
                <Pin className={s.pin} />
                {OPTIONS_INFO[index].c}
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};
