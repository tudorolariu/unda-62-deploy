export const fadeIn = (
  direction: "up" | "down" | "left" | "right",
  delay: number
) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    },
    shown: {
      y: 0,
      x: 0,
      opacity: 1,
      translation: {
        type: "tween",
        duration: 5000,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
