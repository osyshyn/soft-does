import Image from 'next/image';
import s from './variants.module.scss';

export default function Variant1() {
	return (
		<section className={s.root}>
			{[
				'altera-case.png',
				'altera-case-1.png',
				'altera-case-2.png',
				'altera-case-3.png',
				'altera-case-4.png',
				'altera-case-5.png',
				'altera-case-6.png',
				'altera-case-7.png',
				'altera-case-8.png',
				'altera-case-9.png',
				'altera-case-10.png',
				'altera-case-11.png',
				'altera-case-12.png',
				'altera-case-13.png',
				'altera-case-14.png',
				'altera-case-15.png',
				'altera-case-16.png',
				'altera-case-17.png',
			].map(name => (
				<div key={name} className={s.containerImage}>
					<Image
						src={`/images/portfolio-cases/altera-case/${name}`}
						alt='Altera case'
						width={1920}
						height={1080}
						loading='lazy'
					/>
				</div>
			))}
		</section>
	);
}
