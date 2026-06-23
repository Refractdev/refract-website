import { Outlet } from "react-router-dom";
import MinimalNavbar from "./nav/MinimalNavbar";
import Footer from "./Footer";

const MinimalLayout = () => {
  return (
    <div className="min-h-screen bg-ld-neutral">
      <MinimalNavbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MinimalLayout;
