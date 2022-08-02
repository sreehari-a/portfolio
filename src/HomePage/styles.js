import ProfilePhoto from "../images/profile-photo.jpg";
export default function styles() {
  return {
    container: {
      color: "#fff",
      width: "100%",
      padding: ".625rem",
    },
    introductionHeader: {
      fontSize: "2rem",
      height: "4rem",
      width: '32.5rem',
      background: "#40c1d2",
      padding: "0.4375rem 0.625rem",
      color: "#000",
      fontWeight: "bold",
      animationDuration: '2s',
      animationName: '$openclose',
      animationTimingFunction: 'ease-in-out',
      // animation: '$openclose 5s normal 1'
    },
    content: {
      display: "flex",
      alignItems: "center",
      height: "calc(100% - 4rem)",
      flex: 1,
      gap: ".625rem",
    },
    profileImg: {
      backgroundImage: `url(${ProfilePhoto})`,
      width: "18.75rem",
      height: "18.75rem",
      borderRadius: "50%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
    introduction: {
      padding: "0",
      width: "43.75rem",
      height: "24.0625rem",
    },
    '@keyframes openclose': {
      '0%': {
        width: '2px',
      },
      '100%': {
        width: '32.5rem'
      }
    },
  };
}
