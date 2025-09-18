import Image from 'next/image';
import s from './variants.module.scss';

export default function Variant4() {
	return (
		<section className={s.root}>
			{Array.from({ length: 22 }, (_, i) =>
				i === 0
					? 'forbidden-alchemy-case.png'
					: `forbidden-alchemy-case-${i}.png`
			).map(name => (
				<div key={name} className={s.containerImage}>
					<Image
						src={`/images/portfolio-cases/forbidden-alchemy-case/${name}`}
						alt='Forbidden Alchemy case'
						width={1920}
						height={1080}
						loading='lazy'
					/>
				</div>
			))}
		</section>
	);
}
