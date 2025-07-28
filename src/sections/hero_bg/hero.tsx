import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";

import { Kansas } from "@shared/components/kansas/kansas";

import s from "./hero.module.scss";

interface HeroProps {
  data: {
    title: string;
    tagText: string;
    btnText: string;
  };
  titleWidth?: React.CSSProperties;
  heroImg?: StaticImageData;
  bgImg?: string | string[];
  imgStyles?: React.CSSProperties;
  isStaticImage?: boolean;
  bgStyles?: React.CSSProperties;
}

const getBgImg = (bgImg?: string | string[]) => {
  if (!bgImg) return undefined;

  return Array.isArray(bgImg) ? bgImg.map((img) => `url("/images/${img}")`).join(", ") : `url("/images/${bgImg}")`;
};

export const Hero = ({ data, titleWidth, heroImg, bgImg, imgStyles, isStaticImage = true, bgStyles }: HeroProps) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isMouseDevice, setIsMouseDevice] = useState(true);

  const sectionStyles: React.CSSProperties = {
    backgroundImage: getBgImg(bgImg),
    ...bgStyles,
  };

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
    if (!isMouseDevice || isStaticImage) return;

    const handleMouseMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const offsetX = (event.clientX / innerWidth - 0.5) * 50;
      const offsetY = (event.clientY / innerHeight - 0.5) * 50;
      setOffset({ x: offsetX, y: offsetY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMouseDevice, isStaticImage]);

  return (
    <section className={s.root} style={sectionStyles}>
      <div className={s.container}>
        <Kansas />
        <h1 className={s.title} style={titleWidth}>
          {data.title}
        </h1>
        <p className={s.tagText}>{data.tagText}</p>
        <button className={s.button}>{data.btnText}</button>
      </div>
      {heroImg ? (
        <Image
          aria-hidden
          alt=""
          src={heroImg.src}
          className={s.heroImage}
          width={heroImg.width}
          height={heroImg.height}
          style={{
            transform: isStaticImage ? undefined : `translate(${offset.x}px, ${offset.y}px)`,
            transition: isStaticImage ? undefined : "transform 0.1s ease-out",
            ...imgStyles,
          }}
        />
      ) : undefined}
    </section>
  );
};
