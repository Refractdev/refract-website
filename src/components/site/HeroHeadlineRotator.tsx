import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { easeOut } from "@/lib/motion";

const headlines = [
  "The code health system for teams and agents",
  "Make code quality self-driving",
  "Built for humans and AI agents shipping together",
];

const HeroHeadlineRotator = () => {
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % headlines.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [reducedMotion]);

  const displayIndex = reducedMotion ? 0 : index;

  return (
    <div className="relative min-h-[1.1em] max-w-[900px]">
      <AnimatePresence mode="wait">
        <motion.h1
          key={displayIndex}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.5, ease: easeOut }}
          className="text-hero text-balance"
        >
          {headlines[displayIndex]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export default HeroHeadlineRotator;
