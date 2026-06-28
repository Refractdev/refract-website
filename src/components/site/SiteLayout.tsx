import Navbar from "./Navbar";
import Footer from "./Footer";
import { ReactNode } from "react";

const SiteLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-ld-neutral">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default SiteLayout;
