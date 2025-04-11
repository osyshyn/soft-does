import { ArrowUpAndRight } from "@shared/assets/icons/arrow-up-and-right";

import s from "./results.module.scss";

export const Results = () => {
  return (
    <section className={s.root}>
      <ul>
        <li>
          <div className={s.textDiv}>
            <p className={s.text}>Years Experience</p>
          </div>
          <div className={s.numberDiv}>
            <p className={s.number}>12+</p>
            <ArrowUpAndRight className={s.arrowIcon} />
          </div>
        </li>
        <li>
          <div className={s.textDiv}>
            <p className={s.text}>Completed Projects</p>
          </div>
          <div className={s.numberDiv}>
            <p className={s.number}>25K+</p>
            <ArrowUpAndRight className={s.arrowIcon} />
          </div>
        </li>
        <li>
          <div className={s.textDiv}>
            <p className={s.text}>Award Winning</p>
          </div>
          <div className={s.numberDiv}>
            <p className={s.number}>100+</p>
            <ArrowUpAndRight className={s.arrowIcon} />
          </div>
        </li>
        <li>
          <div className={s.textDiv}>
            <p className={s.text}>Satisfied Clients</p>
          </div>
          <div className={s.numberDiv}>
            <p className={s.number}>230K+</p>
            <ArrowUpAndRight className={s.arrowIcon} />
          </div>
        </li>
      </ul>
    </section>
  );
};
