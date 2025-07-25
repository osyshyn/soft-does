import { SEO } from "@shared/ui/seo";
import { ROUTES } from "@shared/constants/routes";
import Layout from "@shared/components/layout/layout";

import { Hero } from "@sections/hero/hero";
// import { Hero } from "@sections/dse/hero/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { ServicesList } from "@sections/services-list/services-list";
import CaseStudies from "@sections/case-studies/case-studies";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";

import {
  Data,
  Analytics,
  Secure,
  View,
} from "@assets/icons/services/dse/icons";

import data from "@shared/texts/data-science-and-engineering/index.json";

const content = [
  {
    image: <Data />,
    title: "Data Science Services",
    text: "Unlock insights with advanced analytics and data modeling.",
    link: "/",
  },
  {
    image: <Analytics />,
    title: "Data Analytics Solutions",
    text: "Transform raw data into actionable insights for strategic decision-making.",
    link: "/",
  },
  {
    image: <Secure />,
    title: "Enterprise Data Management",
    text: "Optimize your data assets across the organization.",
    link: "/",
  },
  {
    image: <View />,
    title: "Data Strategy and Governance",
    text: "Establish robust data governance frameworks to ensure data integrity and compliance.",
    link: "/",
  },
];

import HeroImg from "@assets/images/dse/heroObject.png";

export default function DSE() {
  return (
    <>
      <SEO
        title="SOFT DOES"
        description="SOFT DOES is company, that will help your bussines grow!"
        pathname={ROUTES.dataScnAndEngnrng.root}
      />
      <Layout>
        <Hero data={data.hero} heroImg={HeroImg} backgroundKey="dse" />
        <Results />
        <Technologies />
        <div className="sectionWrapper">
          <ServicesList
            services={content}
            href={ROUTES.dataScnAndEngnrng.root}
          />
        </div>
        <CaseStudies />
        <Engagement />
        <Solutions />
      </Layout>
    </>
  );
}
