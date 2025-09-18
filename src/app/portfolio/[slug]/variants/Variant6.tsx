import Image from 'next/image';
import s from './variants.module.scss';

export default function Variant6() {
	return (
		<section className={s.root}>
			{Array.from({ length: 16 }, (_, i) =>
				i === 0 ? 'oq-technology-case.png' : `oq-technology-case-${i}.png`
			).map(name => (
				<div key={name} className={s.containerImage}>
					<Image
						src={`/images/portfolio-cases/oq-technology-case/${name}`}
						alt='OQ Technology case'
						width={1920}
						height={1080}
						loading='lazy'
					/>
				</div>
			))}
		</section>
	);
}
