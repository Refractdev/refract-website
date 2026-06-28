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
    <footer className="bg-black pt-16 pb-14 md:pt-11 md:pb-10">
      <div className="mx-auto max-w-[1300px] px-5 md:px-6">
        <div className="mb-12">
          <Logo height={16} />
          <p className="text-body-sm mt-3 text-[#888888]">
            AI writes fast. Refract makes it shippable.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-6 lg:gap-x-1.5">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="tp-footer-heading">{section.title}</h3>
              <ul className="flex flex-col gap-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="tp-footer-link"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="tp-divider my-8 md:my-10" />

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <a
              href="https://discord.gg/dkdEbBSqf5"
              target="_blank"
              rel="noopener noreferrer"
              className="tp-social-icon"
              aria-label="Discord"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 5.5c-3.5 0-6 2.5-6 6 0 3.5 2.5 6 6 6H7" />
                <path d="M15 5.5c3.5 0 6 2.5 6 6 0 3.5-2.5 6-6 6h7" />
                <path d="M8 15c0 1.5 1 2 2 2h4c1 0 2-.5 2-2" />
                <path d="M9 11.5c0 1 2 1 3 1s3 0 3-1" />
              </svg>
            </a>
            <a
              href="https://x.com/devRefracta"
              target="_blank"
              rel="noopener noreferrer"
              className="tp-social-icon"
              aria-label="X (Twitter)"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46L20 4" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/refractcode/"
              target="_blank"
              rel="noopener noreferrer"
              className="tp-social-icon"
              aria-label="Instagram"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href="https://github.com/refractcode"
              target="_blank"
              rel="noopener noreferrer"
              className="tp-social-icon"
              aria-label="GitHub"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
          </div>

          <div className="text-[13px] text-[#888888]">
            &copy; {new Date().getFullYear()} Refract. All rights reserved.
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 text-[11px] text-[#555555] leading-relaxed">
          <p>
            <strong className="text-[#777777] font-medium">Risk Disclosure:</strong> Refract provides code analysis tools and does not guarantee bug-free code. Always review proposed changes before merging.
          </p>
          <p>
            <strong className="text-[#777777] font-medium">Hypothetical Performance Disclosure:</strong> All examples and demonstrations shown are for illustrative purposes only. Actual results may vary based on your codebase, team size, and usage patterns.
          </p>
          <p>
            <strong className="text-[#777777] font-medium">Testimonials Disclosure:</strong> Testimonials appearing on this site may not be representative of all customers and do not guarantee future performance or results.
          </p>
        </div>

        <div className="tp-divider my-6" />

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-4 text-[13px] text-[#888888]">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">DPA</Link>
            <Link to="/terms" className="hover:text-white transition-colors">AUP</Link>
          </div>
          <Link
            to="/status"
            className="tp-status hover:text-white transition-colors"
          >
            <span className="tp-status__dot" />
            All systems operational
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;