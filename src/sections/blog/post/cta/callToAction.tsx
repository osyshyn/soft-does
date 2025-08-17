import Image from 'next/image';
import s from './cta.module.scss';
import PreservingLink from '@shared/components/preserving-link/preserving-link'

interface CallToActionProps {
	ctaImage?: string | { url?: string };
	ctaTitle?: string;
	ctaDescription?: string;
	ctaButton?: { url?: string; title?: string };
}

export const CallToAction = ({
	ctaImage,
	ctaTitle,
	ctaDescription,
	ctaButton,
}: CallToActionProps) => {
	function getImageSrc(
		img: string | { url?: string } | undefined
	): string | null {
		if (!img) return null;
		if (typeof img === 'string')
			return img.startsWith('//') ? `https:${img}` : img;
		if (img.url) return img.url.startsWith('//') ? `https:${img.url}` : img.url;
		return null;
	}
	const imageSrc = getImageSrc(ctaImage);

	if (
		!imageSrc &&
		!ctaTitle &&
		!ctaDescription &&
		!(ctaButton && ctaButton.url && ctaButton.title)
	) {
		return null;
	}

	return (
		<div className={s.root}>
			{imageSrc && (
				<Image
					src={imageSrc}
					alt={ctaTitle || 'CTA image'}
					width={400}
					height={200}
					className={s.image}
				/>
			)}
			<div>
				{ctaTitle && <h2>{ctaTitle}</h2>}
				{ctaDescription && <p>{ctaDescription}</p>}
				{ctaButton && ctaButton.url && ctaButton.title && (
					<PreservingLink href={ctaButton.url}>
						<button className={s.buttonGreen}>{ctaButton.title}</button>
					</PreservingLink>
				)}
			</div>
		</div>
	);
};
