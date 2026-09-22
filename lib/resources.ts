export type ResourceCategory = "Guide" | "Reference" | "Case study";

export type Resource = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  category: ResourceCategory;
  details: string[];
};

export const resources: Resource[] = [
  {
    slug: "a-gentle-start-to-design-systems",
    title: "A gentle start to design systems",
    summary:
      "A practical way to make shared interface decisions without slowing down a team.",
    date: "2026-09-18",
    category: "Guide",
    details: [
      "A design system does not need to begin as a giant catalogue. Start by writing down the repeated decisions your team already makes: spacing, type scale, color roles, and the states an interface needs to communicate.",
      "The useful part is the shared language. When a new screen arrives, people can point to an existing decision instead of debating the same question again.",
    ],
  },
  {
    slug: "the-shape-of-a-good-reference",
    title: "The shape of a good reference",
    summary:
      "What makes documentation easy to scan, trust, and return to later.",
    date: "2026-09-11",
    category: "Reference",
    details: [
      "Good reference material answers a specific question close to the moment someone has it. It favors clear names, stable examples, and enough context to explain when a choice applies.",
      "Keep the structure predictable. A reader should be able to find the same kind of information in the same place across every page, even when the subject changes.",
    ],
  },
  {
    slug: "shipping-the-first-useful-version",
    title: "Shipping the first useful version",
    summary:
      "A case study in choosing a smaller release that still gives people a complete workflow.",
    date: "2026-08-29",
    category: "Case study",
    details: [
      "The first version focused on one complete workflow rather than a collection of partial features. That constraint made it possible to learn from real use before investing in breadth.",
      "The strongest signal was not a feature request. It was where people paused, copied information into another tool, or asked for help. Those moments shaped the next iteration.",
    ],
  },
];

export function getResource(slug: string) {
  return resources.find((resource) => resource.slug === slug);
}
