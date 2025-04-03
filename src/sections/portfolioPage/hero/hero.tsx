import data from "@shared/texts/industries/index.json";
import { useState, useEffect } from "react";
import Image from "next/image";

import { Kansas } from "@shared/components/kansas/kansas";

import hero from "@assets/images/portfolio/hero.png";

import s from "./hero.module.scss";

export const Hero = () => {
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
    <section className={s.root}>
      <div className={s.container}>
        <Kansas />
        <h1 className={s.title}>
          <span>Soft does</span> Portfolio
        </h1>
        <p className={s.text}>We transform market insights into globally beloved apps that power your business</p>
        <button className={s.button}>{data.hero.btnText}</button>
      </div>
      <Image
        aria-hidden
        alt=""
        className={s.heroImage}
        src={hero.src}
        width={hero.width}
        height={hero.height}
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />
    </section>
  );
};
