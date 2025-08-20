import { ROUTES } from "@shared/constants/routes";

import { Hero } from "@sections/cloud-services/hero/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { ServicesList } from "@sections/services-list/services-list";
import CaseStudies from "@sections/case-studies/case-studies";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";
import { Industries } from "@sections/services/industries/industries";

import Layout from "@shared/components/layout/layout";

import { Up } from "@shared/assets/icons/services/cloud-services/up";
import { Gear } from "@shared/assets/icons/services/cloud-services/gear";
import { Sync } from "@shared/assets/icons/services/cloud-services/sync";
import { Lock } from "@shared/assets/icons/services/cloud-services/lock";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await import("@shared/texts/seo/index.json");

  return {
    title: seo.cloudServices.title,
    description: seo.cloudServices.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.cloudServices.root}`,
    },
  };
}

const SERVICES = [
  {
    image: <Up />,
    title: "Cloud Computing Solutions",
    text: "Scalable and flexible cloud environments tailored to your business needs.",
    link: ROUTES.cloudServices.ccs,
  },
  {
    image: <Gear />,
    title: "DevOps and Cloud Infrastructure",
    text: "Streamline your development and operations with integrated DevOps practices.",
    link: ROUTES.cloudServices.devOps,
  },
  {
    image: <Sync />,
    title: "Cloud Migration Services",
    text: "Seamlessly transition to the cloud with minimal disruption.",
    link: ROUTES.cloudServices.cloudMigration,
  },
  {
    image: <Lock />,
    title: "Managed Cloud Services",
    text: "Comprehensive management of your cloud infrastructure to ensure optimal performance.",
    link: ROUTES.cloudServices.managedCloud,
  },
];

export default function CloudServices() {
  return (
    <Layout>
      <Hero />
      <Results />
      <Technologies />
      <div className="sectionWrapper">
        <ServicesList services={SERVICES} />
      </div>
      <div className="sectionWrapper">
        <CaseStudies />
      </div>
      <Engagement />
      <Solutions />
      <Industries />
    </Layout>
  );
}
