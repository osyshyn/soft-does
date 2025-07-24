import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { BACKGROUND_PRESETS } from "@shared/constants/hero-backgrounds";

import { Kansas } from "@shared/components/kansas/kansas";

import s from "./hero.module.scss";
import clsx from "clsx";

interface HeroProps {
  data: {
    title: string;
    titleSpan?: string;
    tagText: string;
    btnText: string;
  };
  rightNode?: React.ReactNode;
  heroImg?: StaticImageData;
  backgroundKey?: keyof typeof BACKGROUND_PRESETS;
}

export const Hero = ({
  data,
  rightNode,
  heroImg,
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
        // backgroundSize: "100% 100%",
      }}
    >
      <div className={clsx(s.container, "container")}>
        <div className={s.content}>
          <div className={s.tagContainer}>
            <Kansas />
          </div>

          <h1 className={s.title}>
            <span>{data.titleSpan}</span> {data.title}
          </h1>
          <p className={s.text}>{data.tagText}</p>

          <div>
            <button className={s.button}>{data.btnText}</button>
          </div>
        </div>

        {heroImg && (
          <div
            style={{
              transform: `translate(${offset.x}px, ${offset.y}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <Image
              aria-hidden
              alt=""
              className={s.heroImage}
              src={heroImg.src}
              width={heroImg.width}
              height={heroImg.height}
            />
          </div>
        )}

        {rightNode && rightNode}
      </div>
    </section>
  );
};
