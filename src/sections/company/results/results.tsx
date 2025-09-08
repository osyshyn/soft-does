import { ArrowUpAndRight } from "@shared/assets/icons/arrow-up-and-right";

import s from "./results.module.scss";
import clsx from "clsx";
import { H5, Text2Xl } from "@shared/components/typography";

const RESULTS = [
  {
    id: 1,
    text: "Years Experience",
    number: "12+",
  },
  {
    id: 2,
    text: "Completed Projects",
    number: "25K+",
  },
  {
    id: 3,
    text: "Award Winning",
    number: "100+",
  },
  {
    id: 4,
    text: "Satisfied Clients",
    number: "230K+",
  },
];

export const Results = () => {
  return (
    <section className={clsx(s.root, "wrapper")}>
      <div className={clsx("container")}>
        <ul className={s.list}>
          {RESULTS.map((result) => (
            <li key={result.id}>
              <div className={s.textDiv}>
                <Text2Xl className={s.text}>{result.text}</Text2Xl>
              </div>
              <div className={s.numberDiv}>
                <H5 className={s.number}>{result.number}</H5>
                <ArrowUpAndRight className={s.arrowIcon} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
