import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section
      style={{
        backgroundColor: "var(--surface-base)",
        paddingTop: 112,
        paddingBottom: 112,
        borderTop: "1px solid var(--border-subtle)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Orange radial glow — stronger than Hero */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse 55% 45% at 50% 50%, rgba(245,78,0,0.10) 0%, transparent 70%)",
        }}
      />
      {/* Subtle grid */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage: `linear-gradient(var(--border-subtle) 1px, transparent 1px), linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 60% 80% at 50% 50%, black 10%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 80% at 50% 50%, black 10%, transparent 75%)",
          opacity: 0.3,
        }}
      />

      <div
        style={{
          maxWidth: 800,
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
        }}
      >
        <h2
          className="text-display-lg animate-fade-up"
          style={{ color: "var(--text-primary)" }}
        >
          Your Lovable code is done.
          <br />
          <span className="text-gradient-orange">Refract makes sure it's ready.</span>
        </h2>

        <p
          className="animate-fade-up"
          style={{
            animationDelay: "100ms",
            marginTop: 24,
            maxWidth: 480,
            marginLeft: "auto",
            marginRight: "auto",
            fontSize: 16,
            color: "var(--text-secondary)",
            lineHeight: 1.75,
          }}
        >
          Stop shipping AI-generated tech debt. Point Refract at your repo and
          turn your vibe-coded prototype into a maintainable codebase.
        </p>

        <div
          className="animate-fade-up"
          style={{
            animationDelay: "200ms",
            marginTop: 44,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <a href="https://refract-dev.vercel.app" className="btn-primary" style={{ height: 48, fontSize: 15, padding: "0 24px" }}>
            Get Started <ArrowRight style={{ width: 15, height: 15 }} />
          </a>
        </div>

        <p
          className="animate-fade-up"
          style={{
            animationDelay: "280ms",
            marginTop: 28,
            fontSize: 13,
            color: "rgba(255,255,255,0.3)",
          }}
        >
          No credit card required · Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CTA;
