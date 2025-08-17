'use client';
import { Kansas } from '@shared/components/kansas/kansas';

import s from './hero-text.module.scss';
import clsx from 'clsx';
import { HubSpotMeetings } from '../hub-spot-meetings';
import { useNoContacts } from 'providers/NoContactProvider';

const HeroText = ({
	title,
	titleSpan,
	text,
	buttonText,
	className,
}: {
	title: string;
	titleSpan?: string;
	text: string | React.ReactNode;
	buttonText: string;
	className?: string;
}) => {
	const { noContacts } = useNoContacts();

	return (
		<div className={clsx(s.content, className)}>
			<div className={s.kansas}>
				<Kansas />
			</div>
			<h1 className={s.title}>
				{titleSpan && <span>{titleSpan}</span>} {title}
			</h1>
			<p className={s.tagText}>{text}</p>
			<div>{!noContacts && <HubSpotMeetings>{buttonText}</HubSpotMeetings>}</div>
		</div>
	);
};

export default HeroText;
