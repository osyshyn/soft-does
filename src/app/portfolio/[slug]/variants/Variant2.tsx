'use client';

import Image from 'next/image';
import s from './variants.module.scss';

export default function Variant2() {
	return (
		<section className={s.root}>
			{[
				'brizacorp-case.png',
				'brizacorp-case-1.png',
				'brizacorp-case-2.png',
				'brizacorp-case-3.png',
				'brizacorp-case-4.png',
				'brizacorp-case-5.png',
				'brizacorp-case-6.png',
				'brizacorp-case-7.png',
				'brizacorp-case-8.png',
				'brizacorp-case-9.png',
				'brizacorp-case-10.png',
				'brizacorp-case-11.png',
			].map(name => (
				<div key={name} className={s.containerImage}>
					<Image
						src={`/images/portfolio-cases/brizacorp-case/${name}`}
						alt='Brizacorp case'
						width={1920}
						height={1080}
						loading='lazy'
					/>
				</div>
			))}
		</section>
	);
}
