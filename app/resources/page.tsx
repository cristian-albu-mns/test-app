import type { Metadata } from "next";
import type { FC } from "react";
import { ResourceCard } from "../../components/resources/resource-card";
import { resources } from "../../lib/resources";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Resources | Field Notes",
  description: "A collection of practical notes, references, and field guides.",
};

const ResourcesPage: FC = () => {
  return (
    <main className="site-main collection-page">
      <section className="collection-intro">
        <p className="eyebrow">The collection</p>
        <h1>Useful things, kept together.</h1>
        <p>
          Notes for making, explaining, and improving the work in front of us.
        </p>
      </section>
      <section className="resource-grid" aria-label="Resources">
        {resources.map((resource) => (
          <ResourceCard key={resource.slug} resource={resource} />
        ))}
      </section>
    </main>
  );
};

export default ResourcesPage;
