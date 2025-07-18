import { ROUTES } from "./routes";
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

export const SERVICES = [
  // Software Development
  {
    label: "Custom Software Development",
    href: ROUTES.softwareDev.customSoftDev,
  },
  { label: "Mobile App Development", href: ROUTES.softwareDev.webAppDev },
  { label: "Web Application Development", href: ROUTES.softwareDev.mvpDev },
  { label: "MVP Development", href: ROUTES.softwareDev.mvpDev },
  { label: "Product Development", href: ROUTES.softwareDev.root },
  { label: "API Integration Services", href: ROUTES.softwareDev.root },
  // Architecture & Consulting Services
  { label: "Business Analytics", href: ROUTES.softwareDev.root },
  { label: "IT Consulting", href: ROUTES.softwareDev.root },
  { label: "Digital Transformation", href: ROUTES.softwareDev.root },
  { label: "Product Management", href: ROUTES.softwareDev.root },
  { label: "Product Ownership", href: ROUTES.softwareDev.root },
  { label: "Database Design & Development", href: ROUTES.softwareDev.root },
  { label: "Code Audits", href: ROUTES.softwareDev.root },
  // AI & Machine Learning
  { label: "Artificial Intelligence Dev", href: ROUTES.aiAndMl.aiDev },
  { label: "Machine Learning Model Dev", href: ROUTES.aiAndMl.mlMD },
  { label: "AI‑Driven Process Automation", href: ROUTES.aiAndMl.aiDPAuto },
  { label: "AI Operationalization", href: ROUTES.aiAndMl.aiOperation },
  { label: "Custom AI Solutions", href: ROUTES.aiAndMl.caiSolutions },
  // UI / UX Design
  { label: "User Experience Design", href: ROUTES.uiUxDesign.userED },
  { label: "User Interface Design", href: ROUTES.uiUxDesign.userID },
  { label: "Product Design Services", href: ROUTES.uiUxDesign.productDS },
  // Cloud Services
  { label: "Cloud Computing Solutions", href: ROUTES.cloudServices.ccs },
  { label: "DevOps & Cloud Infrastructure", href: ROUTES.cloudServices.devOps },
  {
    label: "Cloud Migration Services",
    href: ROUTES.cloudServices.cloudMigration,
  },
  { label: "Managed Cloud Services", href: ROUTES.cloudServices.managedCloud },
  // Data Science & Engineering
  {
    label: "Data Science Services",
    href: ROUTES.dataScnAndEngnrng.dataScience,
  },
  {
    label: "Data Analytics Solutions",
    href: ROUTES.dataScnAndEngnrng.dataAnalytics,
  },
  {
    label: "Enterprise Data Management",
    href: ROUTES.dataScnAndEngnrng.enterpriseData,
  },
  {
    label: "Data Strategy & Governance",
    href: ROUTES.dataScnAndEngnrng.dataStrategy,
  },
];

export const SoftwareDevelopment = {
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

export const ArchitectureAndConsultingServices = {
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

export const AIAndMachineLearning = {
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

export const UIUXDesign = {
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

export const CloudServices = {
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

export const DataScienceAndEngineering = {
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
