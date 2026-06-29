import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Code2, ShieldCheck, LineChart, Terminal, Building2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
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
  { label: "Pricing", href: "/pricing" },
  { label: "Docs", href: "/docs" },
];

const MarketingNavbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

  const closeMobile = () => setOpen(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full xl:bg-transparent">
      <div
        className={`pointer-events-none absolute left-1/2 top-1/2 z-0 h-[48px] w-full -translate-x-1/2 -translate-y-1/2 rounded-xl border bg-black transition-all duration-600 ${
          scrolled || open
            ? "border-white/10"
            : "border-white/0"
        }`}
      />
      <div className="relative z-10 mx-auto flex h-[60px] max-w-[1300px] items-center justify-between px-5 md:px-6">
        <a
          href="/"
          className="shrink-0 transition-opacity active:opacity-80"
        >
          <Logo height={18} variant="full" />
        </a>

        <div className="absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 gap-5 text-[13.5px] lg:flex">
          {navLinks.map((link) => {
            if (link.dropdown) {
              return (
                <div key={link.label} className="group relative">
                  <button className="inline-flex cursor-pointer items-center gap-[2px] font-medium text-[#828282] transition-colors hover:text-white active:text-white/85">
                    {link.label}
                    <ChevronDown className="h-3 w-3 transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                  <div className="pointer-events-none absolute top-full left-0 mt-2 z-50 tp-dropdown opacity-0 transition-opacity duration-150 group-hover:pointer-events-auto group-hover:opacity-100">
                    {link.items.map((item) => {
                      const FeatureIcon = item.icon;
                      return (
                        <a
                          key={item.title}
                          href={`/product#${item.title.toLowerCase()}`}
                          className="tp-dropdown-item"
                        >
                          <div className="tp-dropdown-icon">
                            <FeatureIcon className="h-4 w-4 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <p className="tp-dropdown-title">{item.title}</p>
                              {item.soon && (
                                <span className="ml-auto inline-flex items-center rounded-full border border-[#2a2b2e] bg-[#101112] px-2 py-0.5 text-[10px] font-medium tracking-[-0.01em] text-white">Soon</span>
                              )}
                            </div>
                            <p className="tp-dropdown-desc">{item.desc}</p>
                          </div>
                        </a>
                      );
                    })}
                  </div>
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
                className={`font-medium transition-colors ${
                  active ? "text-white" : "text-[#828282] hover:text-white active:text-white/85"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="relative z-10 flex items-center gap-2">
          <a
            className="rounded-md bg-[#1a1a1a] px-2 py-1 text-[11px] font-semibold text-white transition-colors hover:bg-[#141414] hover:text-[#d4d4d4] active:bg-[#101010] active:text-[#c4c4c4] md:px-2.5 md:py-1.5 md:text-xs"
            href={APP_URL}
          >
            Log in
          </a>
          <a
            className="rounded-md bg-white px-2 py-1 text-[11px] font-semibold text-black transition-colors hover:bg-gray-200 active:bg-gray-300 md:px-2.5 md:py-1.5 md:text-xs"
            href={APP_URL}
          >
            Get started
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="flex h-11 min-h-[44px] min-w-[44px] shrink-0 items-center justify-end transition-opacity active:opacity-70 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
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
              <a
                className="self-start rounded-md bg-[#1a1a1a] px-3 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-[#141414]"
                href={APP_URL}
                onClick={closeMobile}
              >
                Log in
              </a>
              <a
                className="self-start rounded-md bg-white px-3 py-2 text-[13px] font-semibold text-black transition-colors hover:bg-gray-200"
                href={APP_URL}
                onClick={closeMobile}
              >
                Get started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default MarketingNavbar;
