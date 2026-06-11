import { Logo } from "./Logo";
import { AnimatedContainer } from "@/components/ui/animated-container";

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
      { label: "Changelog", href: "#" },
      { label: "Roadmap", href: "#" },
      { label: "Status", href: "#" },
    ],
  },
  {
    title: "Documentation",
    links: [
      { label: "Getting Started", href: "/docs" },
      { label: "Integrations", href: "#" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
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
      { label: "Help Center", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Bugs", href: "#" },
      { label: "Feature Requests", href: "#" },
      { label: "Security", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer
      className="relative w-full flex flex-col items-center justify-center border-t px-6 py-12 lg:py-16"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        background: "radial-gradient(35% 128px at 50% 0%, rgba(255,255,255,0.06), transparent) #0a0a0a",
      }}
    >
      {/* Glow line */}
      <div
        className="absolute left-1/2 top-0 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur"
        style={{ background: "rgba(255,255,255,0.15)" }}
      />

      <div className="grid w-full max-w-6xl gap-8 xl:grid-cols-3 xl:gap-8">
        <AnimatedContainer className="space-y-4">
          <Logo height={20} />
          <p
            className="mt-8 text-sm md:mt-0"
            style={{ color: "rgba(255,255,255,0.4)", maxWidth: 240, lineHeight: 1.6 }}
          >
            Transform AI-generated code into maintainable, production-ready software.
          </p>
          <p
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.3)", marginTop: 32 }}
          >
            &copy; {new Date().getFullYear()} Refract Inc. All rights reserved.
          </p>
        </AnimatedContainer>

        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.title} delay={0.1 + index * 0.1}>
              <div className="mb-10 md:mb-0">
                <h3
                  className="text-xs font-semibold uppercase"
                  style={{ color: "#fff", letterSpacing: "0.05em" }}
                >
                  {section.title}
                </h3>
                <ul className="mt-4 space-y-2 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center transition-all duration-300"
                        style={{ color: "inherit" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
