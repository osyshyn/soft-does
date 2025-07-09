import { SEO } from "@shared/ui/seo";
import { ROUTES } from "@shared/constants/routes";
import Layout from "@shared/components/layout/layout";

import { Hero } from "@sections/ai-and-ml/hero/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { OurServices } from "@sections/our-services/our-services";
import CaseStudies from "@sections/case-studies/case-studies";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";

import {
  AiDev,
  MlMD,
  AiDPAuto,
  AiOperation,
  CaiSolutions,
} from "@assets/icons/services/ai-and-ml/icons";

const content = [
  {
    image: CaiSolutions,
    title: "Custom AI Solutions",
    text: "Tailored AI applications designed to meet specific business needs.",
    link: ROUTES.aiAndMl.caiSolutions,
  },
  {
    image: MlMD,
    title: "Machine Learning Model Development",
    text: "Create predictive models that drive informed decision-making.",
    link: ROUTES.aiAndMl.mlMD,
  },
  {
    image: AiOperation,
    title: "AI Operationalization",
    text: "Transform AI models into scalable, production-ready systems.",
    link: ROUTES.aiAndMl.aiOperation,
  },
  {
    image: AiDPAuto,
    title: "AI-Driven Process Automation",
    text: "Streamline operations with intelligent automation solutions.",
    link: ROUTES.aiAndMl.aiDPAuto,
  },
  {
    image: AiDev,
    title: "Artificial Intelligence Development",
    text: "Integrate AI solutions to enhance business processes.",
    link: ROUTES.aiAndMl.aiDev,
  },
];

export default function Aiml() {
  return (
    <>
      <SEO
        title="SOFT DOES"
        description="SOFT DOES is company, that will help your bussines grow!"
        pathname={ROUTES.aiAndMl.root}
      />
      <Layout>
        <Hero />
        <Results />
        <Technologies />
        <OurServices content={content} />
        <CaseStudies />
        <Engagement />
        <Solutions />
      </Layout>
    </>
  );
}
