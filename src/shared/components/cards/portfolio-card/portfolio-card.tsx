import Image, { StaticImageData } from 'next/image';

import s from './portfolio-card.module.scss';
import Button from '@shared/components/buttons';
import { Text2Xl, TextMd } from '@shared/components/typography';
import { useRouter } from 'next/navigation';

interface PorfolioCardProps {
	img: string | StaticImageData;
	title: string;
	subtitle: string;
	description: string;
	slug: number;
}

const PorfolioCard = ({
	img,
	title,
	// subtitle,
	description,
	slug,
}: PorfolioCardProps) => {
	const router = useRouter();
	const handleReadMore = () => {
		router.push(`/portfolio/${slug}`);
	};
	return (
		<div className={s.card}>
			<Image aria-hidden alt='' src={img} className={s.image} />
			<Text2Xl className={s.cardTitle}>{title}</Text2Xl>
			{/* <TextXl className={s.subtitle}>{subtitle}</TextXl> */}
			<TextMd className={s.description}>{description}</TextMd>
			<Button variant='secondary' onClick={handleReadMore}>
				Read more
			</Button>
		</div>
	);
};

export default PorfolioCard;
