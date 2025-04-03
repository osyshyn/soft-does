import { Pin } from "@shared/assets/icons/pin-icon";

import Time from "@shared/assets/images/services/time.png";
import Image from "next/image";

import s from "./engagement-options.module.scss";

const OPTIONS = [
  {
    title: "> Time and Materials <",
  },
  {
    title: "> Fixed price Source <",
  },
  {
    title: "> Managed team <",
  },
  {
    title: "> Managed product <",
  },
  {
    title: "> Time and materials Source <",
  },
  {
    title: "> Time and materials Source <",
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
  {
    a: "Architecture assessment",
    b: "Technical feasibility audit",
    c: "Development process audit",
  },
  {
    a: "Architecture assessment",
    b: "Technical feasibility audit",
    c: "Development process audit",
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
              <Image src={Time} alt="" width="40" height="40" />
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
