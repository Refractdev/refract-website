import { motion } from "motion/react";
import { heroMockTransition, heroTextTransition } from "@/lib/motion";
import HeroMock from "./mocks/HeroMock";
import CustomerStrip from "./CustomerStrip";
import HeroHeadlineRotator from "./HeroHeadlineRotator";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="hero-section relative overflow-hidden pb-20 pt-28 md:pt-36">
      {/* Resend accent-blue atmospheric glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-96"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(0,117,255,0.18), transparent 70%)",
        }}
        aria-hidden
      />

      <div className="hero-content relative z-10 mx-auto max-w-[1200px] px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={heroTextTransition}
        >
          <div className="mb-6">
            <HeroHeadlineRotator />
          </div>

          <p className="text-body-lg mx-auto mt-6 max-w-[620px] text-ld-tertiary">
            Runs on every push. Catches what the AI missed. Ships fixes as pull requests — with your approval.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild>
              <a href="https://refract-dev.vercel.app">Start for free</a>
            </Button>
            <Button variant="secondary" asChild>
              <a href="https://refract-dev.vercel.app">Free plan · No credit card</a>
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={heroMockTransition}
        className="hero-mock-wrap relative z-10 mx-auto mt-16 max-w-[1200px] px-6 md:mt-20"
      >
        {/* Resend code-window frame */}
        <div className="tp-frame">
          <div className="tp-frame__bar">
            <div className="tp-frame__dots">
              <span className="tp-frame__dot" />
              <span className="tp-frame__dot" />
              <span className="tp-frame__dot" />
            </div>
          </div>
          <HeroMock />
        </div>
      </motion.div>

      <CustomerStrip className="relative z-10 pt-16" />
    </section>
  );
};

export default Hero;