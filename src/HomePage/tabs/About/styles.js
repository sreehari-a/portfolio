import { breakPoints } from "../../../Portfolio/styles";

export default function styles() {
  return {
    container: {
      whiteSpace: "break-spaces",
      fontSize: "16px",
      color: "#40c1d2",
      display: "grid",
      rowGap: "1rem"
    },
    buttonContainer: {
      animationDuration: "0.8s",
      animationName: "$fade-in",
      animationTimingFunction: "cubic-bezier(0.11, 0, 0.5, 0)",
      animationIterationCount: 1,
      animationDirection: "normal",
      animationFillMode: "forwards",
      animationPlayState: "running",
      opacity: 0,
      filter: "blur(4px)",
      textAlign: "center",
      "& button": {
        margin: "1rem"
      }
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
    aboutHeader: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "white",
    },
    aboutText: {
      fontSize: "16px",
      "& > span": {
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
    bottomSection: {
      display: "flex",
      flexWrap: "wrap"
    },
    contactHeader: {
      marginBottom: "4px"
    }
  };
}
