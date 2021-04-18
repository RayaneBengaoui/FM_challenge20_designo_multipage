export const pageAnimation = {
  hidden: {
    scale: 1.01,
    opacity: 0,
  },
  show: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 0.7,
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
  exit: {
    opacity: 0,
    scale: 1.01,
    transition: {
      duration: 0.5,
    },
  },
};

export const titleAnim = {
  hidden: { y: 200 },
  show: {
    y: -1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

export const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { ease: "easeOut", duration: 0.75 } },
};

export const scrollReveal = {
  hidden: { opacity: 0, scale: 1.2, transition: { duration: 0.5 } },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};
