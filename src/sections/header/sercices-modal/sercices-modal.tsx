import React from "react";
import s from "./services-modal.module.scss";

import Co1x from "@assets/icons/certificates/co-creator-80@1x.png";
import Co2x from "@assets/icons/certificates/co-creator-80@2x.png";
import Co3x from "@assets/icons/certificates/co-creator-80@3x.png";

import Web1x from "@assets/icons/certificates/web-development-80@1x.png";
import Web2x from "@assets/icons/certificates/web-development-80@2x.png";
import Web3x from "@assets/icons/certificates/web-development-80@3x.png";

import PM1x from "@assets/icons/certificates/project-management-80@1x.png";
import PM2x from "@assets/icons/certificates/project-management-80@2x.png";
import PM3x from "@assets/icons/certificates/project-management-80@3x.png";

import Py1x from "@assets/icons/certificates/web-development-with-python-80@1x.png";
import Py2x from "@assets/icons/certificates/web-development-with-python-80@2x.png";
import Py3x from "@assets/icons/certificates/web-development-with-python-80@3x.png";

import Ai1x from "@assets/icons/certificates/ai-fundamentals-80@1x.png";
import Ai2x from "@assets/icons/certificates/ai-fundamentals-80@2x.png";
import Ai3x from "@assets/icons/certificates/ai-fundamentals-80@3x.png";

import Dev1x from "@assets/icons/certificates/dev-essentials-80@1x.png";
import Dev2x from "@assets/icons/certificates/dev-essentials-80@2x.png";
import Dev3x from "@assets/icons/certificates/dev-essentials-80@3x.png";

import Aws1x from "@assets/icons/certificates/aws-cloud-80@1x.png";
import Aws2x from "@assets/icons/certificates/aws-cloud-80@2x.png";
import Aws3x from "@assets/icons/certificates/aws-cloud-80@3x.png";

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

type Triple = { name: string; x1: string; x2: string; x3: string };

const CERTS: Triple[] = [
  { name: "co-creator", x1: Co1x.src, x2: Co2x.src, x3: Co3x.src },
  { name: "web-development", x1: Web1x.src, x2: Web2x.src, x3: Web3x.src },
  { name: "project-management", x1: PM1x.src, x2: PM2x.src, x3: PM3x.src },
  {
    name: "web-development-with-python",
    x1: Py1x.src,
    x2: Py2x.src,
    x3: Py3x.src,
  },
  { name: "ai-fundamentals", x1: Ai1x.src, x2: Ai2x.src, x3: Ai3x.src },
  { name: "dev-essentials", x1: Dev1x.src, x2: Dev2x.src, x3: Dev3x.src },
  { name: "aws-cloud", x1: Aws1x.src, x2: Aws2x.src, x3: Aws3x.src },
];

const SIZE = 111;

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
      <div id="lenis-modal" className={s.block__content}>
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
        {CERTS.map(({ name, x1, x2, x3 }, index) => (
          <li className={s.certificates__item} key={index}>
            <img
              alt={`${name} certificate`}
              width={SIZE}
              height={SIZE}
              sizes={`${SIZE}px`}
              src={x1}
              srcSet={`${x1} 1x, ${x2} 2x, ${x3} 3x`}
              loading="lazy"
              decoding="async"
              className={s.image}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
