import data from '@texts/main/index';
import s from './what-include.module.scss';
import clsx from 'clsx';
import { H4, TextLg } from '@shared/components/typography';

import img from '@assets/images/main/faq-image.png';
import Image from 'next/image';
import { Pin } from '@shared/assets/icons/pin-icon';

export const WhatInclude = () => {
	return (
		<div className={clsx(s.wrapper, 'wrapper')}>
			<section className={clsx(s.root, 'container')}>
				<div className={s.leftWrapper}>
					<H4 className={s.title}>{data.whatInclude.title}</H4>
					{data.whatInclude.list.map((item, index) => (
						<li className={s.point} key={index}>
							<Pin className={s.pin} />
							<TextLg>{item}</TextLg>
						</li>
					))}
				</div>

				<div className={s.rightWrapper}>
					<Image src={img.src} alt='' width={389} height={442} />
				</div>

				{/* <div className={s.imageWrapper}>
					<div className={s.image}>
						<Image fill aria-hidden src={img.src} alt='' />
					</div>
				</div> */}
			</section>
		</div>
	);
};

export default WhatInclude;
