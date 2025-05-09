import data from '@texts/main/index.json';
import Spline from '@splinetool/react-spline';

import kansasFlag from '@assets/images/main/kansas-flag-min.jpg';

import s from './hero.module.scss';
import Image from 'next/image';
import { HeroContactForm } from '@sections/hero-contacts-form/hero-contact-form'

export const ContactUsHero = () => {
	return (
		<section className={s.root}>
			<div className={s.container}>

				<HeroContactForm />
			</div>
			<Spline
				scene='https://prod.spline.design/LDRcjRsDe2GYbfYq/scene.splinecode'
				className={s.main_image}
			/>
		</section>
	);
};
