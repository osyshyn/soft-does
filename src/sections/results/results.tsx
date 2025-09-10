import clsx from "clsx";
import s from "./results.module.scss";
import { H3, Text2Xl } from "@shared/components/typography";

const RESULTS = [
  {
    number: "9",
    text: "years on the market",
  },
  {
    number: "73%",
    text: "new clients come from referrals.",
  },
  {
    number: "350+",
    text: "finished projects",
  },
  {
    number: "40+",
    text: "software engineers",
  },
];

export const Results = () => {
  return (
    <section className={clsx(s.wrapper, "wrapper")}>
      <div className={clsx(s.content, "container")}>
        <ul>
          {RESULTS.map((result) => (
            <li className={s.item} key={result.number}>
              <H3 as="p" className={s.number}>
                {result.number}
              </H3>
              <Text2Xl className={s.text}>{result.text}</Text2Xl>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
