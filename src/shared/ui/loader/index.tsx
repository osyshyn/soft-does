import s from "./loader.module.scss";

export const Loader = () => {
  return (
    <div className={s.lds_ellipsis}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
