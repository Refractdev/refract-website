import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Logo } from "../Logo";
import NavMegaMenu, { productMegaMenu, resourcesMegaMenu } from "./NavMegaMenu";

const APP_URL = "https://refract-dev.vercel.app";

const flatNavLinks = [
  { label: "Customers", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Now", href: "/changelog" },
  { label: "Contact", href: "/contact" },
  { label: "Docs", href: "/docs" },
];

const MarketingNavbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) {
      setMobileProductOpen(false);
      setMobileResourcesOpen(false);
    }
  }, [open]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const closeMobile = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-[background,border-color] duration-300 ${
        scrolled || open ? "nav-scrolled" : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[52px] max-w-[1200px] items-center justify-between px-6">
        <Link
          to="/"
          className="rounded-sm outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ld-primary"
        >
          <Logo height={16} variant="icon" />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          <NavMegaMenu label="Product" columns={productMegaMenu} />
          <NavMegaMenu label="Resources" columns={resourcesMegaMenu} />
          {flatNavLinks.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.label}
                to={link.href}
                className={`nav-link ${active ? "text-ld-on-surface" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 lg:gap-4">
          <Button variant="tertiary" size="sm" className="hidden lg:inline-flex" asChild>
            <a href={APP_URL}>Open app</a>
          </Button>
          <Button variant="tertiary" size="sm" className="hidden lg:inline-flex" asChild>
            <a href="/login">Log in</a>
          </Button>
          <Button size="sm" className="hidden lg:inline-flex" asChild>
            <a href={APP_URL}>Sign up</a>
          </Button>

          <button
            onClick={() => setOpen(!open)}
            className="flex size-9 items-center justify-center text-ld-on-surface transition-colors hover:text-ld-secondary lg:hidden"
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
            className="overflow-hidden border-t border-ld-border bg-ld-surface lg:hidden"
          >
            <div className="mx-auto flex max-w-[1200px] flex-col gap-1 px-6 py-5">
              <MobileAccordion
                label="Product"
                open={mobileProductOpen}
                onToggle={() => setMobileProductOpen((v) => !v)}
                columns={productMegaMenu}
                onNavigate={closeMobile}
              />
              <MobileAccordion
                label="Resources"
                open={mobileResourcesOpen}
                onToggle={() => setMobileResourcesOpen((v) => !v)}
                columns={resourcesMegaMenu}
                onNavigate={closeMobile}
              />
              {flatNavLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={closeMobile}
                  className="rounded-sm px-3 py-2.5 text-label-md text-ld-tertiary transition-colors hover:text-ld-on-surface"
                >
                  {link.label}
                </Link>
              ))}
              <hr className="my-3 border-ld-border" />
              <Button variant="tertiary" size="sm" className="self-start px-3" asChild>
                <a href={APP_URL} onClick={closeMobile}>
                  Open app
                </a>
              </Button>
              <Button variant="tertiary" size="sm" className="self-start px-3" asChild>
                <a href="/login" onClick={closeMobile}>
                  Log in
                </a>
              </Button>
              <Button size="sm" className="self-start" asChild>
                <a href={APP_URL} onClick={closeMobile}>
                  Sign up
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

function MobileAccordion({
  label,
  open,
  onToggle,
  columns,
  onNavigate,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  columns: { title: string; links: { label: string; href: string }[] }[];
  onNavigate: () => void;
}) {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between rounded-sm px-3 py-2.5 text-label-md text-ld-tertiary transition-colors hover:text-ld-on-surface"
        aria-expanded={open}
      >
        {label}
        <ChevronDown className={`size-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="ml-3 space-y-4 border-l border-ld-border py-2 pl-4">
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-label-sm mb-2 text-ld-muted">{col.title}</p>
              {col.links.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={onNavigate}
                  className="block py-1.5 text-body-sm text-ld-tertiary hover:text-ld-on-surface"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MarketingNavbar;
