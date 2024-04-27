export default function styles() {
  return {
    flipCard: {
      backgroundColor: "transparent",
      minHeight: "250px",
      // border: "1px solid #f1f1f1",
      perspective: "1000px" /* Remove this if you don't want the 3D effect */,
      "&:hover $flipCardInner": {
        transform: "rotateY(180deg)",
      },[`@media (max-width: 575px)`]: {
        minHeight: "90px",
      },
    },
    flipCardInner: {
      position: "relative",
      width: "100%",
      height: "100%",
      textAlign: "center",
      transition: "transform 0.8s",
      transformStyle: "preserve-3d",
    },
    flipCardCommon: {
      position: "absolute",
      width: "100%",
      "-webkit-backface-visibility": "hidden" /* Safari */,
      backfaceVisibility: "hidden",
      minHeight: "170px",
      padding: "10px",
    },
    flipCardFront: {
      display: "flex",
      backgroundColor: "teal",
    },
    flipCardBack: {
      backgroundColor: "teal",
      color: "white",
      transform: "rotateY(180deg)",
    },
  };
}
