import { Globe, Home, Plane, Users, Building2, BookOpen, LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  summary: string;
  highlights: string[];
  outcomes: string[];
  link: string;
}

export const services: Service[] = [
  {
    id: "city-guides",
    icon: Globe,
    title: "Expat City Guides",
    description: "Discover the best cities with grounded, on-the-ground insight.",
    summary:
      "Shortlist locations using real-world trust signals, healthcare access, and the daily friction that rarely shows up in glossy rankings.",
    highlights: [
      "City scorecards built on safety, healthcare, and infrastructure",
      "Lifestyle fit for men over 50 with long-term priorities",
      "Reality checks on hype-driven destinations",
    ],
    outcomes: [
      "Clear shortlists aligned to your lifestyle and risk profile",
      "Decision-ready comparisons, not vague rankings",
    ],
    link: "/services#city-guides",
  },
  {
    id: "cost-of-living",
    icon: Home,
    title: "Cost of Living",
    description: "Budget your new life with a practical, line-item view.",
    summary:
      "Monthly reality checks based on actual local pricing, not tourist assumptions, so you can plan confidently.",
    highlights: [
      "Housing, healthcare, and mobility costs broken down",
      "Scenario-based budgets for single and couple living",
      "Transparent ranges with risks called out",
    ],
    outcomes: [
      "A reliable budget range you can live within",
      "Lower surprises after relocation",
    ],
    link: "/services#cost-of-living",
  },
  {
    id: "visa-residency",
    icon: Plane,
    title: "Visa and Residency",
    description: "Navigate immigration without the guesswork.",
    summary:
      "Up-to-date pathways, timelines, and documentation basics tailored to retirees and long-term stays.",
    highlights: [
      "Residency options by country and eligibility",
      "Step-by-step checklists with timelines",
      "Common pitfalls flagged early",
    ],
    outcomes: [
      "A clear path to legal, stable residency",
      "Reduced delays and rework",
    ],
    link: "/services#visa-residency",
  },
  {
    id: "remote-work",
    icon: Users,
    title: "Remote Work Base",
    description: "Find the best base for work, peace, and stability.",
    summary:
      "Infrastructure, internet reliability, coworking density, and time zone alignment for professionals.",
    highlights: [
      "Connectivity and backup options by city",
      "Productivity-focused neighborhood picks",
      "Quiet, stable living patterns",
    ],
    outcomes: [
      "A work-friendly base you can sustain long-term",
      "Less operational friction day-to-day",
    ],
    link: "/services#remote-work",
  },
  {
    id: "healthcare",
    icon: Building2,
    title: "Healthcare Abroad",
    description: "Guarantee your standard of care overseas.",
    summary:
      "Practical access maps for hospitals, specialists, and insurance frameworks, not marketing claims.",
    highlights: [
      "Hospital quality and access by region",
      "Private vs public system realities",
      "Insurance and payment basics",
    ],
    outcomes: [
      "A healthcare plan you trust",
      "Reduced medical uncertainty",
    ],
    link: "/services#healthcare",
  },
  {
    id: "tools-resources",
    icon: BookOpen,
    title: "Resources and Tools",
    description: "Essential expat toolbox for better decisions.",
    summary:
      "Templates, checklists, and decision models you can reuse for every new city or country evaluation.",
    highlights: [
      "City scorecards and move checklists",
      "Vendor vetting templates",
      "Risk assessment prompts",
    ],
    outcomes: [
      "A repeatable framework for future moves",
      "Faster evaluation with less bias",
    ],
    link: "/services#resources",
  },
];
