import Image, { StaticImageData } from "next/image";

import { Pin } from "@shared/assets/icons/pin-icon";

import clsx from "clsx";
import s from "./service-section.module.scss";
import ServiceSwiper from "./service-swiper";
import PreservingLink from "@shared/components/preserving-link/preserving-link";
import { H2, TextLg } from "@shared/components/typography";
import Button from "@shared/components/buttons";

interface IProps {
  currentColor?: string;
  img: StaticImageData;
  title: string;
  list: string[];
  buttonText: string;
  isRight?: boolean;
  link: string;
  isImagePriority?: boolean;
  className?: string;
}

export const ServiceSection = (props: IProps) => {
  return (
    <section
      style={
        {
          "--current-color-variable": props.currentColor || "white",
        } as React.CSSProperties
      }
      className={clsx(
        s.wrapper,
        "wrapper",
        props.isRight && s.isRight,
        props.className
      )}
    >
      <div className={clsx(s.root, "container")}>
        <div
          className={clsx(
            s.mainWrapper,
            s.leftWrapper,
            props.isRight && s.isRightWrapper
          )}
        >
          <H2 className={clsx(s.title, props.isRight && s.isRightTitle)}>
            {props.title}
          </H2>

          <ul className={s.pinList}>
            {props.list.map((item) => (
              <li className={s.pinListItem} key={item}>
                <Pin className={s.pinIcon} />
                <TextLg>{item}</TextLg>
              </li>
            ))}
          </ul>

          <div className={s.swiperWrapper}>
            <ServiceSwiper />
          </div>

          <PreservingLink href={props.link} className={s.button}>
            <Button variant="secondary" size="lg">
              {props.buttonText}
            </Button>
          </PreservingLink>
        </div>

        <div className={s.rightWrapper}>
          <Image
            aria-hidden
            src={props.img.src}
            className={s.img}
            alt=""
            sizes="300px, (max-width: 1280px) 350px, 450px"
            width={props.img.width}
            height={props.img.height}
            priority={props.isImagePriority}
          />
        </div>
      </div>
    </section>
  );
};
