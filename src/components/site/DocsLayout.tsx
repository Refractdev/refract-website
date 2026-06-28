import DocsNavbar from "./nav/DocsNavbar";
import Footer from "./Footer";
import { ReactNode } from "react";

const DocsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-ld-neutral">
      <DocsNavbar />
      {children}
      <Footer />
    </div>
  );
};

export default DocsLayout;
