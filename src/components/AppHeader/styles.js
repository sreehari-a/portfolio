export default function styles() {
  return {
    appHeader: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      height: '4.5rem',
      // background: '#38575a',
      position: 'relative',
      background: 'transparent',
      color: 'white',
      '& >span': {
        margin: 'auto',
        fontSize: '30px',
        animationDuration: '2s',
        animationIterationCount: '1',
        transformOrigin: 'bottom',
        '&:hover': {
          animationName: '$bounce',
          animationTimingFunction: 'ease',
        },
      },
      borderBottom: '.5rem solid #40c1d2'
    },
    '@keyframes bounce': {
      '0%': { scale: 0.5 },
      '50%': { scale: 1 },
      '100%': { scale: 1 },
    },
    links: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      position: 'absolute',
      right: '0',
      marginRight: '0.625rem',
      '& a': {
        color: '#fff',
        fontSize: '1rem',
        padding: '0.825rem',
      }
    },
  };
}
