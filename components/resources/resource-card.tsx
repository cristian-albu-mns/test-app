import Link from "next/link";
import type { FC } from "react";
import type { Resource } from "../../lib/resources";

type ResourceCardProps = {
  resource: Resource;
};

export const ResourceCard: FC<ResourceCardProps> = ({ resource }) => {
  return (
    <article className="resource-card">
      <div className="resource-card-meta">
        <span>{resource.category}</span>
        <time dateTime={resource.date}>
          {new Intl.DateTimeFormat("en", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }).format(new Date(`${resource.date}T12:00:00`))}
        </time>
      </div>
      <h2>{resource.title}</h2>
      <p>{resource.summary}</p>
      <Link className="text-link" href={`/resources/${resource.slug}`}>
        Read resource <span aria-hidden="true">↗</span>
      </Link>
    </article>
  );
};
