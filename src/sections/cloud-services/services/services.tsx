import { Arrow } from "@shared/assets/icons/services/arrow";
import { Up } from "@shared/assets/icons/services/cloud-services/up";
import { Gear } from "@shared/assets/icons/services/cloud-services/gear";
import { Sync } from "@shared/assets/icons/services/cloud-services/sync";
import { Lock } from "@shared/assets/icons/services/cloud-services/lock";

import s from "./services.module.scss";

const CONTENT = [
  {
    image: { name: Up, type: "fill" },
    title: "Cloud Computing Solutions",
    text: "Scalable and flexible cloud environments tailored to your business needs.",
  },
  {
    image: { name: Gear, type: "other" },
    title: "DevOps and Cloud Infrastructure",
    text: "Streamline your development and operations with integrated DevOps practices.",
  },
  {
    image: { name: Sync, type: "fill" },
    title: "Cloud Migration Services",
    text: "Seamlessly transition to the cloud with minimal disruption.",
  },
  {
    image: { name: Lock, type: "fill" },
    title: "Managed Cloud Services",
    text: "Comprehensive management of your cloud infrastructure to ensure optimal performance.",
  },
];

export const Services = () => {
  return (
    <section className={s.root}>
      <h2 className={s.title}>Our Services</h2>

      <ul className={s.container}>
        {CONTENT.map((item, index) => {
          const iconClass = item.image.type === "fill" ? s.iconFill : s.iconOther;

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
