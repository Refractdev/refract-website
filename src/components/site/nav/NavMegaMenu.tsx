import { useState, useRef, useEffect } from "react";

import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export interface MegaMenuColumn {
  title: string;
  links: { label: string; href: string }[];
}

interface NavMegaMenuProps {
  label: string;
  columns: MegaMenuColumn[];
  onNavigate?: () => void;
}

export const productMegaMenu: MegaMenuColumn[] = [
  {
    title: "Workflow",
    links: [
      { label: "Connect", href: "/#connect" },
      { label: "Triage", href: "/#triage" },
      { label: "Transform", href: "/#transform" },
      { label: "Review", href: "/#review" },
      { label: "Monitor", href: "/#monitor" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Pricing", href: "/pricing" },
      { label: "Security", href: "/privacy" },
      { label: "Integrations", href: "/integrations" },
      { label: "Cursor MCP", href: "/product#mcp" },
    ],
  },
];

export const resourcesMegaMenu: MegaMenuColumn[] = [
  {
    title: "Learn",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "Help Center", href: "/help" },
      { label: "Developers", href: "/docs" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Status", href: "/status" },
      { label: "Roadmap", href: "/roadmap" },
      { label: "Blog", href: "/about" },
      { label: "MCP", href: "/product#mcp" },
    ],
  },
];

const NavMegaMenu = ({ label, columns, onNavigate }: NavMegaMenuProps) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [open]);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={`nav-link inline-flex items-center gap-1 ${open ? "text-ld-on-surface" : ""}`}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
      >
        {label}
        <ChevronDown className={`size-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="nav-mega-menu absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2"
          >
            <div className="grid gap-8 px-5 py-4 sm:grid-cols-2 sm:min-w-[360px]">
              {columns.map((col) => (
                <div key={col.title}>
                  <p className="text-label-sm mb-3 text-ld-on-surface">{col.title}</p>
                  <ul className="space-y-2">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="block text-body-sm text-ld-muted transition-colors hover:text-ld-on-surface"
                          onClick={() => {
                            setOpen(false);
                            onNavigate?.();
                          }}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavMegaMenu;
