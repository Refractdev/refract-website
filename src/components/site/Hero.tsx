import { motion } from "motion/react";
import { heroMockTransition, heroTextTransition } from "@/lib/motion";
import HeroMock from "./mocks/HeroMock";
import { Button } from "@/components/ui/button";

const APP_URL = "https://refract-dev.vercel.app";

const Hero = () => {
  return (
    <section className="hero-section relative overflow-hidden pt-36 pb-8 md:pt-40 md:pb-12 lg:pt-44 lg:pb-14">
      <div className="hero-content relative z-10 mx-auto max-w-[1300px] px-5 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={heroTextTransition}
          className="max-w-[720px]"
        >
          <h1 className="text-tp-heading text-balance">
            Refract turns AI generated code into production ready codebases
          </h1>

          <p className="text-tp-desc mt-5 max-w-[620px]">
            Detect, review and ship in a single pipeline.
            <br />
            The code quality layer AI coding tools don't have.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Button asChild>
              <a href={APP_URL}>Get Started</a>
            </Button>
            <Button variant="secondary" asChild>
              <a href={APP_URL}>Free plan · No credit card</a>
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
    </section>
  );
};

export default Hero;
