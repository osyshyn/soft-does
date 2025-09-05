import clsx from "clsx";
import s from "./results.module.scss";
import { H2, Text2Xl } from "@shared/components/typography";

export const Results = () => {
  return (
    <section className={clsx(s.wrapper, "wrapper")}>
      <div className={clsx(s.content, "container")}>
        <ul>
          <li>
            <H2 as="p" className={s.number}>
              9
            </H2>
            <Text2Xl className={s.text}>years on the market</Text2Xl>
          </li>
          <li>
            <H2 as="p" className={s.number}>
              73%
            </H2>
            <Text2Xl className={s.text}>
              new clients come from referrals.
            </Text2Xl>
          </li>
          <li>
            <H2 as="p" className={s.number}>
              350+
            </H2>
            <Text2Xl className={s.text}>finished projects</Text2Xl>
          </li>
          <li>
            <H2 as="p" className={s.number}>
              40+
            </H2>
            <Text2Xl className={s.text}>software engineers</Text2Xl>
          </li>
        </ul>
      </div>
    </section>
  );
};
