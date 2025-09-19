// stagger Translate Y animations

export const parentTranslateY = {
  initial: {},
  final: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

export const childTranslateY = {
  initial: { y: 30, opacity: 0 },
  final: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut" as const,
    },
  },
};

// Fade Animations

export const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};
export const fadeDown = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};
export const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};
export const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

// Stagger Opcity Animations

export const parentOpacity = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.24,
    },
  },
};

export const childOpacity = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut" as const,
    },
  },
};

export const imageAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 30,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
      delay: 0.2,
    },
  },
};
