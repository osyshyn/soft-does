import React from "react";
import s from "./services-modal.module.scss";
import Link from "next/link";
import { ROUTES } from "@shared/constants/routes";

import webDevelopmentFundamentals from "@assets/images/main/web-development-fundamentals.svg";
import pmCertificate from "@assets/images/main/pm-certificate.svg";
import developerEssentials from "@assets/images/main/developer-essentials.svg";
import artifactDevelopment from "@assets/images/main/artifact-intellagence-certificate.svg";
import ibmCoCreation from "@assets/images/main/ibm-co-creation.svg";
import awsCertificate from "@assets/images/main/aws-certificate.svg";
import Image from "next/image";

import {
  DataIcon,
  ProductIcon,
  MobileIcon,
  DevOpsIcon,
  StatisticsIcon,
  Statistics2Icon,
  BrainIcon,
  Brain2Icon,
  Brain3Icon,
  Brain4Icon,
  BulbIcon,
  WebDesignIcon,
  WebDevIcon,
  RobotIcon,
  PuzzleIcon,
  RocketIcon,
  CloudLockIcon,
  CloudSyncIcon,
  StarIcon,
  ComputerIcon,
  CloudUpIcon,
  ButterflyIcon,
  GearIcon,
  PencilIcon,
  CodeAiIcon,
  ChecklistIcon,
  CodeIcon,
  CloudCogIcon,
  UserIcon,
} from "@shared/assets/icons/header";

import { useLockScroll } from "@shared/components/lenis/lenis";

interface ServicesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ServiceItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

interface ServiceList {
  label: string;
  list: ServiceItem[];
}

const SoftwareDevelopment: ServiceList = {
  label: "Software Development",
  list: [
    {
      label: "Custom Software Development",
      href: ROUTES.softwareDev.customSoftDev,
      icon: <CodeIcon />,
    },
    {
      label: "Mobile App Development",
      href: ROUTES.softwareDev.webAppDev,
      icon: <MobileIcon />,
    },
    {
      label: "Web Application Development",
      href: ROUTES.softwareDev.mvpDev,
      icon: <WebDevIcon />,
    },
    {
      label: "MVP Development",
      href: ROUTES.softwareDev.mvpDev,
      icon: <RocketIcon />,
    },
    {
      label: "Product Development",
      href: ROUTES.softwareDev.root,
      icon: <GearIcon />,
    },
    {
      label: "API Integration Services",
      href: ROUTES.softwareDev.root,
      icon: <PuzzleIcon />,
    },
  ],
};

const ArchitectureAndConsultingServices: ServiceList = {
  label: "Architecture & Consulting Services",
  list: [
    {
      label: "Business Analytics",
      href: ROUTES.softwareDev.root,
      icon: <Statistics2Icon />,
    },
    {
      label: "IT Consulting",
      href: ROUTES.softwareDev.root,
      icon: <ComputerIcon />,
    },
    {
      label: "Digital Transformation",
      href: ROUTES.softwareDev.root,
      icon: <ButterflyIcon />,
    },
    {
      label: "Product Management",
      href: ROUTES.softwareDev.root,
      icon: <ChecklistIcon />,
    },
    {
      label: "Product Ownership",
      href: ROUTES.softwareDev.root,
      icon: <StarIcon />,
    },
    {
      label: "Database Design & Development",
      href: ROUTES.softwareDev.root,
      icon: <PencilIcon />,
    },
    {
      label: "Code Audits",
      href: ROUTES.softwareDev.root,
      icon: <CodeAiIcon />,
    },
  ],
};

const AIAndMachineLearning: ServiceList = {
  label: "AI & Machine Learning",
  list: [
    {
      label: "Artificial Intelligence Development",
      href: ROUTES.aiAndMl.aiDev,
      icon: <Brain4Icon />,
    },
    {
      label: "Machine Learning Model Development",
      href: ROUTES.aiAndMl.mlMD,
      icon: <Brain2Icon />,
    },
    {
      label: "AI-Driven Process Automation",
      href: ROUTES.aiAndMl.aiDPAuto,
      icon: <RobotIcon />,
    },
    {
      label: "AI Operationalization",
      href: ROUTES.aiAndMl.aiOperation,
      icon: <BrainIcon />,
    },
    {
      label: "Custom AI Solutions",
      href: ROUTES.aiAndMl.caiSolutions,
      icon: <Brain3Icon />,
    },
  ],
};

const UIUXDesign: ServiceList = {
  label: "UI / UX Design",
  list: [
    {
      label: "User Experience Design",
      href: ROUTES.uiUxDesign.userED,
      icon: <UserIcon />,
    },
    {
      label: "User Interface Design",
      href: ROUTES.uiUxDesign.userID,
      icon: <WebDesignIcon />,
    },
    {
      label: "Product Design Services",
      href: ROUTES.uiUxDesign.productDS,
      icon: <BulbIcon />,
    },
  ],
};

const CloudServices: ServiceList = {
  label: "Cloud Services",
  list: [
    {
      label: "Cloud Computing Solutions",
      href: ROUTES.cloudServices.ccs,
      icon: <CloudUpIcon />,
    },
    {
      label: "DevOps and Cloud Infrastructure",
      href: ROUTES.cloudServices.devOps,
      icon: <CloudCogIcon />,
    },
    {
      label: "Cloud Migration Services",
      href: ROUTES.cloudServices.cloudMigration,
      icon: <CloudSyncIcon />,
    },
    {
      label: "Managed Cloud Services",
      href: ROUTES.cloudServices.managedCloud,
      icon: <CloudLockIcon />,
    },
  ],
};

const DataScienceAndEngineering: ServiceList = {
  label: "Data Science & Engineering",
  list: [
    {
      label: "Data Science Services",
      href: ROUTES.dataScnAndEngnrng.dataScience,
      icon: <DataIcon />,
    },
    {
      label: "Data Analytics Solutions",
      href: ROUTES.dataScnAndEngnrng.dataAnalytics,
      icon: <StatisticsIcon />,
    },
    {
      label: "Enterprise Data Management",
      href: ROUTES.dataScnAndEngnrng.enterpriseData,
      icon: <DevOpsIcon />,
    },
    {
      label: "Data Strategy and Governance",
      href: ROUTES.dataScnAndEngnrng.dataStrategy,
      icon: <ProductIcon />,
    },
  ],
};

const CertificatesList = [
  webDevelopmentFundamentals,
  pmCertificate,
  developerEssentials,
  ibmCoCreation,
  awsCertificate,
  artifactDevelopment,
];

export {
  ServiceItem,
  Certificates,
  SoftwareDevelopment,
  ArchitectureAndConsultingServices,
  AIAndMachineLearning,
  UIUXDesign,
  CloudServices,
  DataScienceAndEngineering,
};

export const ServicesModal = ({ isOpen, onClose }: ServicesModalProps) => {
  useLockScroll(true);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className={s.block} onClick={handleOverlayClick}>
      <div id="modal" className={s.block__content}>
        <button
          aria-label="close services modal"
          className={s.block__close}
          onClick={onClose}
        >
          ✕
        </button>

        <div className={s.block__content_list}>
          <ul className={s.list}>
            <ServiceItem service={SoftwareDevelopment} />
            <ServiceItem service={ArchitectureAndConsultingServices} />
            <ServiceItem service={AIAndMachineLearning} />
            <ServiceItem service={UIUXDesign} />

            <div className={s.list__certificates}>
              <Certificates />
            </div>

            <ServiceItem service={CloudServices} />
            <ServiceItem service={DataScienceAndEngineering} />
          </ul>

          <div className={s.block__content_certificates}>
            <Certificates />
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceItem = ({ service }: { service: ServiceList }) => {
  return (
    <div className={s.service}>
      <p className={s.service__label}>{service.label}</p>

      <ul className={s.service__list}>
        {service.list.map((item) => (
          <li key={item.label}>
            <Link className={s.service__item} href={item.href}>
              <div className={s.service__item_icon}>{item.icon}</div>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Certificates = () => {
  return (
    <div className={s.certificates}>
      <p className={s.certificates__label}>Our certificates</p>

      <ul className={s.certificates__list}>
        {CertificatesList.map((item) => (
          <li className={s.certificates__item} key={item.src}>
            <Image src={item} alt={item.src} />
          </li>
        ))}
      </ul>
    </div>
  );
};
