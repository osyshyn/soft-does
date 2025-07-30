import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { BACKGROUND_PRESETS } from "@shared/constants/hero-backgrounds";

import s from "./hero.module.scss";
import clsx from "clsx";
import TextBlock from "@shared/components/hero-text/hero-text";

interface HeroProps {
  data: {
    title: string;
    titleSpan?: string;
    tagText: string | React.ReactNode;
    btnText: string;
  };
  rightNode?: React.ReactNode;
  heroImg?: StaticImageData;
  heroImgClassName?: string;
  textContainerClassName?: string;
  backgroundKey?: keyof typeof BACKGROUND_PRESETS;
  isDynamicImage?: boolean;
}

export const Hero = ({
  data,
  rightNode,
  heroImg,
  heroImgClassName,
  textContainerClassName,
  isDynamicImage = false,
  backgroundKey = "green",
}: HeroProps) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isMouseDevice, setIsMouseDevice] = useState(true);

  useEffect(() => {
    const checkDevice = () => {
      setIsMouseDevice(window.matchMedia("(pointer: fine)").matches);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  useEffect(() => {
    if (!isMouseDevice) return;

    const handleMouseMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const offsetX = (event.clientX / innerWidth - 0.5) * 50;
      const offsetY = (event.clientY / innerHeight - 0.5) * 50;
      setOffset({ x: offsetX, y: offsetY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMouseDevice]);

  return (
    <section
      className={clsx(s.root, "wrapper")}
      style={{
        background: BACKGROUND_PRESETS[backgroundKey],
        backgroundColor: "black",
      }}
    >
      <div className={clsx(s.container, "container")}>
        <div className={clsx(s.text, textContainerClassName)}>
          <TextBlock
            className={s.text__content}
            title={data.title}
            titleSpan={data.titleSpan}
            text={data.tagText}
            buttonText={data.btnText}
          />
        </div>

        {heroImg && (
          <div className={clsx(s.heroImage, heroImgClassName)}>
            <Image
              aria-hidden
              alt=""
              src={heroImg}
              style={{
                transform: isDynamicImage
                  ? `translate(${offset.x}px, ${offset.y}px)`
                  : `translate(0, 0)`,
                transition: "transform 0.1s ease-out",
              }}
              // width={heroImg}
              // height={heroImg}
            />
          </div>
        )}

        {rightNode && rightNode}
      </div>
    </section>
  );
};
