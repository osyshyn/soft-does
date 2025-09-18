import Image from 'next/image';
import s from './variants.module.scss';

export default function Variant5() {
	return (
		<section className={s.root}>
			{Array.from({ length: 21 }, (_, i) =>
				i === 0 ? 'modern-gentlemen-case.png' : `modern-gentlemen-case-${i}.png`
			).map(name => (
				<div key={name} className={s.containerImage}>
					<Image
						src={`/images/portfolio-cases/modern-gentlemen-case/${name}`}
						alt='Modern Gentlemen case'
						width={1920}
						height={1080}
						loading='lazy'
					/>
				</div>
			))}
		</section>
	);
}
