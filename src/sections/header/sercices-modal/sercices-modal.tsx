import React from "react";
import s from "./services-modal.module.scss";

import AwsCloud from "@assets/icons/certificates/aws-cloud.png";
import CoCreator from "@assets/icons/certificates/co-creator.png";
import DevEssentials from "@assets/icons/certificates/dev-essentials.png";
import ProjectManagement from "@assets/icons/certificates/project-management.png";
import WebDevelopmentWithPython from "@assets/icons/certificates/web-development-with-python.png";
import WebDevelopment from "@assets/icons/certificates/web-development.png";
import AiFundamentals from "@assets/icons/certificates/ai-fundamentals.png";
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
import PreservingLink from "@shared/components/preserving-link/preserving-link";

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

const CERTIFICATES = [
  CoCreator,
  WebDevelopment,
  ProjectManagement,
  WebDevelopmentWithPython,
  AiFundamentals,
  DevEssentials,
  AwsCloud,
];

export {
  AIAndMachineLearning,
  ArchitectureAndConsultingServices,
  Certificates,
  CloudServices,
  DataScienceAndEngineering,
  ServiceItem,
  SoftwareDevelopment,
  UIUXDesign,
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
        <PreservingLink href={service.href}>{service.label}</PreservingLink>
      </div>

      <ul className={s.service__list}>
        {service.list.map((item) => (
          <li key={item.label}>
            <PreservingLink className={s.service__item} href={item.href}>
              <div className={s.service__item_icon}>{item.icon}</div>
              {item.label}
            </PreservingLink>
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
        {CERTIFICATES.map((item, index) => (
          <li className={s.certificates__item} key={index}>
            <Image
              alt={`Certificate ${index + 1}`}
              aria-hidden
              priority
              src={item}
              className={s.image}
              quality={100}
              placeholder="blur"
              width={80}
              height={80}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
