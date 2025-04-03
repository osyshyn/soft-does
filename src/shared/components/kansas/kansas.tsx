import Image from "next/image";
import kansasFlag from "@assets/images/main/kansas-flag-min.jpg";
import s from "./kansas.module.scss";

export const Kansas = () => {
  return (
    <div className={s.tagContainer}>
      <p className={s.tagText}>Proudly based in kansas</p>
      <Image aria-hidden alt="" src={kansasFlag.src} className={s.flagImage} width={kansasFlag.width} height={kansasFlag.height} />
    </div>
  );
};
