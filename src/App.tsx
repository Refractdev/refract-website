import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index.tsx";
import ProductPage from "./pages/ProductPage.tsx";
import ChangelogPage from "./pages/ChangelogPage.tsx";
import Documentation from "./pages/Documentation.tsx";
import Privacy from "./pages/Privacy.tsx";
import Terms from "./pages/Terms.tsx";
import HelpCenter from "./pages/HelpCenter.tsx";
import Integrations from "./pages/Integrations.tsx";
import Contact from "./pages/Contact.tsx";
import About from "./pages/About.tsx";
import Roadmap from "./pages/Roadmap.tsx";
import Status from "./pages/Status.tsx";
import PricingPage from "./pages/PricingPage.tsx";
import NotFound from "./pages/NotFound.tsx";
import ExternalRedirect from "@/components/ExternalRedirect";
import MarketingLayout from "@/components/site/MarketingLayout";
import DocsLayout from "@/components/site/DocsLayout";
import MinimalLayout from "@/components/site/MinimalLayout";
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
        <Route path="/login" element={<ExternalRedirect />} />
        <Route path="/signup" element={<ExternalRedirect />} />
        <Route path="/dashboard" element={<ExternalRedirect />} />

        <Route element={<MarketingLayout />}>
          <Route path="/" element={<Index />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/changelog" element={<ChangelogPage />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/status" element={<Status />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/integrations" element={<Integrations />} />
        </Route>

        <Route element={<DocsLayout />}>
          <Route path="/docs" element={<Documentation />} />
          <Route path="/help" element={<HelpCenter />} />
        </Route>

        <Route element={<MinimalLayout />}>
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/about" element={<About />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
