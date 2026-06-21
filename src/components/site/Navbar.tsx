import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Logo } from "./Logo";
import { APP_URL } from "@/lib/constants";

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Help Center", href: "/help" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        background: scrolled ? "rgba(0,0,0,0.75)" : "#000000",
        backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        borderBottom: `1px solid ${scrolled ? "var(--color-hairline-strong)" : "var(--color-hairline)"}`,
        transition: "background 0.4s ease, border-color 0.3s ease",
      }}
      className="fixed top-0 left-0 z-50 w-full"
    >
      <div className="mx-auto grid h-16 max-w-[1200px] grid-cols-[1fr_auto_auto] items-center px-6 lg:grid-cols-[auto_1fr_auto]">
        <a href="/">
          <Logo height={18} />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center justify-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: "var(--color-charcoal)", fontFamily: "'Inter', sans-serif" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-ink)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-charcoal)")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop auth */}
        <div className="flex items-center gap-3">
          <a
            href={APP_URL}
            className="hidden text-sm font-medium transition-colors duration-200 lg:inline-flex"
            style={{ color: "var(--color-charcoal)", fontFamily: "'Inter', sans-serif" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-ink)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-charcoal)")}
          >
            Sign in
          </a>
          <a href="/contact" className="btn btn--ghost btn-sm hidden lg:inline-flex">
            Contact
          </a>
          <a href={APP_URL} className="btn btn--primary btn-sm">
            Get Started
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center justify-center lg:hidden"
            style={{ color: "var(--color-ink)" }}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="size-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="size-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile nav — slide down */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden lg:hidden"
            style={{ background: "rgba(0,0,0,0.95)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}
          >
            <div
              className="flex flex-col gap-4 px-6 py-6"
              style={{ borderTop: "1px solid var(--color-hairline)" }}
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.05, duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="text-sm font-medium"
                  style={{ color: "var(--color-charcoal)", fontFamily: "'Inter', sans-serif" }}
                >
                  {link.label}
                </motion.a>
              ))}
              <hr style={{ borderColor: "var(--color-hairline)" }} />
              <motion.a
                href={APP_URL}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="text-sm font-medium"
                style={{ color: "var(--color-charcoal)", fontFamily: "'Inter', sans-serif" }}
              >
                Sign in
              </motion.a>
              <motion.a
                href={APP_URL}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25, duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="btn btn--primary btn-sm self-start"
              >
                Get Started
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
