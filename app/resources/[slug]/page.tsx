import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { FC } from "react";
import { getResource, resources } from "../../../lib/resources";

type ResourcePageProps = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 3600;

export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({
  params,
}: ResourcePageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResource(slug);

  return {
    title: resource
      ? `${resource.title} | Field Notes`
      : "Resource | Field Notes",
    description: resource?.summary,
  };
}

const ResourcePage: FC<ResourcePageProps> = async ({ params }) => {
  const { slug } = await params;
  const resource = getResource(slug);

  if (!resource) {
    notFound();
  }

  return (
    <main className="site-main detail-page">
      <article>
        <header className="detail-header">
          <div className="resource-card-meta">
            <span>{resource.category}</span>
            <time dateTime={resource.date}>{resource.date}</time>
          </div>
          <h1>{resource.title}</h1>
          <p>{resource.summary}</p>
        </header>
        <div className="detail-copy">
          {resource.details.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
};

export default ResourcePage;
