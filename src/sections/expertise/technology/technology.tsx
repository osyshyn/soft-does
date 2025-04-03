import image from "@assets/images/expertise/technology1.png";

import s from "./technology.module.scss";
import Image from "next/image";

const INFO = [
  {
    title: "Simon Jones",
    subtitle: "CIO in Healthcare",
    description:
      "“Yalantis has been a great fit for us because of their experience, responsiveness, value, and time to market. From the very start, they’ve been able to staff an effective development team in no time and perform as expected.”",
    img: image,
  },
  {
    title: "Simon Jones",
    subtitle: "CIO in Healthcare",
    description:
      "“Yalantis has been a great fit for us because of their experience, responsiveness, value, and time to market. From the very start, they’ve been able to staff an effective development team in no time and perform as expected.”",
    img: image,
  },
  {
    title: "Simon Jones",
    subtitle: "CIO in Healthcare",
    description:
      "“Yalantis has been a great fit for us because of their experience, responsiveness, value, and time to market. From the very start, they’ve been able to staff an effective development team in no time and perform as expected.”",
    img: image,
  },
];

export const Technology = () => {
  return (
    <section className={s.root}>
      <h2>Technology and business insights</h2>
      <div className={s.container}>
        {INFO.map((item, index) => (
          <div className={s.elementBlock} key={index}>
            <Image className={s.img} aria-hidden alt="" src={item.img.src} width={item.img.width} height={item.img.height} />
            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
            <p>{item.description}</p>
            <button>Read more</button>
          </div>
        ))}
      </div>
    </section>
  );
};
