import s from "./expert-team.module.scss";

const INFO = [
  {
    count: "500+",
    description: "Total experts",
  },
  {
    count: "500+",
    description: "Total experts",
  },
  {
    count: "500+",
    description: "Total experts",
  },
  {
    count: "500+",
    description: "Total experts",
  },
];

export const ExpertTeam = () => {
  return (
    <section className={s.root}>
      <h2>Expert team at your service</h2>
      <div className={s.block}>
        {INFO.map((item, index) => (
          <div key={index}>
            <p className={s.count}>{item.count}</p>
            <p className={s.description}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
