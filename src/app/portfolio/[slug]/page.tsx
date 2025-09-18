'use client';

import { Suspense } from 'react'
import CasePageClient from './CasePageClient';
import { useParams } from 'next/navigation';
import Layout from '@shared/components/layout/layout'

export default function PortfolioItemPage() {
	const params = useParams();
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Layout talkToUs={false} faq={false}>
				<CasePageClient slug={params.slug as string} />
			</Layout>
		</Suspense>
	);
}
