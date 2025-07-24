import React from "react";
import s from "./services-modal.module.scss";
import Link from "next/link";

import webDevelopmentFundamentals from "@assets/images/main/web-development-fundamentals.svg?url";
import pmCertificate from "@assets/images/main/pm-certificate.svg?url";
import developerEssentials from "@assets/images/main/developer-essentials.svg?url";
import artifactDevelopment from "@assets/images/main/artifact-intellagence-certificate.svg?url";
import ibmCoCreation from "@assets/images/main/ibm-co-creation.svg?url";
import awsCertificate from "@assets/images/main/aws-certificate.svg?url";
import Image from "next/image";

import { useLockScroll } from "@shared/components/lenis/lenis";
import {
  AIAndMachineLearning,
  ArchitectureAndConsultingServices,
  CloudServices,
  DataScienceAndEngineering,
  SoftwareDevelopment,
  UIUXDesign,
} from "@shared/constants/services";

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
  href: string;
  list: ServiceItem[];
}

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
      <div className={s.service__label}>
        <Link href={service.href}>{service.label}</Link>
      </div>

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
        {CertificatesList.map((item, index) => (
          <li className={s.certificates__item} key={index}>
            <Image
              src={item}
              width={80}
              height={80}
              alt={`Certificate ${index + 1}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
