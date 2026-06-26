import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { heroMockTransition, heroTextTransition } from "@/lib/motion";
import HeroMock from "./mocks/HeroMock";
import HeroStage from "./HeroStage";
import CustomerStrip from "./CustomerStrip";
import HeroHeadlineRotator from "./HeroHeadlineRotator";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="hero-section pb-20 pt-32 md:pt-[128px]">
      <div className="hero-content mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={heroTextTransition}
        >
          <div className="mt-6">
            <HeroHeadlineRotator />
          </div>

          <p className="text-body-lg mt-6 max-w-[560px] text-ld-tertiary">
            Connects to your repo. Scans every push. Finds what AI left behind — structural debt, security gaps, missing tests — and proposes fixes as diffs. You approve. Refract opens the PR.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild>
              <a href="https://refract-dev.vercel.app">Start free</a>
            </Button>
            <Button variant="secondary" asChild>
              <Link to="/product">See how it works</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={heroMockTransition}
        className="hero-mock-wrap mx-auto mt-16 max-w-[1200px] px-6 md:mt-20"
      >
        <HeroStage>
          <HeroMock />
        </HeroStage>
      </motion.div>

      <CustomerStrip className="pt-12" />
    </section>
  );
};

export default Hero;