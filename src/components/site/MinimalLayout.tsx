import MinimalNavbar from "./nav/MinimalNavbar";
import Footer from "./Footer";
import { ReactNode } from "react";

const MinimalLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-ld-neutral">
      <MinimalNavbar />
      {children}
      <Footer />
    </div>
  );
};

export default MinimalLayout;
