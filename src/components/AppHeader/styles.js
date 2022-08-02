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
        fontSize: '20px',
        animationDuration: '2s',
        animationIterationCount: 'infinite',
        transformOrigin: 'bottom',
        '&:hover': {
          animationName: '$bounce',
          animationTimingFunction: 'ease',
        },
      },
      borderBottom: '.5rem solid #40c1d2'
    },
    '@keyframes bounce': {
      '0%': { transform: 'translateY(0) scale(1)', scale: 1 },
      '50%': { transform: 'translateY(-5px) scale(2)', scale: 2 },
      '100%': { transform: 'translateY(0) scale(1)', scale: 2 },
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
