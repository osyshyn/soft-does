import Image from 'next/image';
import s from './variants.module.scss';

export default function Variant3() {
	return (
		<section className={s.root}>
			{[
				'color-and-harmony-case.png',
				'color-and-harmony-case-1.png',
				'color-and-harmony-case-2.png',
				'color-and-harmony-case-3.png',
				'color-and-harmony-case-4.png',
				'color-and-harmony-case-5.png',
				'color-and-harmony-case-6.png',
				'color-and-harmony-case-7.png',
				'color-and-harmony-case-8.png',
				'color-and-harmony-case-9.png',
				'color-and-harmony-case-10.png',
				'color-and-harmony-case-11.png',
				'color-and-harmony-case-12.png',
				'color-and-harmony-case-13.png',
				'color-and-harmony-case-14.png',
				'color-and-harmony-case-15.png',
				'color-and-harmony-case-16.png',
			].map(name => (
				<div key={name} className={s.containerImage}>
					<Image
						alt=''
						src={`/images/portfolio-cases/color-and-harmony-case/${name}`}
						width={1920}
						height={1080}
						loading='lazy'
					/>
				</div>
			))}
		</section>
	);
}
