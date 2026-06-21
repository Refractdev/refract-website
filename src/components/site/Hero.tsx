import { motion } from "motion/react";
import { ProjectViewEmbed } from "@embed/components";
import { APP_URL } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
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

const Hero = () => {
  return (
    <section
      className="relative overflow-hidden pt-24 md:pt-28"
      style={{ background: "#000000", color: "var(--color-ink)" }}
    >
      {/* Blue atmospheric glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          height: "60%",
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, var(--color-accent-blue-glow) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-[680px]"
        >
          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-balance"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(44px, 7vw, 96px)",
              fontWeight: 400,
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              color: "var(--color-ink)",
            }}
          >
            Transform AI-generated code into production-ready software.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="mt-6"
            style={{
              fontFamily: "'Inter Tight', 'Inter', sans-serif",
              fontSize: "clamp(16px, 2.5vw, 20px)",
              fontWeight: 400,
              lineHeight: 1.5,
              color: "var(--color-body)",
              maxWidth: 560,
            }}
          >
            AST-powered analysis that finds structural issues and generates clean,
            documented pull requests. The tool we wish we had for AI code, so we built it.
          </motion.p>

          {/* CTA */}
          <motion.div variants={fadeUp} className="mt-8 flex items-center gap-3">
            <a href={APP_URL} className="btn btn--primary">
              Get Started <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* App screenshot — fades up after copy */}
      <motion.div
        initial={{ opacity: 0, y: 48 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto mt-14 max-w-[1200px] px-6 md:mt-20"
        style={{ paddingBottom: 0 }}
      >
        <div
          style={{
            background: "var(--color-surface-deep)",
            borderRadius: "12px 12px 0 0",
            overflow: "hidden",
            border: "1px solid var(--color-hairline-strong)",
            borderBottom: "none",
          }}
        >
          <div data-theme="dark">
            <ProjectViewEmbed height={560} />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
