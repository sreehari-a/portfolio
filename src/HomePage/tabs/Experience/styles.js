export default function styles() {
  return {
    propView: {
      color: "#ffeb00",
    },
    componentView: {
      color: "#ff6a19",
      paddingLeft: "20px",
      fontSize: "1.5rem",
      animationDuration: '2s',
      animationName: '$animatePop',
      animationTimingFunction: 'cubic-bezier(.26, .53, .74, 1.48)',
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
  };
}
