import Image from "next/image";
import kansasFlag from "@assets/images/main/kansas-flag.png";
import s from "./kansas.module.scss";
import { TextMd } from "../typography";

export const Kansas = () => {
  return (
    <div className={s.tagContainer}>
      <TextMd className={s.tagText}>Proudly based in kansas</TextMd>

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
