import Image from 'next/image';
import s from './variants.module.scss';

export default function Variant8() {
	return (
		<section className={s.root}>
			{Array.from({ length: 10 }, (_, i) =>
				i === 0 ? 'stay-vest-case.png' : `stay-vest-case-${i}.png`
			).map(name => (
				<div key={name} className={s.containerImage}>
					<Image
						src={`/images/portfolio-cases/stay-vest-case/${name}`}
						alt='Stay Vest case'
						width={1920}
						height={1080}
						loading='lazy'
					/>
				</div>
			))}
		</section>
	);
}
