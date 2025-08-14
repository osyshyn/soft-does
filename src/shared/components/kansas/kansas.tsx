import Image from "next/image";
import kansasFlag from "@assets/images/main/kansas-flag.png";
import s from "./kansas.module.scss";

export const Kansas = () => {
  return (
    <div className={s.tagContainer}>
      <p className={s.tagText}>Proudly based in kansas</p>
      <div className={s.imageContainer}>
        <Image
          priority
          aria-hidden
          alt="Kansas flag"
          quality={100}
          sizes="(max-width: 768px) 32px, 46px"
          src={kansasFlag}
          fill
        />
      </div>
    </div>
  );
};
