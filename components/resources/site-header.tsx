import Link from "next/link";
import type { FC } from "react";

export const SiteHeader: FC = () => {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/">
        Field Notes
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/resources">Resources</Link>
      </nav>
    </header>
  );
};
