import Image, { StaticImageData } from "next/image";

import s from "./portfolio-card.module.scss";
import Button from "@shared/components/buttons";
import { Text2Xl, TextMd, TextXl } from "@shared/components/typography";

interface PorfolioCardProps {
  img: string | StaticImageData;
  title: string;
  subtitle: string;
  description: string;
}

const PorfolioCard = ({
  img,
  title,
  subtitle,
  description,
}: PorfolioCardProps) => {
  return (
    <div className={s.card}>
      <Image aria-hidden alt="" src={img} className={s.image} />
      <Text2Xl className={s.cardTitle}>{title}</Text2Xl>
      <TextXl className={s.subtitle}>{subtitle}</TextXl>
      <TextMd className={s.description}>{description}</TextMd>
      <Button variant="secondary">Read more</Button>
    </div>
  );
};

export default PorfolioCard;
