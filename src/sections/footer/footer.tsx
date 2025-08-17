import { ROUTES } from '@shared/constants/routes';
import clsx from 'clsx';
import s from './Footer.module.scss';
import PreservingLink from '@shared/components/preserving-link/preserving-link'
import { useNoContacts } from 'providers/NoContactProvider'

export default function Footer() {
	const { noContacts } = useNoContacts();

	return (
		<footer className={clsx(s.wrapper, 'wrapper')}>
			<div className={clsx(s.footer, 'container')} id='insights'>
				<div className={s.footer_line}>
					<div className={s.footer_line_column}>
						<h4>Navigation</h4>
						<PreservingLink href={ROUTES.services}>Services</PreservingLink>
						<PreservingLink href='/expertise'>Expertise</PreservingLink>
						<PreservingLink href={ROUTES.industries}>Industries</PreservingLink>
						<PreservingLink href='/portfolio'>Success stories</PreservingLink>
						<PreservingLink href='/company'>Company</PreservingLink>
						<PreservingLink href='/insights'>Insights</PreservingLink>
					</div>

					<div className={s.footer_line_column}>
						<h4>Software Development</h4>
						<PreservingLink href={ROUTES.softwareDev.customSoftDev}>
							Custom Software Development
						</PreservingLink>
						<PreservingLink href={ROUTES.softwareDev.mobileAppDev}>
							Mobile App Development
						</PreservingLink>
						<PreservingLink href={'/software-development/web-app-development'}>
							Web Application Development
						</PreservingLink>
						<PreservingLink href={ROUTES.softwareDev.mvpDev}>
							MVP Development
						</PreservingLink>
						<PreservingLink href={ROUTES.softwareDev.productDev}>
							Product Development
						</PreservingLink>
						<PreservingLink href='#'>API Integration Services</PreservingLink>
					</div>
					<div className={s.footer_line_column}>
						<h4>UI/UX Design</h4>
						<PreservingLink href={ROUTES.uiUxDesign.userED}>
							User Experience Design
						</PreservingLink>
						<PreservingLink href={ROUTES.uiUxDesign.userID}>
							User Interface Design
						</PreservingLink>
						<PreservingLink href={ROUTES.uiUxDesign.productDS}>
							Product Design Services
						</PreservingLink>
					</div>
				</div>
				<div className={s.footer_line}>
					<div className={s.footer_line_column}>
						<h4>AI & Machine Learning</h4>
						<PreservingLink href={ROUTES.aiAndMl.aiDev}>
							Artificial Intelligence Development
						</PreservingLink>
						<PreservingLink href={ROUTES.aiAndMl.mlMD}>
							Machine Learning Model Development
						</PreservingLink>
						<PreservingLink href={ROUTES.aiAndMl.aiDPAuto}>
							AI-Driven Process Automation
						</PreservingLink>
						<PreservingLink href={ROUTES.aiAndMl.aiOperation}>
							AI Operationalization
						</PreservingLink>
						<PreservingLink href={ROUTES.aiAndMl.caiSolutions}>
							Custom AI Solutions
						</PreservingLink>
					</div>
					<div className={s.footer_line_column}>
						<h4>Data Science & Engineering</h4>
						<PreservingLink href={ROUTES.dataScnAndEngnrng.dataScience}>
							Data Science Services
						</PreservingLink>
						<PreservingLink href={ROUTES.dataScnAndEngnrng.dataAnalytics}>
							Data Analytics Solutions
						</PreservingLink>
						<PreservingLink href={ROUTES.dataScnAndEngnrng.enterpriseData}>
							Enterprise Data Management
						</PreservingLink>
						<PreservingLink href={ROUTES.dataScnAndEngnrng.dataStrategy}>
							Data Strategy and Governance
						</PreservingLink>
					</div>

					<div className={s.footer_line_column}>
						<h4>Architecture & Consulting Services</h4>
						<PreservingLink
							href={ROUTES.architectureConsulting.businessAnalytics}
						>
							Business Analytics
						</PreservingLink>
						<PreservingLink href={ROUTES.architectureConsulting.itConsulting}>
							IT Consulting
						</PreservingLink>
						<PreservingLink
							href={ROUTES.architectureConsulting.digitalTransformation}
						>
							Digital Transformation
						</PreservingLink>
						<PreservingLink
							href={ROUTES.architectureConsulting.productManagement}
						>
							Product Management
						</PreservingLink>
						<PreservingLink
							href={ROUTES.architectureConsulting.productOwnership}
						>
							Product Ownership
						</PreservingLink>
						<PreservingLink href={ROUTES.architectureConsulting.databaseDesign}>
							Database Design & Development
						</PreservingLink>
						<PreservingLink href={ROUTES.architectureConsulting.codeAudits}>
							Code Audits
						</PreservingLink>
					</div>
				</div>
				<div className={s.footer_line}>
					<div className={s.footer_line_column}>
						<h4>Cloud Services</h4>
						<PreservingLink href={'/cloud-services/cloud-computing-solutions'}>
							Cloud Computing Solutions
						</PreservingLink>
						<PreservingLink
							href={'/cloud-services/devops-and-cloud-infrastructure'}
						>
							DevOps and Cloud Infrastructure
						</PreservingLink>
						<PreservingLink href={'/cloud-services/cloud-migration-services'}>
							Cloud Migration Services
						</PreservingLink>
						<PreservingLink href={'/cloud-services/managed-cloud-services'}>
							Managed Cloud Services
						</PreservingLink>
					</div>
				</div>
				<div className={s.footer_line}>
					<div className={s.footer_line_column}>
						<h2>Soft Does</h2>
						<div className={s.footer_line_column_images}></div>
						{!noContacts && (
							<PreservingLink href={ROUTES.contact}>Contact us</PreservingLink>
						)}
						<p>
							©Copyright 2024 Yalantis - Software engineering and IT consulting
							company. All rights reserved
						</p>
					</div>
					<div className={s.footer_line_column}>
						<a href='#'>Cookies notice</a>
						<a href='#'>Privacy notice</a>
						<a href='#'>Quality policy</a>
						<a href='#'>Yalantis Sustainability Policy</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
