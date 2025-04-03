import s from "./results.module.scss";

export const Results = () => {
  return (
    <section className={s.root}>
      <ul>
        <li>
          <p className={s.number}>9</p>
          <p className={s.text}>years on the market</p>
        </li>
        <li>
          <p className={s.number}>73%</p>
          <p className={s.text}>new clients come from referrals.</p>
        </li>
        <li>
          <p className={s.number}>350+</p>
          <p className={s.text}>finished projects</p>
        </li>
        <li>
          <p className={s.number}>40+</p>
          <p className={s.text}>software engineers</p>
        </li>
      </ul>
    </section>
  );
};
