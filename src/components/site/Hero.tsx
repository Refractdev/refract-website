const Hero = () => {
  return (
    <section className="pt-24 md:pt-28" style={{ background: "var(--color-theme-bg)", color: "var(--color-theme-text)" }}>
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="max-w-[680px]">
          <h1 className="anim-fade-up text-balance" style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 500, lineHeight: 1.15, letterSpacing: "-0.03em", color: "var(--color-theme-text)" }}>
            Transform AI-generated code into production-ready software.
          </h1>
          <p className="anim-fade-up mt-4" style={{ fontSize: "clamp(14px, 2.5vw, 16px)", color: "var(--color-theme-text-sec)", lineHeight: 1.5, letterSpacing: "-0.01em", maxWidth: "560px" }}>
            AST-powered analysis that finds structural issues and generates clean, documented pull requests. The tool we wish we had for AI code, so we built it.
          </p>
          <div className="anim-fade-up mt-6 flex items-center gap-3">
            <a href="https://refract-dev.vercel.app" className="btn btn--primary">
              Get Started <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-[1200px] overflow-hidden rounded-md px-6 md:mt-16" style={{ paddingBottom: 0 }}>
        <div style={{
          background: "var(--color-theme-card)",
          borderRadius: "6px",
          overflow: "hidden",
          border: "1px solid var(--color-theme-border)",
        }}>
          <img
            src="/refract home screen.png"
            alt="Refract dashboard"
            className="block h-auto w-full"
            style={{ display: "block" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
