import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Code2, ShieldCheck, LineChart, Terminal, Building2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Logo } from "../Logo";

const APP_URL = "https://refract-dev.vercel.app";

const featureItems = [
  {
    icon: Code2,
    title: "Pipeline",
    desc: "Detect, propose, approve, execute, test, document, deliver",
    soon: false,
  },
  {
    icon: ShieldCheck,
    title: "Security",
    desc: "Scan secrets, detect injections, audit dependencies",
    soon: false,
  },
  {
    icon: LineChart,
    title: "Analytics",
    desc: "Understand the data behind your code",
    soon: false,
  },
  {
    icon: Terminal,
    title: "MCP + CLI",
    desc: "Native MCP for Cursor, Windsurf, Claude Desktop",
    soon: false,
  },
  {
    icon: Building2,
    title: "Govern",
    desc: "Policies as code, org-wide enforcement",
    soon: true,
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Features",
    dropdown: true,
    items: featureItems,
  },
  { label: "Integrations", href: "/integrations" },
  { label: "Pricing", href: "/pricing" },
  { label: "Docs", href: "/docs" },
];

const MarketingNavbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = typeof window !== "undefined" ? window.location.pathname : "";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setFeaturesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMobile = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-[background,border-color] duration-300 ${
        scrolled || open
          ? "bg-black border-b border-[#1a1a1a]"
          : "bg-black border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[60px] max-w-[1300px] items-center justify-between px-5 md:px-6">
        <a
          href="/"
          className="rounded-sm outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ld-primary shrink-0"
        >
          <Logo height={14} variant="full" />
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            if (link.dropdown) {
              return (
                <div ref={dropdownRef} key={link.label} className="relative">
                  <button
                    onClick={() => setFeaturesOpen(!featuresOpen)}
                    className="nav-link inline-flex items-center gap-1"
                  >
                    {link.label}
                    <ChevronDown
                      className={`h-3 w-3 transition-transform duration-200 ${
                        featuresOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {featuresOpen && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -4 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -4 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-2 tp-dropdown w-[320px]"
                      >
                        {link.items.map((item) => {
                          const FeatureIcon = item.icon;
                          return (
                          <a
                            key={item.title}
                            href={`/product#${item.title.toLowerCase()}`}
                            onClick={() => setFeaturesOpen(false)}
                            className="tp-dropdown-item"
                          >
                            <div className="tp-dropdown-icon">
                              <FeatureIcon className="h-4 w-4 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <p className="tp-dropdown-title">{item.title}</p>
                                {item.soon && (
                                  <span className="tp-badge tp-badge-soon">Soon</span>
                                )}
                              </div>
                              <p className="tp-dropdown-desc">{item.desc}</p>
                            </div>
                          </a>
                        );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <a
                key={link.label}
                href={link.href!}
                className={`nav-link ${active ? "text-white" : ""}`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <Button variant="secondary" size="sm" className="hidden lg:inline-flex" asChild>
            <a href={APP_URL}>Log in</a>
          </Button>
          <Button size="sm" className="hidden lg:inline-flex" asChild>
            <a href={APP_URL}>Get Started</a>
          </Button>

          <button
            onClick={() => setOpen(!open)}
            className="flex size-9 items-center justify-center text-white transition-colors hover:text-white/70 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-[#1a1a1a] bg-black lg:hidden"
          >
            <div className="mx-auto flex max-w-[1300px] flex-col gap-1 px-5 py-5 md:px-6">
              {navLinks.map((link) => {
                if (link.dropdown) {
                  return (
                    <div key={link.label} className="flex flex-col gap-1">
                      <p className="px-3 py-2 text-sm font-medium text-[#555555] uppercase tracking-wider">
                        {link.label}
                      </p>
                      {link.items.map((item) => {
                        const FeatureIcon = item.icon;
                        return (
                        <a
                          key={item.title}
                          href={`/product#${item.title.toLowerCase()}`}
                          onClick={closeMobile}
                          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-[#828282] transition-colors hover:text-white"
                        >
                          <div className="flex h-8 w-8 items-center justify-center rounded-[6px] border border-[#1a1a1a] bg-[#1a1a1a]">
                            <FeatureIcon className="h-4 w-4 text-white" />
                          </div>
                          <div className="flex items-center gap-2">
                            {item.title}
                            {item.soon && (
                              <span className="tp-badge tp-badge-soon">Soon</span>
                            )}
                          </div>
                        </a>
                      );
                      })}
                    </div>
                  );
                }
                return (
                  <a
                    key={link.label}
                    href={link.href!}
                    onClick={closeMobile}
                    className="rounded-lg px-3 py-2.5 text-sm font-medium text-[#828282] transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                );
              })}
              <hr className="my-3 border-[#1a1a1a]" />
              <Button variant="secondary" size="sm" className="self-start px-3" asChild>
                <a href={APP_URL} onClick={closeMobile}>
                  Log in
                </a>
              </Button>
              <Button size="sm" className="self-start" asChild>
                <a href={APP_URL} onClick={closeMobile}>
                  Get Started
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default MarketingNavbar;
