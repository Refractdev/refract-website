import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { APP_URL } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const CTA = () => {
  return (
    <section
      style={{
        background: "#000000",
        paddingTop: 112,
        paddingBottom: 112,
        borderTop: "1px solid var(--color-hairline)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Orange atmospheric glow — breathing pulse */}
      <motion.div
        aria-hidden
        animate={{ opacity: [1, 0.45, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          height: "70%",
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse 60% 55% at 50% 0%, var(--color-accent-orange-glow) 0%, transparent 70%)",
        }}
      />

      {/* Subtle hairline grid overlay */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage: `linear-gradient(var(--color-hairline) 1px, transparent 1px), linear-gradient(90deg, var(--color-hairline) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 60% 80% at 50% 50%, black 10%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 80% at 50% 50%, black 10%, transparent 75%)",
          opacity: 0.4,
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
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Headline */}
          <motion.h2
            variants={fadeUp}
            className="text-balance"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(36px, 6vw, 76px)",
              fontWeight: 400,
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              color: "var(--color-ink)",
            }}
          >
            Your Lovable code is done.
            <br />
            <span style={{ color: "var(--color-accent-orange)" }}>
              Refract makes sure it's ready.
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            style={{
              marginTop: 28,
              maxWidth: 480,
              marginLeft: "auto",
              marginRight: "auto",
              fontFamily: "'Inter Tight', 'Inter', sans-serif",
              fontSize: 18,
              fontWeight: 400,
              color: "var(--color-body)",
              lineHeight: 1.6,
            }}
          >
            Stop shipping AI-generated tech debt. Point Refract at your repo and
            turn your vibe-coded prototype into a maintainable codebase.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            variants={fadeUp}
            style={{
              marginTop: 44,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <a
              href={APP_URL}
              className="btn btn--primary"
              style={{ height: 44, fontSize: 15, padding: "0 24px" }}
            >
              Get Started <ArrowRight style={{ width: 15, height: 15 }} />
            </a>
          </motion.div>

          {/* Fine print */}
          <motion.p
            variants={fadeUp}
            style={{
              marginTop: 24,
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              color: "var(--color-stone)",
            }}
          >
            No credit card required · Cancel anytime
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
