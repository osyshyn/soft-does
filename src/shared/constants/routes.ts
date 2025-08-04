type SubRoutes = Record<string, string>;

type RouteGroup<Base extends string, Subs extends SubRoutes> = {
  root: Base;
} & { [K in keyof Subs]: `${Base}/${Subs[K]}` };

export function createRouteGroup<Base extends string, Subs extends SubRoutes>(
  base: Base,
  subs: Subs
): RouteGroup<Base, Subs> {
  const result = { root: base } as RouteGroup<Base, Subs>;

  (Object.keys(subs) as Array<keyof Subs>).forEach((key) => {
    result[key] = `${base}/${subs[key]}` as RouteGroup<Base, Subs>[typeof key];
  });

  return result;
}

export const ROUTES = {
  root: "/",

  softwareDev: createRouteGroup("/software-development", {
    customSoftDev: "custom-software-development",
    mobileAppDev: "mobile-app-development",
    webAppDev: "web-app-development",
    mvpDev: "mvp-development",
    productDev: "product-development",
    apiIntegration: "api-integration-services",
  }),

  aiAndMl: createRouteGroup("/ai-and-ml", {
    aiDev: "ai-development",
    mlMD: "ml-model-development",
    aiDPAuto: "ai-driven-process-automation",
    aiOperation: "ai-operationalization",
    caiSolutions: "custom-ai-solutions",
  }),

  cloudServices: createRouteGroup("/cloud-services", {
    ccs: "cloud-computing-solutions",
    devOps: "devops-and-cloud-infrastructure",
    cloudMigration: "cloud-migration-services",
    managedCloud: "managed-cloud-services",
  }),

  uiUxDesign: createRouteGroup("/ui-ux-design", {
    userED: "user-experience-design",
    userID: "user-interface-design",
    productDS: "product-design-services",
  }),

  dataScnAndEngnrng: createRouteGroup("/data-science-and-engineering", {
    dataScience: "data-science-services",
    dataAnalytics: "data-analytics-solutions",
    enterpriseData: "enterprise-data-management",
    dataStrategy: "data-strategy-and-governance",
  }),

  architectureConsulting: createRouteGroup("/architecture-consulting", {
    businessAnalytics: "business-analytics",
    digitalTransformation: "digital-transformation",
    codeAudits: "code-audits",
    productManagement: "product-management",
    productOwnership: "product-ownership",
    itConsulting: "it-consulting",
    databaseDesign: "database-design-and-development",
  }),

  services: "/services",

  expertise: "/expertise",

  industries: "/industries",

  insights: "/insights",
  category: "/blog/category/[category]",

  company: "/company",

  contact: "/contact",
};
