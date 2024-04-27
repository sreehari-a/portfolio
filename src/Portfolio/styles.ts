import ProfilePhoto from "../images/profile-photo1.jpg";

export const breakPoints = {
  sm: "480px",
  md: "768px"
}
export default function styles() {
  return {
    container: {
      height: "100%",
      overflowY: "auto",
      width: "100%",
      scrollBehavior: "smooth",
    },
    header: {
      height: "3rem",
      width: "100%",
      position: "fixed",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      zIndex: 10,
    },
    home: {
      // background: "#1616ab",
      // background: "linear-gradient(135deg, #0f36a5, #0f36a5 75%, #2c7dfa 100%)",
      // background: "linear-gradient(135deg, #2a2b2d, #191b23 75%, #02050a 100%)",
      display: "flex",
      alignItems: "center",
      flexDirection: "row-reverse",
      justifyContent: "space-evenly",
      [`@media (max-width: ${breakPoints.sm})`]: {
        flexDirection: "column",
      },
      height: "100%"
    },
    proPic: {
      height: "25rem",
      width: "auto",
      [`@media (max-width: ${breakPoints.md})`]: {
        height: "20rem",
      },
      [`@media (max-width: ${breakPoints.sm})`]: {
        height: "35rem",
      },
    },
    headerLeft: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      background:
        "linear-gradient(to right, #f32170, #ff6b08, #cf23cf, #eedd44)",
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
      fontFamily: "Josefin Sans",
      paddingLeft: "1rem",
    },
    headerHide: {
      background: "transparent"
    },
    introText: {
      fontSize: "3.5rem",
      fontWeight: "bold",
      background: "-webkit-linear-gradient(135deg, #c1fb6c, #3bf2ed)",
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
      [`@media (max-width: ${breakPoints.md})`]: {
        fontSize: "3rem",
      },
    },
    contactText: {
      fontSize: "2rem",
      color: "white",
      [`@media (max-width: ${breakPoints.md})`]: {
        fontSize: "2rem",
      },
      fontWeight: "bold",
    },
    iconsContainer: {
      display: "flex",
      justifyContent: "space-evenly",
      fontSize: "2rem",
      [`@media (max-width: ${breakPoints.sm})`]: {
        fontSize: "3rem",
      },
    },
    introSection: {
      textAlign: "center",
    },
    contactTextInner: {
      whiteSpace: "nowrap",
    },
    icon: {
      color: "#c1fb6c",
      "&:hover": {
        color: "#3bf2ed"
      }
    },
    profileSection: {
      // background: "#1d1f23",
    },
    aboutSection: {
      // background: "#2a2b2d",
      padding: "100px 20px",
      flexDirection: "row",
      flexWrap: "wrap",
      gap: "20px",
      flex: 1
    },
    nav: {
      display: "flex",
      justifyContent: "center",
    },
    navLink: {
      padding: "0 8px",
      fontSize: "1rem",
      fontWeight: "bold",
      color: "white"
    },
    activeLink: {
      color: "#3bf2ed"
    },
    profileImg: {
      backgroundImage: `url(${ProfilePhoto})`,
      width: "180px",
      aspectRatio: 1,
      borderRadius: "50%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top",
      [`@media (max-width: ${breakPoints.md})`]: {
        width: "150px",
      },

      [`@media (max-width: ${breakPoints.sm})`]: {
        width: "120px",
      },
    },
    timelineItem: {
      color: "#fff",
      fontSize: "1rem"
    },
    timelineHeader: {
      fontSize: "1.5rem",
      fontWeight: "bold"
    },
    careerSection: {
      padding: "2rem"
    },
    timelineSubTitle: {
      color: "grey",
    },
    skillSectionRow: {
      width:  "100%",
    },
    skillContainer: {
      margin:  "1rem 0"
    },
    skillLabel: {
      fontWeight: "bold",
      fontSize: "1rem"
    },
    careerItem: {
      width: "90%",
      margin: "auto"
    }
  };
}
