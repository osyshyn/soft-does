import { Arrow } from "@shared/assets/icons/services/arrow";
import { Brain } from "@shared/assets/icons/brain";
import { Proc } from "@shared/assets/icons/proc";
import { Hand } from "@shared/assets/icons/hand";
import { Brain2 } from "@shared/assets/icons/brain2";
import { Brainproc } from "@shared/assets/icons/brainproc";

import s from "./services.module.scss";

const CONTENT = [
  {
    image: { name: Brain, type: "fill" },
    title: "Artificial Intelligence Development",
    text: "Integrate AI solutions to enhance business processes.",
  },
  {
    image: { name: Proc, type: "stroke" },
    title: "Machine Learning Model Development",
    text: "Create predictive models that drive informed decision-making.",
  },
  {
    image: { name: Hand, type: "stroke" },
    title: "AI-Driven Process Automation",
    text: "Streamline operations with intelligent automation solutions.",
  },
  {
    image: { name: Brain2, type: "fill" },
    title: "AI Operationalization",
    text: "Transform AI models into scalable, production-ready systems.",
  },
  {
    image: { name: Brainproc, type: "stroke" },
    title: "Custom AI Solutions",
    text: "Tailored AI applications designed to meet specific business needs.",
  },
];

export const Services = () => {
  return (
    <section className={s.root}>
      <h2 className={s.title}>Our Services</h2>

      <ul className={s.container}>
        {CONTENT.map((item, index) => {
          const iconClass = item.image.type === "stroke" ? s.iconStroke : s.iconFill;

          return (
            <li key={index}>
              <div>
                <p className={s.softdoes}>SOFT DOES</p>
                <Arrow className={s.arrow} />
              </div>
              <item.image.name className={iconClass} />
              <h3 className={s.tag}>{item.title}</h3>
              <p className={s.text}>{item.text}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
