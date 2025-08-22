import { ArrowUpAndRight } from '@shared/assets/icons/arrow-up-and-right';
import data from '@texts/main/index';
import s from './contacts.module.scss';
import PreservingLink from '@shared/components/preserving-link/preserving-link'

export const Contacts = () => (
	<section className={s.root} id='contacts'>
		<ul className={s.contactsList}>
			{Object.values(data.contacts).map(item => (
				<li key={item.contact} className={s.listItem}>
					<div className={s.itemContentWrapper}>
						<p className={s.listItemTitle}>{item.title}</p>
						<PreservingLink
							href={item.to}
							target='_blank'
							className={s.listItemLink}
						>
							<p>{item.contact}</p>
							<ArrowUpAndRight className={s.arrowIcon} />
						</PreservingLink>
					</div>
				</li>
			))}
		</ul>
	</section>
);
