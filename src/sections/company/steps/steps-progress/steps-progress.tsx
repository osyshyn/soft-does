import s from "./steps-progress.module.scss";

export const StepsProgress = () => {
  return (
    <div className={s.root}>
      <ul>
        <li>2018</li>
        <li>2019</li>
        <li>2020</li>
        <li>2022</li>
        <li>2023</li>
      </ul>
    </div>
  );
};
