import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "#" },
  { label: "Help Center", href: "/help" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{ background: "#14120b" }}
      className="fixed top-0 left-0 z-50 w-full"
    >
      <div className="mx-auto grid h-14 max-w-[1200px] grid-cols-[1fr_auto_auto] items-center px-6 lg:grid-cols-[auto_1fr_auto]">
        <a href="/">
          <Logo height={18} />
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center justify-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium tracking-tight transition-colors"
              style={{ color: "var(--color-theme-text-sec)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-theme-text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-theme-text-sec)")}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop auth */}
        <div className="flex items-center gap-3">
          <a
            href="/login"
            className="btn--quinary hidden text-sm lg:inline-flex"
            style={{ color: "var(--color-theme-text-sec)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-theme-text)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-theme-text-sec)")}
          >
            Sign in
          </a>
          <a href="/contact" className="btn btn--ghost btn-sm hidden lg:inline-flex">
            Contact
          </a>
          <a href="https://refract-dev.vercel.app" className="btn btn--primary btn-sm">
            Get Started
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center justify-center lg:hidden"
            style={{ color: "var(--color-theme-text)" }}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="border-t px-6 py-6 lg:hidden" style={{ borderColor: "var(--color-theme-border)", background: "#14120b" }}>
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium"
                style={{ color: "var(--color-theme-text-sec)" }}
              >
                {link.label}
              </a>
            ))}
            <hr style={{ borderColor: "var(--color-theme-border)" }} />
            <a
              href="/login"
              onClick={() => setOpen(false)}
              className="text-sm font-medium"
              style={{ color: "var(--color-theme-text-sec)" }}
            >
              Sign in
            </a>
            <a href="https://refract-dev.vercel.app" onClick={() => setOpen(false)} className="btn btn--primary btn-sm self-start">
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
