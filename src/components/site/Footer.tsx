import { Logo } from "./Logo";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Roadmap", href: "/roadmap" },
      { label: "Status", href: "/status" },
    ],
  },
  {
    title: "Documentation",
    links: [
      { label: "Getting Started", href: "/docs" },
      { label: "Integrations", href: "/integrations" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "GitHub", href: "https://github.com/refractcode" },
      { label: "Discord", href: "https://discord.gg/dkdEbBSqf5" },
      { label: "Instagram", href: "https://www.instagram.com/refractcode?igsh=MmkwYTV6czV4bm92" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Contact", href: "/contact" },
      { label: "Bugs", href: "/contact" },
      { label: "Feature Requests", href: "/contact" },
      { label: "Security", href: "/contact" },
    ],
  },
];

const Footer = () => {
  return (
    <footer
      className="section"
      style={{
        borderTop: "1px solid var(--color-theme-border)",
        background: "var(--color-theme-bg)",
        paddingBottom: 48,
        paddingTop: 64,
      }}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid gap-10 xl:grid-cols-3 xl:gap-12">
          <div>
            <Logo height={18} />
            <p className="mt-4 text-sm" style={{ color: "var(--color-theme-text-sec)", maxWidth: 240, lineHeight: 1.6 }}>
              Transform AI-generated code into maintainable, production-ready software.
            </p>
            <p className="mt-8 text-xs" style={{ color: "var(--color-theme-text-ter)" }}>
              &copy; {new Date().getFullYear()} Refract Inc. All rights reserved.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 xl:col-span-2">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--color-theme-text)" }}>
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="inline-block text-sm transition-colors"
                        style={{ color: "var(--color-theme-text-sec)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-theme-text)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-theme-text-sec)")}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
