import { Arrow } from "@shared/assets/icons/services/arrow";
import { Tags } from "@shared/assets/icons/tags";
import { Phone } from "@shared/assets/icons/phone";
import { Browser } from "@shared/assets/icons/browser";
import { Rocket } from "@shared/assets/icons/rocket";
import { Gear } from "@shared/assets/icons/gear";
import { Puzzle } from "@shared/assets/icons/puzzle";

import s from "./services.module.scss";

const CONTENT = [
  {
    image: Tags,
    title: "Custom Software Development",
    text: "Tailor-made solutions that align with your business objectives.",
  },
  {
    image: Phone,
    title: "Mobile App Development",
    text: "Innovative applications for Android and iOS to engage your customers.",
  },
  {
    image: Browser,
    title: "Web Application Development",
    text: "Robust and scalable web applications that enhance user experience.",
  },
  {
    image: Rocket,
    title: "MVP Development",
    text: "Quickly validate your ideas with Minimum Viable Products.",
  },
  {
    image: Gear,
    title: "Product Development",
    text: "Full-cycle product development from concept to launch.",
  },
  {
    image: Puzzle,
    title: "API Integration Services",
    text: "Seamlessly connect disparate systems to enhance functionality and data exchange.",
  },
];

export const Services = () => {
  return (
    <section className={s.root}>
      <h2 className={s.title}>Our Services</h2>

      <ul className={s.container}>
        {CONTENT.map((item, index) => (
          <li key={index}>
            <div>
              <p className={s.softdoes}>SOFT DOES</p>
              <Arrow className={s.arrow} />
            </div>
            <item.image className={s.icon} />
            <h3 className={s.tag}>{item.title}</h3>
            <p className={s.text}>{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
