import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import { Pin } from "@shared/assets/icons/pin-icon";

import s from "./service-section.module.scss";
import clsx from "clsx";
import { ServiceSwiper } from "./service-swiper";

interface IProps {
  currentColor?: string;
  img: StaticImageData;
  title: string;
  list: string[];
  buttonText: string;
  isRight?: boolean;
  link: string;
}

export const ServiceSection = (props: IProps) => {
  return (
    <section
      style={
        {
          "--current-color-variable": props.currentColor || "white",
        } as React.CSSProperties
      }
      className={clsx(s.wrapper, "wrapper", props.isRight && s.isRight)}
    >
      <div className={clsx(s.root, "container")}>
        <div className={clsx(s.leftWrapper, props.isRight && s.isRightWrapper)}>
          <h2 className={clsx(s.title, props.isRight && s.isRightTitle)}>
            {props.title}
          </h2>

          <ul className={s.pinList}>
            {props.list.map((item) => (
              <li className={s.pinListItem} key={item}>
                <Pin className={s.pinIcon} />
                {item}
              </li>
            ))}
          </ul>

          <ServiceSwiper />

          <Link href={props.link} className={s.button}>
            {props.buttonText}
          </Link>
        </div>
        <div className={s.rightWrapper}>
          <Image
            aria-hidden
            src={props.img.src}
            className={s.img}
            alt=""
            width={props.img.width}
            height={props.img.height}
          />
        </div>
      </div>
    </section>
  );
};
