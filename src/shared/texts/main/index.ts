import AirtableIcon from '@shared/assets/icons/testimonials/airtable.png';
import CranePickIcon from '@shared/assets/icons/testimonials/cranePick.png';
import GoPlumberIcon from '@shared/assets/icons/testimonials/goplumber.png';
import AibesIcon from '@shared/assets/icons/testimonials/aibes.png';
import KerwellIcon from '@shared/assets/icons/testimonials/kerwell.png';
import EdsbyIcon from '@shared/assets/icons/testimonials/edsby.png';
import NicheCanvasIcon from '@shared/assets/icons/testimonials/nichecanvas.png';
import SugarloafIcon from '@shared/assets/icons/testimonials/sugarloaf.png';
import Miracleon22ndstreetIcon from '@shared/assets/icons/testimonials/niracleon22ndstreet.png';
import Upwork from '@shared/assets/images/industries/upwork.png';
import DaniloMalisicIcon from '@shared/assets/icons/testimonials/danilo-malisic.webp';

import case1Img1 from '@assets/images/case-studies/case1_img1.png';
import case1Img2 from '@assets/images/case-studies/case1_img2.png';
import case1Img3 from '@assets/images/case-studies/case1_img3.png';

import case2Img1 from '@assets/images/case-studies/case2_img1.png';
import case2Img2 from '@assets/images/case-studies/case2_img2.png';
import case2Img3 from '@assets/images/case-studies/case2_img3.png';

import case3Img1 from '@assets/images/case-studies/case3_img1.png';
import case3Img2 from '@assets/images/case-studies/case3_img2.png';
import case3Img3 from '@assets/images/case-studies/case3_img3.png';

import case4Img1 from '@assets/images/case-studies/case4_img1.png';
import case4Img2 from '@assets/images/case-studies/case4_img2.png';
import case4Img3 from '@assets/images/case-studies/case4_img3.png';

import case5Img1 from '@assets/images/case-studies/case5_img1.png';
import case5Img2 from '@assets/images/case-studies/case5_img2.png';
import case5Img3 from '@assets/images/case-studies/case5_img3.png';

import case6Img1 from '@assets/images/case-studies/case6_img1.png';
import case6Img2 from '@assets/images/case-studies/case6_img2.png';
import case6Img3 from '@assets/images/case-studies/case6_img3.png';

import case7Img1 from '@assets/images/case-studies/case7_img1.png';
import case7Img2 from '@assets/images/case-studies/case7_img2.png';
import case7Img3 from '@assets/images/case-studies/case7_img3.png';

const data = {
	hero: {
		title: 'Partner in Innovative Software Development',
		tagText: 'proudly based in kansas',
		buttonText: 'Talk to Us',
	},
	services_hero: {
		title: 'Custom Software Development',
		tagText: 'proudly based in kansas',
		buttonText: 'Contact Us',
	},
	contacts: {
		project: {
			contact: 'info@softdoes.com',
			to: 'mailto:info@softdoes.com',
			title: 'Project inquiries',
		},
		career: {
			contact: 'career@softdoes.com',
			to: 'mailto:career@softdoes.com',
			title: 'Careers',
		},
		phone: {
			contact: '913 787 7997',
			to: 'tel:913 787 7997',
			title: 'Phone number',
		},
	},
	aboutUs: {
		title: 'About us',
		description:
			'You gain cloud solutions that offer flexibility and scale, allowing you to adjust as your organization evolves. AI tools streamline operations, automate repetitive tasks, and provide insights that help guide decisions. Custom software is developed to fit your specific workflows, improving efficiency and user engagement. Data analytics uncover actionable insights that drive performance improvements and measurable results. With SOFTDOES, you have the resources to stay adaptable, increase productivity, and address challenges effectively.',
		items: [
			{
				title: '22%',
				description:
					'an average boost in productivity by using our smarter tools and optimized workflows.',
			},
			{
				title: '31%',
				description:
					'On average, our clients experience a 31% revenue boost due to improved efficiency and enhanced customer engagement.',
			},
			{
				title: '47%',
				description:
					'Previous clients report a 47% increase in customer satisfaction thanks to better user experiences and streamlined interactions.',
			},
		],
	},
	talkToUs: {
		title: 'Business Needs Scalable, Reliable Software',
		description:
			'Get the reliability and performance your users expect, even under high traffic. Our solutions grow with you, ensuring seamless user experience and stability.',
		buttonText: 'Talk to Us',
	},
	whatInclude: {
		title: 'What’s Included in Our AI Development Services',
		list: [
			'Custom AI application development (chatbots, agents, predictive analytics)',
			'Generative AI development for text, vision, and multimodal applications',
			'AI/ML pipelines for data preparation, model training, and deployment',
			'AI software development solutions for healthcare, fintech, and gaming',
			'AI agent development services with automation, monitoring, and governance',
		],
	},
	softwareDevelopment: {
		title: 'Software Development',
		buttonText: 'Build',
		list: [
			'Custom Software Development',
			'Mobile App Development',
			'Web Application Development',
			'MVP Development',
			'Product Development',
			'API Integration Services',
			'Legacy Software Modernization',
		],
	},
	aiMachineLearning: {
		title: 'AI & Machine Learning',
		buttonText: 'Scale ai',
		list: [
			'Artificial Intelligence Development',
			'Machine Learning Model Development',
			'AI-Driven Process Automation',
			'AI Operationalization',
			'Custom AI Solutions',
		],
	},
	cloudServices: {
		title: 'Cloud Services',
		buttonText: 'Optimize',
		list: [
			'Cloud Computing Solutions',
			'DevOps and Cloud Infrastructure',
			'Cloud Migration Services',
			'Managed Cloud Services',
		],
	},
	dataScienceAndEngeneering: {
		title: 'Data Science & Engineering',
		buttonText: 'Unlock Data',
		list: [
			'Data Science Services',
			'Data Analytics Solutions',
			'Enterprise Data Management',
			'Data Strategy and Governance',
		],
	},
	uiUxDesign: {
		title: 'UI/UX Design',
		buttonText: 'Enhance',
		list: [
			'User Experience Design',
			'User Interface Design',
			'Product Design ',
		],
	},
	architectureAndConsulting: {
		title: 'Architecture & Consulting Services',
		buttonText: 'Transform',
		list: [
			'Business Analytics',
			'IT Consulting',
			'Digital Transformation',
			'Product Management',
			'Product Ownership',
			'Database Design & Development',
			'Code Audits',
		],
	},
	cases: {
		title: 'Numbers Don’t Lie',
		list: [
			{
				id: 1,
				title: 'Forbidden Alchemy',
				mainInfo: ['2025'],
				additionalInfo: [
					// "Location: San Francisco, California",
					'Industry: Fashion / Apparel E-commerce',
					'Platform: Shopify',
				],
				before: {
					number: '70%',
					title: 'CART ABANDONMENT RATE',
					text: 'High abandonment caused by inconsistent sizing guidance and generic product flow resulted in thousands of dollars in lost sales each month.',
					tag: 'BEFORE',
				},
				after: {
					number: '45%',
					title: 'CART ABANDONMENT RATE',
					text: 'Smart recommendations and tailored product suggestions reduced cart abandonment, recovering an extra $7,500 in monthly revenue.',
					tag: 'AFTER',
				},
				images: [case1Img1, case1Img2, case1Img3],
			},
			{
				id: 2,
				title: 'Lobbyist Directory MVP',
				mainInfo: ['2025'],
				additionalInfo: [
					// "Location: Los Angeles, California",
					'Industry: Government / Legal Services',
					'Platform: Custom Web App (MVP)',
				],
				before: {
					number: '$120+',
					title: 'CAC PER CLIENT',
					text: 'High marketing spend with poor client–lobbyist matches wasted acquisition dollars and limited revenue growth.',
					tag: 'BEFORE',
				},
				after: {
					number: '+35%',
					title: 'REVENUE PER CLIENT',
					text: 'Smarter search filters reduced acquisition costs and improved match quality, increasing ROI and unlocking 35% more revenue per client.',
					tag: 'AFTER',
				},
				images: [case2Img1, case2Img2, case2Img3],
			},
			{
				id: 3,
				title: 'Bokeyno Motorsports',
				mainInfo: ['2025'],
				additionalInfo: [
					// "Location: San Francisco, California",
					'Industry: Automotive / Motorsports',
					'Platform: Shopify',
				],
				before: {
					number: '<20',
					title: 'LEADS PER MONTH',
					text: 'Poor SEO and weak service descriptions limited inbound leads from performance car enthusiasts.',
					tag: 'BEFORE',
				},
				after: {
					number: '65+',
					title: 'LEADS PER MONTH',
					text: 'Optimized service pages and geo-targeted SEO boosted lead flow, connecting Bokeyno with more Corvette and Mustang owners.',
					tag: 'AFTER',
				},
				images: [case3Img1, case3Img2, case3Img3],
			},
			{
				id: 4,
				title: 'EZembly Sports',
				mainInfo: ['2025'],
				additionalInfo: [
					// "Location: Atlanta, Georgia",
					'Industry: Sports / E-commerce',
					'Platform: Custom Web App (MVP)',
				],
				before: {
					number: '$85',
					title: 'AVERAGE ORDER VALUE',
					text: 'Most customers purchased only single golf cage items, limiting revenue per checkout.',
					tag: 'BEFORE',
				},
				after: {
					number: '$112',
					title: 'AVERAGE ORDER VALUE',
					text: 'Upsell features and cross-sell recommendations increased cart sizes, driving a 31% lift in AOV.',
					tag: 'AFTER',
				},
				images: [case4Img1, case4Img2, case4Img3],
			},
			{
				id: 5,
				title: 'Tulsa Shade Co.',
				mainInfo: ['2025'],
				additionalInfo: [
					// "Location: San Francisco, California",
					'Industry: Home Improvement / Construction',
					'Platform: WordPress',
				],
				before: {
					number: '1.9%',
					title: 'CONVERSION RATE',
					text: 'Confusing navigation and weak trust signals kept most visitors from requesting quotes or consultations.',
					tag: 'BEFORE',
				},
				after: {
					number: '5.6%',
					title: 'CONVERSION RATE',
					text: 'Streamlined booking flows and project galleries improved trust, nearly tripling conversion rates.',
					tag: 'AFTER',
				},
				images: [case5Img1, case5Img2, case5Img3],
			},
			{
				id: 6,
				title: 'AI-Powered Chatbot',
				mainInfo: ['2025'],
				additionalInfo: [
					// "Location: New York",
					'Industry: Customer Support / SaaS',
					'Platform: Web',
				],
				before: {
					number: '$4,000+',
					title: 'MONTHLY SUPPORT COSTS',
					text: 'Heavy reliance on human support staff for repetitive queries increased operational costs.',
					tag: 'BEFORE',
				},
				after: {
					number: '-50%',
					title: 'SUPPORT COSTS',
					text: 'Automating responses with the chatbot reduced human workload, saving more than $2,000 monthly in support expenses.',
					tag: 'AFTER',
				},
				images: [case7Img1, case7Img2, case7Img3],
			},
			{
				id: 7,
				title: 'SleepFullBaby',
				mainInfo: ['2025'],
				additionalInfo: [
					// "Location: Houston, Texas",
					'Industry: Parenting / Online Education',
					'Platform: Shopify',
				],
				before: {
					number: '$120+',
					title: 'PER SIGNUP',
					text: 'High ad spend combined with poor funnel performance pushed CAC above sustainable levels for growth.',
					tag: 'BEFORE',
				},
				after: {
					number: '-45%',
					title: 'CAC REDUCTION',
					text: 'Optimized targeting and a streamlined checkout reduced CAC, allowing more parents to enroll while lowering acquisition costs.',
					tag: 'AFTER',
				},
				images: [case6Img1, case6Img2, case6Img3],
			},
		],
	},
	industries: {
		title: 'We have experience in these industries',
		list: [
			{
				title: 'Finance',
				id: 'finance',
				color: '#143FAD',
			},
			{
				title: 'Healtcare',
				id: 'healtcare',
				color: '#003F39',
			},
			{
				title: 'Education',
				id: 'education',
				color: '#8000FF',
			},
			{
				title: 'Construction',
				id: 'construction',
				color: '#757575',
			},
			{
				title: 'Tehnology',
				id: 'tehnology',
				color: '#7A607C',
			},
			{
				title: 'Startups',
				id: 'startups',
				color: '#00909D',
			},
			{
				title: 'Compliance',
				id: 'compliance',
				color: '#FBFBFB',
			},
			{
				title: 'Energy',
				id: 'energy',
				color: '#D99B9D',
			},
		],
	},
	testimonials: {
		title: 'Testimonials',
		list: [
			{
				review: [
					'"Orest was a pleasure to work with. He was very diligent, smart and technically competent and patient as we worked through our Airtable project on successfully getting a ecommerce erp together in Airtable"',
				],
				date: 'Dec 22, 2023 - Oct 7, 2024',
				name: 'Alex Johnson',
				title: 'Airtable Expert Needed',
				logo: AirtableIcon,
			},
			{
				review: [
					'"Working with Orest has been a fantastic experience. Our project required a mix of technical skill and attention to detail, and he handled every aspect with precision. He developed efficient, scalable solutions that saved us time and effort, quickly troubleshooting and adapting as new requirements came up.',
					'Orest’s proactive communication and thorough testing made the project smooth and successful. I look forward to working with him on future projects and highly recommend him to anyone in need of a dedicated, knowledgeable, and reliable developer."',
				],
				date: 'Oct 4, 2023 - Oct 23, 2024',
				name: 'Webflow',
				title: 'Webflow',
				logo: CranePickIcon,
				style: {
					backgroundColor: '#1a1a1a',
				},
			},
			{
				title: 'Add/Optimize New and Existing Features on Website',
				review: [
					'"Orest is professional and responds promptly to ensure deadlines are met. I was designed a great-looking website with exceptional functionality. My website is complicated and has a lot of moving parts that were difficult to design. Orest completed the challenging tasks that came with building with website and enhanced the user interface. I would 100% recommend to everyone looking to build a website."',
				],
				date: 'Dec 2, 2023 - May 28, 2024',
				name: 'Michael Thompson',
				logo: GoPlumberIcon,
				style: {
					backgroundColor: '#000',
				},
			},
			{
				title: 'Refine Power Pages Website',
				review: [
					'"We are very happy with Orest\'s and his team\'s work. They were professional and timely. Creating a website is both technical and artistic, requiring multiple iterations. Orest walked us through the process, made sure to understand our requirements and also added his thoughts on best practices. All was very much appreciated."',
				],
				date: 'Apr 11, 2024 - May 1, 2024',
				name: 'Carter Creative Studio',
				logo: AibesIcon,
				style: {
					backgroundColor: '#fff',
					width: '75%',
					height: '75%',
				},
			},
			{
				title: 'Klayvio API integration and PDP page design',
				review: [
					'"Orest was fantastic! His punctuality, clear communication, and friendly personality makes him the best developer I\'ve worked with on Upwork. Deadlines were met, communication was seamless, and his skillset was outstanding. In short, he was really great to work with and was very fair and transparent on pricing -- we will be using his services again in the future. Highly recommended!!"',
				],
				date: 'Feb 10, 2024 - Apr 9, 2024',
				name: 'Jessica Reynolds',
				logo: KerwellIcon,
				style: {
					backgroundColor: '#fff',
				},
			},
			{
				title:
					'Shopify Developer for Custom Color Swatches Section with Dynamic Blocks and Metafield Integration',
				review: [
					'"The process was seamless, with every detail and requirement meticulously addressed. The attention to detail, analytical thinking, preparedness, and knowledge were evident throughout. Thank you."',
				],
				date: 'Apr 1, 2024 - Apr 6, 2024',
				name: 'Daniel Foster',
				logo: NicheCanvasIcon,
				style: {
					backgroundColor: '#fff',
					width: '80%',
					height: '80%',
				},
			},
			{
				title: 'Fixes to staged website and production implementation',
				review: [
					'"Did as good a job as we could have hoped for in challenging, time-constrained circumstances. Quite technical; was able to achieve some difficult tasks. A handful of things took longer than expected and there were occasional regressions where work had to be re-done, but it was a complex project with many moving parts. In all, the project was a success. Would re-hire and serve as a reference."',
				],
				date: 'Jan 26, 2024 - Feb 29, 2024',
				name: 'Olivia Williams',
				logo: EdsbyIcon,
				style: {
					backgroundColor: '#fff',
				},
			},
			{
				title: 'Multi-party calendaring tool',
				review: [
					'"Could not say more positive things. He treated the job personally and did all he could to deliver the project on time and in a finished manner. Bug fixes, follow up and communication throughout the project could not have been better. If you want someone you can trust to get the job done, hire Orest."',
				],
				date: 'Jul 13, 2023 - Jan 17, 2024',
				name: 'James Anderson',
				logo: SugarloafIcon,
				style: {
					backgroundColor: '#fff',
					width: '95%',
					height: '95%',
				},
			},
			{
				title: 'Website coder/admin',
				review: [
					'"I am astounded by the quality and completeness of his work. He wears his heart on his sleeve, and puts all of himself into everything he does. Just because you may not hear from him for a while does not mean he’s not working. It means he’s concentrating and working very hard. I could not be happier. I can’t wait to work with him again."',
				],
				date: 'Oct 6, 2023 - Dec 23, 2024',
				name: 'Ethan Brown',
				logo: Miracleon22ndstreetIcon,
			},
			{
				title:
					'ReactJS and ReactNative Developer needed to build frontend for existing backend',
				review: [
					'"Orest is prompt in his communication and quick to deliver work. Modifications after delivery were turned around within 24 hours. He produces high-quality work and he works hard to understand the product so that he can provide his expert opinion on different aspects of the system. It was an absolute pleasure working with Orest, and he will be my go-to for any front-end development in the future. Orest is worth his weight in gold! Thanks for the tremendous work!"',
				],
				date: 'Oct 11, 2023 - Jun, 2024',
				name: 'Sophia Miller',
				logo: Upwork,
				style: {
					width: '95%',
					height: '95%',
					backgroundColor: '#73bb44',
				},
			},
			{
				title: 'Experienced Developer Needed with Drupal + Hosting Experience',
				review: [
					'"Thanks for your help! You made working on this project easy. Anyone looking for a freelancer that has expertise and ease of communication look no further. Orest is the person for the job."',
				],
				date: 'Jul 17, 2023 - Jul 17, 2024',
				name: 'Ryan Davis',
				logo: DaniloMalisicIcon,
				style: {
					width: '135%',
					height: '135%',
					backgroundColor: '#fff',
				},
			},
		],
	},
	contactsForm: {
		title: 'TALK TO US',
		form: {
			name: { title: 'Full name *' },
			email: { title: 'Email address *' },
			number: { title: 'Phone number' },
			company: { title: 'Company name' },
			textField: {
				title: 'Tell us what you need. We’ll take it from there.',
			},
			file: {
				title: 'Attach a file',
				formats:
					'Accepted formats: .pdf, .docx, .odt, .ods, .pptx, .xls/x, .rtf, .txt.',
			},
			privacyPolicy: { text: 'I have read Privacy Notice *' },
			updates: { text: 'I agree to receive updates from SOFTDOES.' },
		},
		buttonText: 'CONNECT',
	},

	faq: {
		title: 'Frequently Asked Questions',
		listAiMl: [
			{
				question: { text: 'Do you build generative AI applications?' },
				answer: {
					text: 'Yes. We deliver generative AI development services for text, images, and multimodal use cases using frameworks like LangChain and OpenAI APIs.',
				},
			},
			{
				question: { text: 'Can you integrate AI into existing products?' },
				answer: {
					text: 'Absolutely. As a custom AI development company, we embed models into web, mobile, and enterprise software with APIs and microservices.',
				},
			},
			{
				question: {
					text: 'Do you support regulated industries like healthcare?',
				},
				answer: {
					text: 'Yes. We develop AI in drug development and healthcare workflows with HIPAA and GDPR-compliant data pipelines.',
				},
			},
			{
				question: {
					text: 'What’s included in AI software development services?',
				},
				answer: {
					text: 'Everything from data preparation and model training to deployment, monitoring, and optimization.',
				},
			},
			{
				question: {
					text: 'How do you handle AI agent development?',
				},
				answer: {
					text: 'We design AI agents with governance, monitoring, and fail-safes to ensure they operate reliably at scale.',
				},
			},
		],
		list: [
			{
				question: { text: 'How long will my project take?' },
				answer: {
					text: 'The timeline depends on the scope of your project. We analyze your requirements and provide a realistic estimate upfront, ensuring transparency and efficiency.',
				},
			},
			{
				question: { text: 'Do you work in my field?' },
				answer: {
					text: 'Our team has extensive experience across various industries, including e-commerce, healthcare, fintech, and more. We tailor our solutions to meet industry-specific needs.',
				},
			},
			{
				question: { text: 'How do you ensure everything works right?' },
				answer: {
					text: 'We follow strict quality assurance procedures, including automated and manual testing, code reviews, and performance monitoring to ensure reliability and security.',
				},
			},
			{
				question: { text: 'Can you scale what we already have?' },
				answer: {
					text: "Absolutely! We specialize in optimizing and scaling existing solutions, whether it's refining architecture, improving performance, or integrating new features.",
				},
			},
			{
				question: { text: 'How do we begin?' },
				answer: {
					text: 'Getting started is simple—just reach out with your project details, and we’ll schedule a consultation to understand your needs and propose the best approach.',
				},
			},
			{
				question: { text: 'Can you work with our in-house team?' },
				answer: {
					text: 'Yes! We seamlessly collaborate with in-house teams, integrating our expertise while maintaining your workflows and company culture.',
				},
			},
			{
				question: { text: 'How involved do we need to be?' },
				answer: {
					text: 'Your level of involvement is up to you. We keep you informed through regular updates but can handle everything independently if preferred.',
				},
			},
			{
				question: { text: 'What if we need changes mid-project?' },
				answer: {
					text: 'We embrace flexibility. If adjustments are needed during development, we assess the impact and integrate changes efficiently without disrupting timelines.',
				},
			},
			{
				question: { text: 'Do you offer support after launch?' },
				answer: {
					text: 'Yes! We provide post-launch maintenance, updates, and support to ensure your solution remains optimized and secure.',
				},
			},
		],
	},
};

export default data;
