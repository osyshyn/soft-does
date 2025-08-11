import clsx from "clsx";
import s from "./Footer.module.scss";
import { ROUTES } from "@shared/constants/routes";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={clsx(s.wrapper, "wrapper")}>
      <div className={clsx(s.footer, "container")} id="insights">
        <div className={s.footer_line}>
          <div className={s.footer_line_column}>
            <h4>Navigation</h4>
            <Link href={ROUTES.services}>Services</Link>
            <Link href="/expertise">Expertise</Link>
            <Link href={ROUTES.industries}>Industries</Link>
            <Link href="/portfolio">Success stories</Link>
            <Link href="/company">Company</Link>
            <Link href="/insights">Insights</Link>
          </div>

          <div className={s.footer_line_column}>
            <h4>Software Development</h4>
            <Link href={ROUTES.softwareDev.customSoftDev}>
              Custom Software Development
            </Link>
            <Link href={ROUTES.softwareDev.mobileAppDev}>
              Mobile App Development
            </Link>
            <Link href={"/software-development/web-app-development"}>
              Web Application Development
            </Link>
            <Link href={ROUTES.softwareDev.mvpDev}>MVP Development</Link>
            <Link href={ROUTES.softwareDev.productDev}>
              Product Development
            </Link>
            <Link href="#">API Integration Services</Link>
          </div>
          <div className={s.footer_line_column}>
            <h4>UI/UX Design</h4>
            <Link href={ROUTES.uiUxDesign.userED}>User Experience Design</Link>
            <Link href={ROUTES.uiUxDesign.userID}>User Interface Design</Link>
            <Link href={ROUTES.uiUxDesign.productDS}>
              Product Design Services
            </Link>
          </div>
        </div>
        <div className={s.footer_line}>
          <div className={s.footer_line_column}>
            <h4>AI & Machine Learning</h4>
            <Link href={ROUTES.aiAndMl.aiDev}>
              Artificial Intelligence Development
            </Link>
            <Link href={ROUTES.aiAndMl.mlMD}>
              Machine Learning Model Development
            </Link>
            <Link href={ROUTES.aiAndMl.aiDPAuto}>
              AI-Driven Process Automation
            </Link>
            <Link href={ROUTES.aiAndMl.aiOperation}>AI Operationalization</Link>
            <Link href={ROUTES.aiAndMl.caiSolutions}>Custom AI Solutions</Link>
          </div>
          <div className={s.footer_line_column}>
            <h4>Data Science & Engineering</h4>
            <Link href={ROUTES.dataScnAndEngnrng.dataScience}>
              Data Science Services
            </Link>
            <Link href={ROUTES.dataScnAndEngnrng.dataAnalytics}>
              Data Analytics Solutions
            </Link>
            <Link href={ROUTES.dataScnAndEngnrng.enterpriseData}>
              Enterprise Data Management
            </Link>
            <Link href={ROUTES.dataScnAndEngnrng.dataStrategy}>
              Data Strategy and Governance
            </Link>
          </div>

          <div className={s.footer_line_column}>
            <h4>Architecture & Consulting Services</h4>
            <Link href={ROUTES.architectureConsulting.businessAnalytics}>
              Business Analytics
            </Link>
            <Link href={ROUTES.architectureConsulting.itConsulting}>
              IT Consulting
            </Link>
            <Link href={ROUTES.architectureConsulting.digitalTransformation}>
              Digital Transformation
            </Link>
            <Link href={ROUTES.architectureConsulting.productManagement}>
              Product Management
            </Link>
            <Link href={ROUTES.architectureConsulting.productOwnership}>
              Product Ownership
            </Link>
            <Link href={ROUTES.architectureConsulting.databaseDesign}>
              Database Design & Development
            </Link>
            <Link href={ROUTES.architectureConsulting.codeAudits}>
              Code Audits
            </Link>
          </div>
        </div>
        <div className={s.footer_line}>
          <div className={s.footer_line_column}>
            <h4>Cloud Services</h4>
            <Link href={"/cloud-services/cloud-computing-solutions"}>
              Cloud Computing Solutions
            </Link>
            <Link href={"/cloud-services/devops-and-cloud-infrastructure"}>
              DevOps and Cloud Infrastructure
            </Link>
            <Link href={"/cloud-services/cloud-migration-services"}>
              Cloud Migration Services
            </Link>
            <Link href={"/cloud-services/managed-cloud-services"}>
              Managed Cloud Services
            </Link>
          </div>
        </div>
        <div className={s.footer_line}>
          <div className={s.footer_line_column}>
            <h2>Soft Does</h2>
            <div className={s.footer_line_column_images}></div>
            <Link href={ROUTES.contact}>Contact us</Link>
            <p>
              ©Copyright 2024 Yalantis - Software engineering and IT consulting
              company. All rights reserved
            </p>
          </div>
          <div className={s.footer_line_column}>
            <a>Cookies notice</a>
            <a>Privacy notice</a>
            <a>Quality policy</a>
            <a>Yalantis Sustainability Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
