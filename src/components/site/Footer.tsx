import { Link } from "react-router-dom";
import { Logo } from "./Logo";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Home", href: "/" },
      { label: "Product", href: "/product" },
      { label: "Pricing", href: "/pricing" },
      { label: "Integrations", href: "/integrations" },
      { label: "Changelog", href: "/changelog" },
      { label: "Roadmap", href: "/roadmap" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Security", href: "/product#security" },
      { label: "Activity", href: "/product#activity" },
      { label: "Guidelines", href: "/product#guidelines" },
      { label: "CLI", href: "/integrations#cli" },
      { label: "MCP", href: "/integrations#mcp" },
      { label: "GitHub Action", href: "/integrations#ci" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Docs", href: "/docs" },
      { label: "Status", href: "/status" },
      { label: "Help Center", href: "/help" },
      { label: "API Reference", href: "/docs" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/about" },
      { label: "Careers", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "DPA", href: "/privacy" },
      { label: "AUP", href: "/terms" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Discord", href: "https://discord.gg/dkdEbBSqf5" },
      { label: "X (Twitter)", href: "https://x.com/devRefracta" },
      { label: "Instagram", href: "https://www.instagram.com/refractcode/" },
      { label: "GitHub", href: "https://github.com/refractcode" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-ld-neutral pb-10 pt-16">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-12">
          <Logo height={16} />
          <p className="text-body-sm mt-3 text-ld-muted">
            AI writes fast. Refract makes it shippable.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-label-sm mb-4 text-ld-on-surface">{section.title}</h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-body-sm text-ld-muted transition-colors duration-150 hover:text-ld-on-surface"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-ld-border pt-6">
          <div className="flex flex-wrap gap-4 text-caption text-ld-muted">
            <Link to="/privacy" className="hover:text-ld-on-surface">Privacy</Link>
            <Link to="/terms" className="hover:text-ld-on-surface">Terms</Link>
            <Link to="/privacy" className="hover:text-ld-on-surface">DPA</Link>
            <Link to="/terms" className="hover:text-ld-on-surface">AUP</Link>
          </div>
          <Link
            to="/status"
            className="flex items-center gap-2 text-caption text-ld-muted transition-colors hover:text-ld-on-surface"
          >
            <span className="size-2 rounded-full bg-ld-success" />
            All systems operational
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;