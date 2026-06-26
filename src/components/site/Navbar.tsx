import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

const navLinks = [
  { label: "Product", href: "/product" },
  { label: "Pricing", href: "/pricing" },
  { label: "Integrations", href: "/integrations" },
  { label: "Docs", href: "/docs" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-ld-border bg-ld-surface">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        <a href="/">
          <Logo height={16} />
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="tertiary" size="sm" className="hidden lg:inline-flex" asChild>
            <a href="https://refract-dev.vercel.app">Log in</a>
          </Button>
          <Button size="sm" className="hidden lg:inline-flex" asChild>
            <a href="https://refract-dev.vercel.app">Start free</a>
          </Button>

          <button
            onClick={() => setOpen(!open)}
            className="flex items-center justify-center text-ld-on-surface lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
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
            <div className="flex flex-col gap-3 px-6 py-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="nav-link text-label-md"
                >
                  {link.label}
                </a>
              ))}
              <hr className="border-ld-border" />
              <Button variant="tertiary" size="sm" className="self-start" asChild>
                <a href="https://refract-dev.vercel.app" onClick={() => setOpen(false)}>
                  Log in
                </a>
              </Button>
              <Button size="sm" className="self-start" asChild>
                <a href="https://refract-dev.vercel.app" onClick={() => setOpen(false)}>
                  Start free
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;