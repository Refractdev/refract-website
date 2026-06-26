import { motion } from "motion/react";

const HeroHeadlineRotator = () => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-hero text-balance"
    >
      Refract turns AI-generated code into production-ready codebases.
    </motion.h1>
  );
};

export default HeroHeadlineRotator;