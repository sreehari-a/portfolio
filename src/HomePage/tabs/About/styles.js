export default function styles() {
  return {
    container: {
      whiteSpace: "break-spaces",
      fontSize: "1.5rem",
      color: "#40c1d2",
      //   animation: "$typewriter 4s steps(44) 1s 1 normal both",
      "& >span": {
        animationDuration: "0.8s",
        animationName: "$fade-in",
        animationTimingFunction: "cubic-bezier(0.11, 0, 0.5, 0)",
        animationIterationCount: 1,
        animationDirection: "normal",
        animationFillMode: "forwards",
        animationPlayState: "running",
        opacity: 0,
        filter: "blur(4px)",
      },
    },
    "@keyframes typewriter": {
      "0%": { width: "0%" },
      "100%": { width: "100%" },
    },
    "@keyframes fade-in": {
      "100%": {
        opacity: 1,
        filter: "blur(0)",
      },
    },
  };
}
