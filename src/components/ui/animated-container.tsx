import { ComponentProps, ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

export type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>["className"];
  children: ReactNode;
  animateOnMount?: boolean;
};

export function AnimatedContainer({ className, delay = 0.1, animateOnMount, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return children;
  }

  if (animateOnMount) {
    return (
      <motion.div
        initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
        animate={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
        transition={{ delay, duration: 0.8 }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
