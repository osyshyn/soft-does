'use client';

import Link, { LinkProps } from 'next/link';
import { forwardRef } from 'react';
import { useNoContacts } from 'providers/NoContactProvider';
import type { AnchorHTMLAttributes } from 'react';
import type { UrlObject } from 'url';

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;
type Props = LinkProps & AnchorProps & { className?: string };

function isInternal(href: string) {
	return /^\/(?!\/)/.test(href);
}

function addHashIfNeeded(href: string, add: boolean) {
	if (!add) return href;
	const [path] = href.split('#');
	return `${path}#nocontacts`;
}

const PreservingLink = forwardRef<HTMLAnchorElement, Props>(
	function PreservingLink({ href, target, rel, children, ...rest }, ref) {
		const { noContacts } = useNoContacts();

		const finalRel =
			target === '_blank'
				? [rel, 'noopener', 'noreferrer'].filter(Boolean).join(' ')
				: rel;

		if (typeof href === 'string') {
			const shouldAppend = noContacts && isInternal(href);
			const finalHref = shouldAppend ? addHashIfNeeded(href, true) : href;

			return (
				<Link
					ref={ref}
					href={finalHref}
					target={target}
					rel={finalRel}
					{...rest}
				>
					{children}
				</Link>
			);
		}

		const url = href as UrlObject;
		const pathname = url.pathname ?? '';
		const shouldAppend = noContacts && isInternal(String(pathname));
		const finalHrefObj: UrlObject = {
			pathname,
			query: url.query,
			hash: shouldAppend ? 'nocontacts' : url.hash,
		};

		return (
			<Link
				ref={ref}
				href={finalHrefObj}
				target={target}
				rel={finalRel}
				{...rest}
			>
				{children}
			</Link>
		);
	}
);

export default PreservingLink;
