export default function styles() {
  return {
    container: {
      color: "#fff",
      width: "100%",
      padding: ".625rem",
    },
    projectsContainer: {
      width: "100%",
      height: 'fit-content',
      maxHeight: '100%',
      paddingTop: '1rem',
      margin: '1rem',
    },
    projectContainer: {
      position: "relative",
      display: 'flex',
      cursor: 'pointer',
      // background: '#fff',
      background: '#40c1d2',
      color: '#000',
      height: "100%",
      borderRadius: "8px",
      transition: ".3s ease-in-out",
      transform: "scale(1) translate3d(0,0,0) perspective(1px)",
      transformOrigin: "center",
      "&:hover": {
        transform: "translateY(-10px) scale(1) translate3d(0,0,0) perspective(1px)",
        transformOrigin: "left top",
      },
      animationDuration: '2s',
      animationName: '$animatePop',
      animationTimingFunction: 'cubic-bezier(.26, .53, .74, 1.48)',
    },
    projectBg: {
      margin: 'auto',
      backgroundSize: "cover",
      width: "150px",
    },
    projectDetails: {
      // height: "calc(100% - 200px)",
      width: "67%",
      padding: "1.5rem 0.83rem",
      textAlign: "center",
      display: 'grid',
    },
    projectHeader: {
      fontWeight: "bold",
      fontSize: "2rem",
      wordSpacing: "-7px"
    },
    projectDesc: {
      fontSize: ".92rem",
      textAlign: "start",
    },
    projectTechStack: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
    techIntro: {
      flexBasis: '100%',
      textAlign: 'initial',
      fontWeight: 'bold',
      paddingLeft: '5px',
      fontSize: '1rem',
    },
    techLogo: {
      backgroundSize: "cover",
      width: "50px",
      height: "50px",
      margin: '0 0.3rem',
    },
    
    '@keyframes animatePop': {
      '0%': {
        opacity: 0, 
        transform: 'scale(0.5, 0.5)',
      },

      '100%': {
        opacity: 1,
        transform: 'scale(1, 1)',
      },
    },
    // '@media screen and max-width: 1200px)': {
    //   $projectsContainer: { 
    //     gridTemplateColumns: 'repeat(2, 1fr)',
    //   }
    // },
    // '@media screen and max-width: 620px)': {
    //   $projectsContainer: { 
    //     gridTemplateColumns: 'repeat(1, 1fr)',
    //   }
    // }
  };
}
