import data from '@texts/main/index.json';
import Spline from '@splinetool/react-spline';

import kansasFlag from '@assets/images/main/kansas-flag-min.jpg';

import s from './hero.module.scss';
import Image from 'next/image';

export const Hero = () => {
	return (
		<section className={s.root}>
			<div className={s.container}>
				<div className={s.tagContainer}>
					<p className={s.tagText}>{data.hero.tagText}</p>
					<Image
						aria-hidden
						alt=''
						src={kansasFlag.src}
						className={s.flagImage}
						width={kansasFlag.width}
						height={kansasFlag.height}
					/>
				</div>
				<h1 className={s.title}>{data.hero.title}</h1>
				<button className={s.button}>{data.hero.buttonText}</button>
			</div>
			<Spline
				scene='https://prod.spline.design/LDRcjRsDe2GYbfYq/scene.splinecode'
				className={s.main_image}
			/>
		</section>
	);
};
