import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index.tsx";
import Documentation from "./pages/Documentation.tsx";
import Privacy from "./pages/Privacy.tsx";
import Terms from "./pages/Terms.tsx";
import HelpCenter from "./pages/HelpCenter.tsx";
import Integrations from "./pages/Integrations.tsx";
import Contact from "./pages/Contact.tsx";
import About from "./pages/About.tsx";
import Roadmap from "./pages/Roadmap.tsx";
import Status from "./pages/Status.tsx";
import NotFound from "./pages/NotFound.tsx";
import ExternalRedirect from "@/components/ExternalRedirect";
import CookieConsent from "@/components/site/CookieConsent";
import "./index.css";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <CookieConsent />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/docs" element={<Documentation />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/status" element={<Status />} />
        <Route path="/login" element={<ExternalRedirect />} />
        <Route path="/signup" element={<ExternalRedirect />} />
        <Route path="/dashboard" element={<ExternalRedirect />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
