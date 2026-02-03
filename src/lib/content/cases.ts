export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  teaser: string;
  summary: string;
  services: string[];
  metrics: { label: string; value: string }[];
  body: string[];
  weeks: string;
  priceRange: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "voltage",
    client: "Voltage",
    title: "From rented tools to owned IP",
    teaser: "We built an Amazon opportunity engine that replaced third-party tools and is evolving into a paid product.",
    summary:
      "We built an Amazon opportunity engine that replaced third-party tools, launched to coaching cohorts, and is evolving into a paid product—giving the team full ownership of their data and roadmap.",
    services: ["MVP Builder"],
    metrics: [
      { label: "Outcome", value: "Full ownership" },
      { label: "Subscriptions replaced", value: "Multiple" },
      { label: "Revenue path", value: "ARR via access tiers" }
    ],
    body: [
      "Case study details coming soon. We're documenting the full journey from concept to product.",
    ],
    weeks: "TBD",
    priceRange: "TBD"
  },
  {
    slug: "icon-meals",
    client: "Icon Meals",
    title: "The reporting backbone for kitchen ops",
    teaser: "We unified Shopify orders, ingredient planning, prep sheets, labeling, and delivery into one system.",
    summary:
      "We unified Shopify orders, ingredient planning, prep sheets, labeling, and delivery into one reporting system the team runs on daily—providing full operational visibility from prep to packaging to delivery.",
    services: ["Automation Accelerator"],
    metrics: [
      { label: "Systems unified", value: "5+" },
      { label: "Operations", value: "Full visibility" },
      { label: "Time to value", value: "Pilot-first" }
    ],
    body: [
      "Case study details coming soon. We're documenting the full journey from scattered systems to unified operations.",
    ],
    weeks: "TBD",
    priceRange: "TBD"
  },
  {
    slug: "web-piano-teacher",
    client: "Web Piano Teacher",
    title: "Modernization that lifted revenue",
    teaser: "We modernized the platform and introduced a $1 trial that increased conversions and revenue.",
    summary:
      "We modernized the platform and introduced a $1 trial that increased trials and paid conversions—leading to immediate revenue growth with clear test-and-learn loops for ongoing optimization.",
    services: ["MVP Builder"],
    metrics: [
      { label: "Conversion lift", value: "30%+" },
      { label: "Focus", value: "Trial → paid" },
      { label: "Ongoing", value: "Test & learn loops" }
    ],
    body: [
      "Case study details coming soon. We're documenting the modernization journey and revenue impact.",
    ],
    weeks: "TBD",
    priceRange: "TBD"
  },
  {
    slug: "tap-a-tech",
    client: "Tap a Tech",
    title: "Privacy-aware AI for field service",
    teaser: "On-premise AI deployment for a field service team that needed privacy-first knowledge access.",
    summary:
      "We deployed privacy-aware AI with local and private models for a field service company, giving technicians instant access to knowledge while keeping sensitive data on-premise.",
    services: ["AI Jumpstart"],
    metrics: [
      { label: "Deployment", value: "On-premise" },
      { label: "Privacy", value: "Local models" },
      { label: "Access", value: "Field-ready" }
    ],
    body: [
      "Case study details coming soon. We're documenting the privacy-first AI deployment process.",
    ],
    weeks: "TBD",
    priceRange: "TBD"
  }
];

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((item) => item.slug === slug);
}
