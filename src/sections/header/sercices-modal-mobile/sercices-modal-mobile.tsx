import React from "react";
import s from "./services-modal-mobile.module.scss";
import {
  ServiceItem,
  Certificates,
  SoftwareDevelopment,
  ArchitectureAndConsultingServices,
  AIAndMachineLearning,
  UIUXDesign,
  CloudServices,
  DataScienceAndEngineering,
} from "../sercices-modal/sercices-modal";
import { useLockScroll } from "@shared/components/lenis/lenis";
import ReactRemoveScroll from "react-remove-scroll/dist/es5/Combination";

interface ServicesModalMobileProps {
  isOpen: boolean;
  onClose: () => void;
}

const ServicesModalMobile = ({ isOpen, onClose }: ServicesModalMobileProps) => {
  useLockScroll(true);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className={s.mobileModal} onClick={handleOverlayClick}>
      <div className={s.mobileModal__content}>
        <ReactRemoveScroll enabled={isOpen}>
          {/* id="modal" need to be here to prevent Lenis scroll from being locked */}
          <div id="modal" className={s.mobileModal__scroll}>
            <ServiceItem service={SoftwareDevelopment} />
            <ServiceItem service={ArchitectureAndConsultingServices} />
            <ServiceItem service={AIAndMachineLearning} />
            <ServiceItem service={UIUXDesign} />
            <ServiceItem service={CloudServices} />
            <ServiceItem service={DataScienceAndEngineering} />
            <Certificates />
          </div>
        </ReactRemoveScroll>
      </div>
    </div>
  );
};

export default ServicesModalMobile;
