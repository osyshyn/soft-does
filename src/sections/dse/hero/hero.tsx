import Image from "next/image";
import { useState, useEffect } from "react";

import { Kansas } from "@shared/components/kansas/kansas";

import hero from "@assets/images/dse/heroObject.png";
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
        <h1 className={s.title}>Data Science & Engineering</h1>
        <p className={s.tagText}>
          We create customised software and accompany you every step of the way: from idea identification and software development to post-release support.
        </p>
        <button className={s.button}>Contact us</button>
      </div>
      <Image
        aria-hidden
        alt=""
        src={hero.src}
        className={s.heroImage}
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
