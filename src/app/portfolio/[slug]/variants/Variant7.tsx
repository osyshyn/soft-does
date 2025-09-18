import Image from 'next/image';
import s from './variants.module.scss';

export default function Variant7() {
	return (
		<section className={s.root}>
			{Array.from({ length: 14 }, (_, i) =>
				i === 0 ? 'sparkle-case.png' : `sparkle-case-${i}.png`
			).map(name => (
				<div key={name} className={s.containerImage}>
					<Image
						src={`/images/portfolio-cases/sparkle-case/${name}`}
						alt='Sparkle case'
						width={1920}
						height={1080}
						loading='lazy'
					/>
				</div>
			))}
		</section>
	);
}
