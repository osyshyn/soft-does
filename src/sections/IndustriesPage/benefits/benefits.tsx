// import Image from "next/image";
import s from "./benefits.module.scss";

const INFO = [
  {
    title: "Optimize your product delivery terms",
    description:
      "“Yalantis has been a great fit for us because of their experience, responsiveness, value, and time to market. From the very start, they’ve been able to staff an effective development team in no time and perform as expected.”",
  },
  {
    title: "Optimize your product delivery terms",
    description:
      "“Yalantis has been a great fit for us because of their experience, responsiveness, value, and time to market. From the very start, they’ve been able to staff an effective development team in no time and perform as expected.”",
  },
  {
    title: "Optimize your product delivery terms",
    description:
      "“Yalantis has been a great fit for us because of their experience, responsiveness, value, and time to market. From the very start, they’ve been able to staff an effective development team in no time and perform as expected.”",
  },
];

export const Benefits = () => {
  return (
    <section className={s.root}>
      <h2>Benefits of working with Soft Does</h2>
      <ul>
        {INFO.map((item, index) => (
          <li key={index}>
            {/* <Image aria-hidden alt="" src={} width={} height={} /> */}
            <div></div>
            <p className={s.title}>{item.title}</p>
            <p className={s.description}>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
