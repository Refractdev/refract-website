import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { heroMockTransition, heroTextTransition } from "@/lib/motion";
import HeroMock from "./mocks/HeroMock";
import HeroStage from "./HeroStage";
import CustomerStrip from "./CustomerStrip";
import HeroHeadlineRotator from "./HeroHeadlineRotator";

const Hero = () => {
  return (
    <section className="hero-section pb-20 pt-32 md:pt-[128px]">
      <div className="hero-content mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={heroTextTransition}
        >
          <Link to="/product#mcp" className="hero-badge">
            New · Cursor MCP →
          </Link>

          <div className="mt-6">
            <HeroHeadlineRotator />
          </div>

          <p className="text-body-lg mt-6 max-w-[560px] text-ld-tertiary">
            Purpose-built for monitoring and improving codebases. Designed for the AI era.
          </p>
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
