import { Outlet } from "react-router-dom";
import DocsNavbar from "./nav/DocsNavbar";
import Footer from "./Footer";

const DocsLayout = () => {
  return (
    <div className="min-h-screen bg-ld-neutral">
      <DocsNavbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default DocsLayout;
