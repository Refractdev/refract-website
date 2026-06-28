import { motion } from "motion/react";
import { heroMockTransition, heroTextTransition } from "@/lib/motion";
import HeroMock from "./mocks/HeroMock";
import CustomerStrip from "./CustomerStrip";
import HeroHeadlineRotator from "./HeroHeadlineRotator";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="hero-section relative overflow-hidden pt-36 pb-8 md:pt-40 md:pb-12 lg:pt-44 lg:pb-14">
      <div className="hero-content relative z-10 mx-auto max-w-[1300px] px-5 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={heroTextTransition}
        >
          <div className="mb-4 sm:mb-5">
            <HeroHeadlineRotator />
          </div>

          <p className="text-tp-desc mx-auto mt-5 max-w-[620px]">
            Runs on every push. Catches what the AI missed. Ships fixes as pull requests — with your approval.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
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
        className="hero-mock-wrap relative z-10 mx-auto mt-8 max-w-[1300px] px-5 md:px-6 md:mt-12 lg:mt-14"
      >
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

      <CustomerStrip className="relative z-10 pt-8" />
    </section>
  );
};

export default Hero;