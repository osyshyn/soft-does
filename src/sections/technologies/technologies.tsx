import { Node } from '@shared/assets/icons/main/node';
import { C } from '@shared/assets/icons/technologies/c-plus';
import { Html } from '@shared/assets/icons/technologies/html';
import { Django } from '@shared/assets/icons/technologies/django';
import { Python } from '@shared/assets/icons/technologies/python';
import { Js } from '@shared/assets/icons/technologies/js';
import { Angular } from '@shared/assets/icons/technologies/angular';
import { Vue } from '@shared/assets/icons/technologies/vue';
import { Swift } from '@shared/assets/icons/technologies/swift';
import { Java } from '@shared/assets/icons/technologies/java';
import { Ktln } from '@shared/assets/icons/technologies/ktln';
import { Flutter } from '@shared/assets/icons/technologies/flutter';
import { N } from '@shared/assets/icons/technologies/N';
import { Obj } from '@shared/assets/icons/technologies/obj';
import { React } from '@shared/assets/icons/technologies/react';

import s from './technologies.module.scss';
import clsx from 'clsx';
import { H2, TextLg } from '@shared/components/typography';

const TECHNOLOGIES = [
	Node,
	C,
	Html,
	Django,
	Python,
	Js,
	Angular,
	Vue,
	Swift,
	Java,
	Ktln,
	Flutter,
	N,
	Obj,
	React,
];

interface TechnologiesProps {
	description?: string;
}

export const Technologies = ({ description }: TechnologiesProps) => {
	return (
		<section className={'wrapper'}>
			<div className={clsx(s.root, 'container')}>
				<div className={s.head}>
					<H2 className={s.title}>Technologies we work with </H2>

					{description && (
						<TextLg className={s.desc}>
							We align every technology choice with AI software development best
							practices. From building models with TensorFlow and PyTorch to
							integrating LangChain, Pinecone, and OpenAI APIs, our engineers
							craft AI applications that are reliable, compliant, and
							production-ready. Whether you need an AI chatbot development
							company or generative AI software development partner, we deliver
							resilient pipelines that evolve with your business.
						</TextLg>
					)}
				</div>

				<ul className={clsx('gap-md')}>
					{TECHNOLOGIES.map((Item, index) => (
						<li key={index}>
							<Item className={s.icon}></Item>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};
