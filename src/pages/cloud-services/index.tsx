import { SEO } from "@shared/ui/seo";
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

const SERVICES = [
  {
    image: <Up />,
    title: "Cloud Computing Solutions",
    text: "Scalable and flexible cloud environments tailored to your business needs.",
  },
  {
    image: <Gear />,
    title: "DevOps and Cloud Infrastructure",
    text: "Streamline your development and operations with integrated DevOps practices.",
  },
  {
    image: <Sync />,
    title: "Cloud Migration Services",
    text: "Seamlessly transition to the cloud with minimal disruption.",
  },
  {
    image: <Lock />,
    title: "Managed Cloud Services",
    text: "Comprehensive management of your cloud infrastructure to ensure optimal performance.",
  },
];

export default function CloudServices() {
  return (
    <>
      <SEO
        title="SOFT DOES"
        description="SOFT DOES is company, that will help your bussines grow!"
        pathname={ROUTES.cloudServices.root}
      />
      <Layout>
        <Hero />
        <Results />
        <Technologies />
        <div className="sectionWrapper">
          <ServicesList services={SERVICES} href={ROUTES.cloudServices.root} />
        </div>
        <div className="sectionWrapper">
          <CaseStudies />
        </div>
        <Engagement />
        <Solutions />
        <Industries />
      </Layout>
    </>
  );
}
