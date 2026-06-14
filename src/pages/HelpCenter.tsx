import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";

const faqs = [
  {
    q: "What is Refract?",
    a: "Refract is an AST-powered code analysis tool that finds structural issues in AI-generated code and generates clean, documented pull requests.",
  },
  {
    q: "How does the analysis work?",
    a: "Refract clones or fetches your repository, parses every file into an AST, runs 15+ detectors, and surfaces prioritized issues with before/after diffs.",
  },
  {
    q: "Is my code safe?",
    a: "Yes. Analysis is read-only and runs client-side. We never modify your repository without explicit action, and all parsing happens locally.",
  },
  {
    q: "What languages are supported?",
    a: "Refract supports TypeScript and JavaScript (.ts, .tsx, .js, .jsx) via Babel's TypeScript plugin.",
  },
  {
    q: "How do I apply changes?",
    a: "Free users can copy patches manually. Pro and Team users can generate a pull request with all accepted changes applied.",
  },
  {
    q: "Can I use Refract with monorepos?",
    a: "Yes. Refract treats the repository as a flat file system for import resolution.",
  },
  {
    q: "How long does analysis take?",
    a: "Typical repositories (under 10,000 files) complete in under 5 minutes. Incremental analysis takes under 30 seconds.",
  },
];

const HelpCenter = () => {
  return (
    <main className="page-enter" style={{ minHeight: "100vh", backgroundColor: "var(--color-theme-bg)", color: "var(--color-theme-text)" }}>
      <Navbar />

      <div className="section" style={{ paddingTop: 128, paddingBottom: 80 }}>
        <div className="mx-auto max-w-[720px] px-6">
          <p className="mb-2 font-serif italic" style={{ fontSize: 15, color: "var(--color-theme-text-sec)" }}>
            Help Center
          </p>
          <h1 className="text-balance" style={{ fontSize: "clamp(28px, 5vw, 38px)", fontWeight: 500, lineHeight: 1.15, letterSpacing: "-0.03em", color: "var(--color-theme-text)" }}>
            How can we help?
          </h1>
          <p className="mt-4" style={{ fontSize: 15, color: "var(--color-theme-text-sec)", lineHeight: 1.6, maxWidth: 560 }}>
            Find answers to common questions about Refract.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[720px] px-6 pb-24">
        <div className="flex flex-col gap-0">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="anim-fade-up rounded-md p-6"
              style={{
                background: "var(--color-theme-card)",
                border: "1px solid var(--color-theme-border)",
                animationDelay: `${i * 50}ms`,
                marginBottom: 8,
              }}
            >
              <h3 style={{ fontSize: 16, fontWeight: 500, color: "var(--color-theme-text)", marginBottom: 6 }}>
                {f.q}
              </h3>
              <p style={{ fontSize: 14, color: "var(--color-theme-text-sec)", lineHeight: 1.6 }}>
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default HelpCenter;
