export const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const scaleHover = {
  whileHover: { scale: 1.02 },
  transition: { duration: 0.4, ease: "easeOut" },
};
