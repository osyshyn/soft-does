import {
	documentToReactComponents,
	Options,
} from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Hero } from '@sections/postPage/hero/hero';
import { Simplify } from '@sections/postPage/simplify/simplify';
import Layout from '@shared/components/layout/layout';
import { SEO } from '@shared/ui/seo';

import { Facebook } from '@shared/assets/icons/blog/facebook';
import { Plus } from '@shared/assets/icons/blog/plus';
import { Tg } from '@shared/assets/icons/blog/tg';
import { Whatsapp } from '@shared/assets/icons/blog/whatsapp';
import { X } from '@shared/assets/icons/blog/x';
import Robot from '@shared/assets/images/blog/robot.png';

import { useEffect, useRef, useState } from 'react';
import { fetchBlog, fetchFullBlogPostList } from '../api/contentful/api';
import s from './post.module.scss';

import { BLOCKS } from '@contentful/rich-text-types';
import { CallToAction } from '@sections/blog/post/cta/callToAction';
import getSimilarArticles from '@shared/utils/getSimilarArticles';
import { IBlogPost } from '../../types/contentful/BlogPost';
import PreservingLink from '@shared/components/preserving-link/preserving-link';

const colors = ['#173B91', '#BF81FF', '#D75186'];

function renderPostContentWithCallToAction(
	postContent: any,
	options: any,
	headingRefs: any,
	ctaProps: any
) {
	if (!postContent || !postContent.content) return null;
	const content: any[] = postContent.content;
	const headingIndices = content
		.map((node: any, idx: number) =>
			node.nodeType === BLOCKS.HEADING_2 || node.nodeType === BLOCKS.HEADING_3
				? idx
				: null
		)
		.filter((idx: number | null) => idx !== null);
	if (headingIndices.length === 0) {
		return documentToReactComponents(postContent, options);
	}
	const middleHeadingIdx =
		headingIndices[Math.floor(headingIndices.length / 2)];
	const before = content.slice(0, middleHeadingIdx);
	const middleHeading = content[middleHeadingIdx];
	const after = content.slice(middleHeadingIdx + 1);
	return (
		<>
			{documentToReactComponents({ ...postContent, content: before }, options)}
			<div
				style={{ display: 'flex', justifyContent: 'center', margin: '32px 0' }}
			>
				<CallToAction {...ctaProps} />
			</div>
			{middleHeading &&
				documentToReactComponents(
					{ ...postContent, content: [middleHeading] },
					options
				)}
			{documentToReactComponents({ ...postContent, content: after }, options)}
		</>
	);
}

export default function PostPage() {
	const router = useRouter();
	const { id } = router.query;

	const [posts, setPosts] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (id) {
			setLoading(true);
			fetchFullBlogPostList(String(id)).then(data => {
				setPosts(data);
				setLoading(false);
			});
		}
	}, [id]);

	const ICONS = [Facebook, Tg, Whatsapp, X, Plus];

	const postContent = Array.isArray(posts) && posts[0]?.postContent;

	type Heading = { id: string; text: string };
	const headings: Heading[] = [];
	if (postContent && postContent.content) {
		postContent.content.forEach((node: any, idx: number) => {
			if (['heading-1', 'heading-2', 'heading-3'].includes(node.nodeType)) {
				const text = node.content?.map((n: any) => n.value).join('') || '';
				if (text) headings.push({ id: `heading-${idx}`, text });
			}
		});
	}

	const headingRefs = useRef<{ [key: string]: HTMLHeadingElement | null }>({});

	const [activeHeading, setActiveHeading] = useState<string | null>(null);

	useEffect(() => {
		const handleScroll = () => {
			let current = null;
			for (let i = 0; i < headings.length; i++) {
				const id = headings[i].id;
				const el = document.getElementById(id);
				if (el) {
					const { top } = el.getBoundingClientRect();
					if (top - 120 < 0) {
						current = id;
					}
				}
			}
			setActiveHeading(current || (headings[0]?.id ?? null));
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll();
		return () => window.removeEventListener('scroll', handleScroll);
	}, [headings]);

	const richTextOptions: Options = {
		renderNode: {
			[BLOCKS.HEADING_2]: (node, children) => {
				const idx = postContent.content.findIndex((n: any) => n === node);
				const id = `heading-${idx}`;
				return (
					<h2
						className={s.title}
						id={id}
						ref={el => {
							headingRefs.current[id] = el;
						}}
					>
						{children}
					</h2>
				);
			},
			[BLOCKS.HEADING_3]: (node, children) => {
				const idx = postContent.content.findIndex((n: any) => n === node);
				const id = `heading-${idx}`;
				return (
					<h3
						className={s.title}
						id={id}
						ref={el => {
							headingRefs.current[id] = el;
						}}
					>
						{children}
					</h3>
				);
			},
			[BLOCKS.PARAGRAPH]: (node, children) => (
				<p className={s.text}>{children}</p>
			),
		},
	};

	function formatDate(dateStr?: string) {
		if (!dateStr) return '';
		const date = new Date(dateStr);
		if (isNaN(date.getTime())) return dateStr;
		const day = String(date.getDate()).padStart(2, '0');
		const month = String(date.getMonth() + 1).padStart(2, '0');
		const year = date.getFullYear();
		return `${day}.${month}.${year}`;
	}

	const [allPosts, setAllPosts] = useState<IBlogPost[]>([]);
	useEffect(() => {
		fetchBlog().then(setAllPosts);
	}, []);

	const filteredPosts = allPosts.filter(p => String(p.id) !== String(id));
	const normalizedId =
		typeof id === 'string' ? id : Array.isArray(id) ? id[0] : '';
	const similarArticles = getSimilarArticles(filteredPosts, normalizedId);

	const heroButton1 =
		Array.isArray(posts) && posts[0]?.heroButton1 && posts[0].heroButton1;
	const heroButton2 =
		Array.isArray(posts) && posts[0]?.heroButton2 && posts[0].heroButton2;
	const stepTitle =
		Array.isArray(posts) && posts[0]?.stepTitle && posts[0].stepTitle;
	const steps =
		(Array.isArray(posts) && posts[0]?.steps && posts[0].steps) || [];
	const carousel =
		(Array.isArray(posts) && posts[0]?.heroCarousel && posts[0].heroCarousel) ||
		[];
	const heroTitle = Array.isArray(posts) && posts[0]?.title && posts[0].title;
	const heroDescription =
		Array.isArray(posts) &&
		posts[0]?.heroDescription &&
		posts[0].heroDescription;
	const authorAvatar =
		(Array.isArray(posts) && posts[0]?.author?.authorAvatar?.url) || null;

	const ctaEntry = Array.isArray(posts) && posts[0]?.callToAction;

	const ctaProps = ctaEntry
		? {
				ctaImage: ctaEntry.ctaImage?.url || ctaEntry.ctaImage || null,
				ctaTitle: ctaEntry.ctaTitle || null,
				ctaDescription: ctaEntry.ctaDescription || null,
				ctaButton: ctaEntry.ctaButton || null,
			}
		: null;

	if (loading || !Array.isArray(posts) || !posts[0]) {
		return null;
	}

	return (
		<>
			<SEO title='' description='' pathname={`/posts/${id}`} />
			<Layout posts={true}>
				<Hero
					title={heroTitle}
					desc={heroDescription}
					button1={heroButton1}
					button2={heroButton2}
					carousel={carousel}
				/>
				{stepTitle && steps.length > 0 && (
					<Simplify title={stepTitle} steps={steps} />
				)}
				<section className={s.post}>
					<div className={s.layout}>
						<div className={`${s.leftSide} ${s.sticky}`}>
							<p>Share:</p>
							<ul>
								{ICONS.map((Icon, i) => (
									<li key={i}>
										<Icon />
									</li>
								))}
							</ul>
						</div>

						<div className={s.content}>
							{postContent &&
								renderPostContentWithCallToAction(
									postContent,
									richTextOptions,
									headingRefs,
									ctaProps
								)}

							<div className={s.comments}>
								<div>
									<h2>Comments</h2>
									<p>
										{(Array.isArray(posts) && posts[0]?.comments?.length) || 0}{' '}
										comments
									</p>
								</div>
								<ul>
									{Array.isArray(posts) && posts[0]?.comments?.length > 0 ? (
										posts[0].comments.map((comment: any, index: number) => (
											<li key={index}>
												<div>
													<div
														className={s.pfp}
														style={{
															backgroundColor: colors[index % colors.length],
														}}
													>
														{comment.authorAvatar &&
														comment.authorAvatar.url ? (
															<img
																src={comment.authorAvatar.url}
																alt={
																	comment.authorName ||
																	comment.author ||
																	'avatar'
																}
																style={{
																	width: '100%',
																	height: '100%',
																	borderRadius: '50%',
																	objectFit: 'cover',
																}}
															/>
														) : (
															(
																comment.authorName ||
																comment.author ||
																''
															).slice(0, 1)
														)}
													</div>
													<div>
														<p>{comment.authorName || comment.author}</p>
														<p>
															{formatDate(comment.createdAt || comment.date)}
														</p>
													</div>
												</div>
												<p>{comment.commentText || comment.text}</p>
											</li>
										))
									) : (
										<li>No comments yet.</li>
									)}
								</ul>
							</div>

							<div className={s.articles}>
								<h2>Similar articles</h2>
								<ul>
									{similarArticles.length === 0 && (
										<li>No similar articles found.</li>
									)}
									{similarArticles.map(article => (
										<li key={article.id} className={s.similarArticleItem}>
											<Image
												aria-hidden
												alt={article.author?.authorName || 'Author'}
												src={
													article.mainImage?.url
														? article.mainImage.url.startsWith('//')
															? `https:${article.mainImage.url}`
															: article.mainImage.url
														: Robot.src
												}
												className={s.image}
												width={300}
												height={200}
											/>
											<div>
												<div>
													<h3>
														{typeof article.author === 'object' &&
														article.author !== null &&
														'authorName' in article.author
															? article.author.authorName
															: 'Unknown Author'}
													</h3>
													<p>
														{typeof article.author === 'object' &&
														article.author !== null &&
														'authorRole' in article.author
															? article.author.authorRole
															: ''}
													</p>
												</div>
												{article.testimonialText && (
													<div className={s.testimonialText}>
														{typeof article.testimonialText === 'string'
															? article.testimonialText
															: documentToReactComponents(
																	article.testimonialText as any
																)}
													</div>
												)}
												<PreservingLink href={`/posts/${article.id}`}>
													<button>Read more</button>
												</PreservingLink>
											</div>
										</li>
									))}
								</ul>
							</div>
						</div>

						<div className={`${s.rightSide} ${s.sticky}`}>
							<div>
								<div className={s.authorImg}>
									<img
										src={authorAvatar}
										alt={
											(Array.isArray(posts) && posts[0]?.author?.authorName) ||
											(Array.isArray(posts) && posts[0]?.author) ||
											'avatar'
										}
										style={{
											width: '100%',
											height: '100%',
											borderRadius: '50%',
											objectFit: 'cover',
										}}
									/>
								</div>
								<div>
									<p>{Array.isArray(posts) && posts[0]?.author?.authorName}</p>
									<p>{Array.isArray(posts) && posts[0]?.author?.authorRole}</p>
								</div>
							</div>
							<div>
								<div>
									<p>Table of contents</p>
									<div className={s.line}></div>
								</div>
								<ul>
									{headings.map(heading => (
										<li key={heading.id}>
											<a
												href={`#${heading.id}`}
												className={
													heading.id === activeHeading
														? s.activeLink
														: s.inactiveLink
												}
												onClick={e => {
													e.preventDefault();
													const el = document.getElementById(heading.id);
													if (el) {
														el.scrollIntoView({
															behavior: 'smooth',
															block: 'start',
														});
													}
												}}
											>
												{heading.text}
											</a>
										</li>
									))}
								</ul>
							</div>
							{Array.isArray(posts) && posts[0]?.sidebarContactTitle ? (
								<div className={s.sidebarContact}>
									<p>
										{Array.isArray(posts) &&
											posts[0]?.sidebarContactTitle &&
											posts[0].sidebarContactTitle}
									</p>
									{Array.isArray(posts) && posts[0]?.sidebarContactButton
										? (() => {
												const btn =
													Array.isArray(posts) &&
													posts[0]?.sidebarContactButton &&
													posts[0].sidebarContactButton;

												return btn.url && btn.title ? (
													<PreservingLink href={btn.url}>
														<button className={s.buttonWhite}>
															{btn.title}
														</button>
													</PreservingLink>
												) : btn.title ? (
													<button className={s.buttonWhite}>{btn.title}</button>
												) : null;
											})()
										: null}
								</div>
							) : null}
						</div>
					</div>
				</section>
			</Layout>
		</>
	);
}
