import MarketingNavbar from "./nav/MarketingNavbar";
import Footer from "./Footer";
import { ReactNode } from "react";

const MarketingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen tp-canvas">
      <MarketingNavbar />
      {children}
      <Footer />
    </div>
  );
};

export default MarketingLayout;
