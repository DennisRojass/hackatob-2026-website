export const EASE = [0.22, 1, 0.36, 1] as const;

export const DUR = {
  micro: 0.18,
  fast: 0.35,
  base: 0.55,
  slow: 0.9,
} as const;

export const RISE = 22;
export const STAGGER = 0.1;

export const AMBIENT = {
  orbit: 22,
  float: 5.5,
  glow: 9,
} as const;

export const revealVariants = {
  hidden: { opacity: 0, y: RISE },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: DUR.base, ease: EASE },
  },
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: STAGGER, delayChildren: 0.08 },
  },
};
