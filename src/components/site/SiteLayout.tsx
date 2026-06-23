import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const SiteLayout = () => {
  return (
    <div className="min-h-screen bg-ld-neutral">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default SiteLayout;
