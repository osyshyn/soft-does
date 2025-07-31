import CustomSoftwareDevBg from "@assets/images/softwareDev/hero.png";
import UiuxBg from "@assets/images/uiux/heroWave.png";
import DseBg from "@assets/images/dse/heroBackground.png";
import AimlBg from "@assets/images/aiml/wave.png";
import MvpDevBg from "@assets/images/softwareServices/heroMVPDev_wave.png";
import ApiIntegrationBg from "@assets/images/softwareServices/apiIntegrationServices_wave.png";
import ProductDSBg from "@assets/images/uiux/uiuxServices/productDS_wave.png";
import UserIdBg from "@assets/images/uiux/uiuxServices/userID_wave.png";
import ArchitectureConsultingBg from "@assets/images/architecture-consulting/hero_wave.png";
import AiDevBg from "@assets/images/aiml/aimlServices/aiDev_wave.png";
import CaiSolutionsBg from "@assets/images/aiml/aimlServices/caiSolutions_wave.png";

export const BACKGROUND_PRESETS = {
  black: `linear-gradient(180deg, #161D25 0%, #161D25 100%)`,
  hero: `linear-gradient(
		-15deg,
		rgba(226, 255, 102, 0.5) 0%,
		rgba(226, 255, 102, 0) 50%
	)`,
  green: `conic-gradient(
    from 280deg at 50% 50%,
    rgba(207, 236, 87, 0.1) -80deg,
    rgba(22, 29, 37, 0.2) 50deg,
    rgba(207, 236, 87, 0.5) 280deg,
    #161d25 280deg,
    rgba(207, 236, 87, 0.5) 280deg,
    #161d25 280deg,
    rgba(207, 236, 87, 0.1) 280deg,
    rgba(22, 29, 37, 0.2) 404deg
  )`,
  grey: `conic-gradient(
    from -60deg at 67% 57%,
    rgba(117, 117, 117, 0.1) -80deg,
    rgba(22, 29, 37, 0.2) 44deg,
    rgba(117, 117, 117, 0.5) 280deg,
    #161d25 280deg,
    rgba(117, 117, 117, 0.5) 280deg,
    #161d25 280deg,
    rgba(117, 117, 117, 0.1) 280deg,
    rgba(22, 29, 37, 0.2) 404deg
  )`,
  turquoise: `conic-gradient(
    from -60deg at 67% 57%,
    rgba(117, 117, 117, 0.1) -80deg,
    rgba(22, 29, 37, 0.2) 44deg,
    rgba(60, 193, 219, 0.5) 280deg,
    #161d25 280deg,
    rgba(117, 117, 117, 0.5) 280deg,
    
    rgba(60, 193, 219, 0.25) 280deg,
    rgba(117, 117, 117, 0.1) 280deg,
    rgba(22, 29, 37, 0.2) 404deg
  )`,
  pink: `conic-gradient(
    from -60deg at 71% 50%,
    rgba(30, 189, 144, 0.1) -80deg,
    rgba(22, 29, 37, 0.2) 45deg,
    #e85a95 280deg,
    #161d25 280deg,
    rgba(232, 90, 149, 0.5) 280deg,
    #161d25 280deg,
    rgba(30, 189, 144, 0.1) 280deg,
    rgba(22, 29, 37, 0.2) 400deg
  )`,
  purple: `conic-gradient(
  from -56.04deg at 66.94% 57.26%,
  rgba(128, 0, 255, 0.1) -79.72deg,
  rgba(22, 29, 37, 0.2) 43.82deg,
  #8000FF 280.19deg,
  #161D25 280.21deg,
  rgba(128, 0, 255, 0.5) 280.23deg,
  #161D25 280.26deg,
  rgba(128, 0, 255, 0.1) 280.28deg,
  rgba(22, 29, 37, 0.2) 403.82deg
  )`,
  blue: `conic-gradient(
    from -71deg at 75% 52%,
    rgba(20, 63, 173, 0.1) -80deg,
    rgba(22, 29, 37, 0.2) 45deg,
    rgba(20, 63, 173, 0.5) 280deg,
    #161d25 280deg,
    rgba(20, 63, 173, 0.5) 280deg,
    #161d25 280deg,
    rgba(20, 63, 173, 0.1) 280deg,
    rgba(22, 29, 37, 0.2) 400deg
  )`,
  customSoftwareDev: `url(${CustomSoftwareDevBg.src})`,
  uiux: `url(${UiuxBg.src})`,
  dse: `url(${DseBg.src})`,
  aiml: `url(${AimlBg.src})`,
  mvpDev: `url(${MvpDevBg.src})`,
  apiIntegration: `url(${ApiIntegrationBg.src})`,
  uiUxProductDS: `url(${ProductDSBg.src})`,
  uiUxUserID: `url(${UserIdBg.src})`,
  architectureConsulting: `url(${ArchitectureConsultingBg.src})`,
  aiDev: `url(${AiDevBg.src})`,
  caiSolutions: `url(${CaiSolutionsBg.src})`,
} as const;
