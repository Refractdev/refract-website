import { Button } from "@/components/ui/button";
import { Logo } from "../Logo";

const docsLinks = [
  { label: "Guides", href: "/docs" },
  { label: "Help", href: "/help" },
  { label: "MCP", href: "/product#mcp" },
  { label: "Changelog", href: "/changelog" },
];

const DocsNavbar = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-ld-border bg-ld-surface">
      <div className="mx-auto flex h-[52px] max-w-[1200px] items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <a href="/">
            <Logo height={16} />
          </a>
          <span className="text-ld-border-strong">/</span>
          <a href="/docs" className="text-label-md text-ld-on-surface">
            Documentation
          </a>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {docsLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <Button size="sm" asChild>
          <a href="https://refract-dev.vercel.app">Sign up</a>
        </Button>
      </div>
    </header>
  );
};

export default DocsNavbar;
