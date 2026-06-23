export const easeOut = [0.22, 1, 0.36, 1] as const;

export const heroTextTransition = {
  duration: 0.6,
  ease: easeOut,
} as const;

export const heroMockTransition = {
  duration: 0.8,
  delay: 0.15,
  ease: easeOut,
} as const;

export const sectionTransition = {
  duration: 0.5,
  ease: easeOut,
} as const;

export const navTransition = {
  duration: 0.3,
  ease: "ease" as const,
};

export const tabContentTransition = {
  duration: 0.3,
  ease: easeOut,
} as const;
