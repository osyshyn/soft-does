'use client';

import { registry } from './variants/index';

export default function CasePageClient({ slug }: { slug: string }) {
	const VariantComponent = registry[Number(slug)];

	return <VariantComponent />;
}
