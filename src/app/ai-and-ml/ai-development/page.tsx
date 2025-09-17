import data from '@shared/texts/aiml/aiDev.json';

import { ROUTES } from '@shared/constants/routes';
import Layout from '@shared/components/layout/layout';

import { Hero } from '@sections/hero/hero';
import { Results } from '@sections/results/results';
import { Technologies } from '@sections/technologies/technologies';
import CaseStudies from '@sections/case-studies/case-studies';
import { Testimonials } from '@sections/testimonials/testimonials';
import { Engagement } from '@sections/engagement-options/engagement-options';
import { Solutions } from '@sections/solutions/solutions';

import HeroObj from '@assets/images/aiml/aimlServices/heroObject_aiDev.png';
import s from './ai-development.module.scss';

import { Metadata } from 'next';
import WhatInclude from '@sections/what-include/what-include'
export async function generateMetadata(): Promise<Metadata> {
	const seo = await import('@shared/texts/seo/index.json');

	return {
		title: seo.aiAndMl.aiDev.title,
		description: seo.aiAndMl.aiDev.description,
		alternates: {
			canonical: `https://softdoes.com${ROUTES.aiAndMl.aiDev}`,
		},
		openGraph: {
			title: seo.aiAndMl.aiDev.openGraph.title,
			description: seo.aiAndMl.aiDev.openGraph.description,
			url: seo.aiAndMl.aiDev.openGraph.url,
			images: seo.aiAndMl.aiDev.openGraph.images,
			type: seo.aiAndMl.aiDev.openGraph.type as 'website',
		},
		twitter: {
			title: seo.aiAndMl.aiDev.twitter.title,
			description: seo.aiAndMl.aiDev.twitter.description,
			images: seo.aiAndMl.aiDev.twitter.images,
		},
	};
}

export default function AiDev() {
	const jsonLd = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Organization',
				'@id': 'https://softdoes.com/#organization',
				name: 'SoftDoes',
				url: 'https://softdoes.com/',
				logo: 'https://softdoes.com/images/logo.png',
				areaServed: ['US'],
				contactPoint: {
					'@type': 'ContactPoint',
					contactType: 'sales',
					telephone: '+12134019311',
					email: 'hello@softdoes.com',
					availableLanguage: ['English'],
				},
				hasOfferCatalog: {
					'@type': 'OfferCatalog',
					name: 'Services',
					itemListElement: [
						{
							'@type': 'OfferCatalog',
							name: 'Software Development',
							itemListElement: [
								{
									'@type': 'Offer',
									url: 'https://softdoes.com/software-development/web-app-development',
									itemOffered: {
										'@type': 'Service',
										name: 'Web App Development & Custom Solutions | SoftDoes',
									},
								},
								{
									'@type': 'Offer',
									url: 'https://softdoes.com/software-development/mvp-development',
									itemOffered: {
										'@type': 'Service',
										name: 'MVP & Product Prototype Development Services | SoftDoes',
									},
								},
								{
									'@type': 'Offer',
									url: 'https://softdoes.com/software-development/custom-software-development',
									itemOffered: {
										'@type': 'Service',
										name: 'Custom Software & App Development Services | SoftDoes',
									},
								},
								{
									'@type': 'Offer',
									url: 'https://softdoes.com/software-development/product-development',
									itemOffered: {
										'@type': 'Service',
										name: 'Product Development & Engineering Services | SoftDoes',
									},
								},
								{
									'@type': 'Offer',
									url: 'https://softdoes.com/software-development/mobile-app-development',
									itemOffered: {
										'@type': 'Service',
										name: 'Mobile App Development Services & Solutions | SoftDoes',
									},
								},
								{
									'@type': 'Offer',
									url: 'https://softdoes.com/software-development/api-integration-services',
									itemOffered: {
										'@type': 'Service',
										name: 'Systems Integration & API Solutions Services | SoftDoes',
									},
								},
							],
						},
						{
							'@type': 'OfferCatalog',
							name: 'AI & ML',
							itemListElement: [
								{
									'@type': 'Offer',
									url: 'https://softdoes.com/ai-and-ml/ai-development',
									itemOffered: {
										'@type': 'Service',
										name: 'AI Development & Custom Solutions | SoftDoes',
									},
								},
								{
									'@type': 'Offer',
									url: 'https://softdoes.com/ai-and-ml/ai-operationalization',
									itemOffered: {
										'@type': 'Service',
										name: 'Operationalizing Machine Learning for Business | SoftDoes',
									},
								},
								{
									'@type': 'Offer',
									url: 'https://softdoes.com/ai-and-ml/ml-model-development',
									itemOffered: {
										'@type': 'Service',
										name: 'ML Model Development & Predictive Solutions | SoftDoes',
									},
								},
								{
									'@type': 'Offer',
									url: 'https://softdoes.com/ai-and-ml/ai-driven-process-automation',
									itemOffered: {
										'@type': 'Service',
										name: 'Intelligent Process Automation Solutions | SoftDoes',
									},
								},
								{
									'@type': 'Offer',
									url: 'https://softdoes.com/ai-and-ml/custom-ai-solutions',
									itemOffered: {
										'@type': 'Service',
										name: 'Custom AI Solutions for Business Innovation | SoftDoes',
									},
								},
							],
						},
						{
							'@type': 'OfferCatalog',
							name: 'Cloud Services',
							itemListElement: [
								{
									'@type': 'Offer',
									url: 'https://softdoes.com/cloud-services/managed-cloud-services',
									itemOffered: {
										'@type': 'Service',
										name: 'Managed Cloud Services & Infrastructure Support | SoftDoes',
									},
								},
								{
									'@type': 'Offer',
									url: 'https://softdoes.com/cloud-services/devops-and-cloud-infrastructure',
									itemOffered: {
										'@type': 'Service',
										name: 'DevOps & Cloud Infrastructure as Code Setup | SoftDoes',
									},
								},
								{
									'@type': 'Offer',
									url: 'https://softdoes.com/cloud-services/cloud-migration-services',
									itemOffered: {
										'@type': 'Service',
										name: 'Cloud Migration Services & Data Specialists | SoftDoes',
									},
								},
								{
									'@type': 'Offer',
									url: 'https://softdoes.com/cloud-services/cloud-computing-solutions',
									itemOffered: {
										'@type': 'Service',
										name: 'Enterprise Cloud Computing & Secure Solutions | SoftDoes',
									},
								},
							],
						},
						{
							'@type': 'OfferCatalog',
							name: 'UI/UX Design',
							itemListElement: [
								{
									'@type': 'Offer',
									url: 'https://softdoes.com/ui-ux-design/user-interface-design',
									itemOffered: {
										'@type': 'Service',
										name: 'User Interface Design Services for Web & Mobile | SoftDoes',
									},
								},
								{
									'@type': 'Offer',
									url: 'https://softdoes.com/ui-ux-design/user-experience-design',
									itemOffered: {
										'@type': 'Service',
										name: 'User & Customer Experience Design Services | SoftDoes',
									},
								},
								{
									'@type': 'Offer',
									url: 'https://softdoes.com/ui-ux-design/product-design-services',
									itemOffered: {
										'@type': 'Service',
										name: 'Product Design Services for Web & Mobile | SoftDoes',
									},
								},
							],
						},
					],
				},
			},
			{
				'@type': 'WebSite',
				'@id': 'https://softdoes.com/#website',
				url: 'https://softdoes.com/',
				name: 'SoftDoes',
				publisher: { '@id': 'https://softdoes.com/#organization' },
			},
			{
				'@type': 'WebPage',
				url: 'https://softdoes.com/ai-and-ml/ai-development',
				name: 'AI Development & Custom Solutions | SoftDoes',
				description:
					'SoftDoes offers AI development services, delivering custom AI solutions, machine learning models, and intelligent automation to enhance business performance',
				isPartOf: { '@id': 'https://softdoes.com/#website' },
				breadcrumb: {
					'@type': 'BreadcrumbList',
					itemListElement: [
						{
							'@type': 'ListItem',
							position: 1,
							name: 'Home',
							item: 'https://softdoes.com/',
						},
						{
							'@type': 'ListItem',
							position: 2,
							name: 'AI And ML',
							item: 'https://softdoes.com/ai-and-ml/',
						},
						{
							'@type': 'ListItem',
							position: 3,
							name: 'AI Development',
							item: 'https://softdoes.com/ai-and-ml/ai-development/',
						},
					],
				},
				areaServed: ['US'],
				mainEntity: {
					'@type': 'Service',
					'@id': 'https://softdoes.com/ai-and-ml/ai-development#service',
					name: 'AI Development',
					serviceType: 'AI Development',
					provider: { '@id': 'https://softdoes.com/#organization' },
					areaServed: ['US'],
					offers: {
						'@type': 'Offer',
						url: 'https://softdoes.com/ai-and-ml/ai-development',
					},
				},
			},
		],
	};

	return (
		<Layout>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
				}}
			/>

			<Hero
				data={data.hero}
				heroImg={HeroObj}
				isDynamicImage
				heroImgClassName={s.heroImg}
				textContainerClassName={s.textContainer}
				backgroundKey='aiDev'
			/>
			<Results />
			<div className='pageWrapper'>
        <WhatInclude />
				<Technologies
					description={
						'We align every technology choice with AI software development best practices. From building models with TensorFlow and PyTorch to integrating LangChain, Pinecone, and OpenAI APIs, our engineers craft AI applications that are reliable, compliant, and production-ready. Whether you need an AI chatbot development company or generative AI software development partner, we deliver resilient pipelines that evolve with your business.'
					}
				/>
				<Testimonials
					description={
						'Our clients trust us to deliver AI software development services that produce measurable outcomes. From reducing operational costs with AI agent development to boosting customer retention with AI chatbot development, we’ve proven that AI solutions development should drive growth — not just experiments. Here’s what partners say about working with us.'
					}
				/>
				<Engagement
					description={
						'Every AI initiative has unique goals and risk profiles. That’s why we offer engagement models that fit your project scope:'
					}
				/>
				<CaseStudies />
				<Solutions
					description={
						'AI development powers innovation across industries — from AI in drug development and medical imaging to AI in video game development, predictive finance, and enterprise automation. By embedding AI/ML development into data engineering, cloud operations, and app delivery, we provide a unified backbone for intelligent products that scale.'
					}
				/>
			</div>
		</Layout>
	);
}
