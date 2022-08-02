export default function styles() {
  return {
    warningMessage: {
      margin: 'auto',
      fontSize: '30px',
      zIndex: 1,
      paddingBottom: '12rem',
      fontFamily: 'cursive',
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
    appBg: {
      height: 'calc(100% - 5rem)',
      background: 'url(https://wallpaperaccess.com/full/2109971.png) no-repeat',
      backgroundSize: 'cover',
      color: '#fff',
      width: '100%',
      opacity: 0.5,
      position: 'absolute',
      zIndex: 1,
    },
  };
}
