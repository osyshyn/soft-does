import { useRouter } from 'next/router';

import { Arrow } from '@shared/assets/icons/services/arrow';

import s from './our-services.module.scss';
import PreservingLink from '@shared/components/preserving-link/preserving-link'

interface OurServicesProps {
	content: {
		image: React.ElementType;
		title: string;
		text: string;
		link: string;
	}[];
}

export const OurServices = ({ content }: OurServicesProps) => {
	const router = useRouter();
	const basePath = router.pathname.split('/')[1];

	return (
		<section className={s.root}>
			<h2 className={s.title}>Our Services</h2>

			<ul className={s.container}>
				{content.map((item, index) => {
					const Icon = item.image;

					return (
						<li key={index}>
							<PreservingLink
								className={s.link}
								href={`/${basePath}${item.link}`}
							>
								<div>
									<p className={s.softdoes}>SOFT DOES</p>
									<Arrow className={s.arrow} />
								</div>
								<Icon className={s.icon} />
								<h3 className={s.tag}>{item.title}</h3>
								<p className={s.text}>{item.text}</p>
							</PreservingLink>
						</li>
					);
				})}
			</ul>
		</section>
	);
};
