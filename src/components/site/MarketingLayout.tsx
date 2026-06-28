import { Outlet } from "react-router-dom";
import MarketingNavbar from "./nav/MarketingNavbar";
import Footer from "./Footer";

const MarketingLayout = () => {
  return (
    <div className="min-h-screen tp-canvas">
      <MarketingNavbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MarketingLayout;
