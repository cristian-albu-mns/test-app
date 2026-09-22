import type { FC, PropsWithChildren } from "react";
import { SiteFooter } from "../../components/resources/site-footer";
import { SiteHeader } from "../../components/resources/site-header";

const ResourcesLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="resources-shell">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
};

export default ResourcesLayout;
