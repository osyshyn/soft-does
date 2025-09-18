import Image from 'next/image';
import s from './variants.module.scss';

export default function Variant9() {
	return (
		<section className={s.root}>
			{Array.from({ length: 16 }, (_, i) =>
				i === 0 ? 'vetnio-case.png' : `vetnio-case-${i}.png`
			).map(name => (
				<div key={name} className={s.containerImage}>
					<Image
						src={`/images/portfolio-cases/vetnio-case/${name}`}
						alt='Vetnio case'
						width={1920}
						height={1080}
						loading='lazy'
					/>
				</div>
			))}
		</section>
	);
}
