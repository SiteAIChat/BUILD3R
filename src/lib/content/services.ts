export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceDefinition {
  slug: string;
  name: string;
  shortName: string;
  summary: string;
  problem: string;
  deliverables: string[];
  outcomes: string[];
  timelineWeeks: string;
  representativePrice: string;
  faqs: ServiceFaq[];
  cta: string;
}

export const services: ServiceDefinition[] = [
  {
    slug: "ai-jumpstart",
    name: "AI Jumpstart",
    shortName: "AI Jumpstart",
    summary:
      "Design and launch a working AI pilot—chat, RAG, or automation—in 2–3 weeks so your team can test with real customers.",
    problem:
      "You know AI can unlock value, but you need a guided path to identify the right use case, map data, and get a pilot live without burning months of budget.",
    deliverables: [
      "Discovery workshop + knowledge audit",
      "Prototype conversation flows and intents",
      "Deployed AI agent or automation pilot",
      "Ops playbook with KPIs and next-step roadmap"
    ],
    outcomes: [
      "Validate the impact of AI on a real workflow",
      "Prove ROI before scaling to the rest of the business",
      "Documented requirements and guardrails for next iteration"
    ],
    timelineWeeks: "2–3 weeks",
    representativePrice: "$6,000 – $9,500",
    faqs: [
      {
        question: "What do we need to bring to the engagement?",
        answer:
          "We ask for access to existing knowledge bases or process docs, stakeholder interviews, and a decision maker to sign off on success metrics."
      },
      {
        question: "Can we extend the pilot into a longer engagement?",
        answer:
          "Yes. Most teams graduate into Automation Accelerator or MVP Builder once the pilot proves the concept."
      }
    ],
    cta: "Kick off your AI pilot"
  },
  {
    slug: "automation",
    name: "Automation Accelerator",
    shortName: "Automation",
    summary:
      "Streamline operations with integrations, internal tools, and playbooks that keep your team focused on the high-leverage work.",
    problem:
      "Manual processes and scattered apps slow your team down. You need reliable automation that fits your existing tools and is easy to maintain.",
    deliverables: [
      "Systems audit and process redesign",
      "Automation blueprints with SOPs",
      "Implementation across key workflows (ops, finance, service)",
      "Dashboarding and training for the in-house team"
    ],
    outcomes: [
      "Hours saved weekly across the team",
      "Better visibility into business metrics",
      "Documented automations that withstand turnover"
    ],
    timelineWeeks: "3–6 weeks",
    representativePrice: "$8,500 – $14,000",
    faqs: [
      {
        question: "Do you integrate with our existing stack?",
        answer:
          "Yes. We work with tools like HubSpot, Airtable, Zapier, Make, Notion, and custom APIs. We'll pick the right mix based on your constraints."
      },
      {
        question: "Will we be able to maintain the automations ourselves?",
        answer:
          "Absolutely. Each build ships with SOPs, looms, and a change log so your team can keep things running and make small tweaks."
      }
    ],
    cta: "Automate our workflows"
  },
  {
    slug: "mvp",
    name: "MVP Builder",
    shortName: "MVP",
    summary:
      "Ship a lean, production-ready web or internal app with a senior-led team focused on measurable outcomes and built-in analytics.",
    problem:
      "You need a functioning product fast, but can't afford enterprise teams or endless rewrites. You need a pragmatic partner who can own delivery end to end.",
    deliverables: [
      "Product discovery and scope alignment",
      "Foundational architecture and design system",
      "Core features with auth, data models, reporting",
      "Launch support, QA, and playbooks"
    ],
    outcomes: [
      "Launch a usable product in weeks, not quarters",
      "Stay lean with a right-sized feature set",
      "Get actionable analytics from day one"
    ],
    timelineWeeks: "6–12 weeks",
    representativePrice: "$15,000 – $32,000",
    faqs: [
      {
        question: "What stack do you use?",
        answer:
          "We tailor the stack to the problem—typically TypeScript, Next.js, Cloudflare, Supabase/D1, and integrations with your existing systems."
      },
      {
        question: "Can you hand off to our internal team?",
        answer:
          "Yes. We pair with your team during the build and create handoff docs so your engineers can take over confidently."
      }
    ],
    cta: "Launch our MVP"
  },
  {
    slug: "commerce",
    name: "Commerce Integrations & AI Modules",
    shortName: "Commerce",
    summary:
      "Enhance your commerce experience with private apps, fulfillment automations, and AI-assisted merchandising tuned for your stack.",
    problem:
      "Commerce platforms rarely match how you operate. You need custom integrations and AI enhancements that respect your brand and workflows.",
    deliverables: [
      "Integration audit across storefront, ops, and fulfillment",
      "Private app or middleware implementation",
      "AI-assisted merchandising or support modules",
      "Monitoring, alerts, and training"
    ],
    outcomes: [
      "Unified data across storefront and back office",
      "Faster fulfillment and fewer errors",
      "Higher conversion with personalized experiences"
    ],
    timelineWeeks: "2–6 weeks",
    representativePrice: "$7,500 – $16,000",
    faqs: [
      {
        question: "Do you work with Shopify?",
        answer:
          "Yes. Most engagements leverage Shopify APIs, Hydrogen, or embedded apps. We also work with WooCommerce, BigCommerce, and custom platforms."
      },
      {
        question: "Can you support ongoing operations?",
        answer:
          "We offer Care plans for monitoring, enhancements, and analytics reviews once the core engagement wraps."
      }
    ],
    cta: "Enhance our commerce stack"
  }
];

export function getServiceBySlug(slug: string): ServiceDefinition | undefined {
  return services.find((service) => service.slug === slug);
}
