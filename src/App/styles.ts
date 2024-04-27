import BgPhoto from '../images/siteBg2.jpg'
export default function styles() {
  return {
    app: {
      height: "100%",
      color: '#fff',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      background: 'white',
      overflow: 'auto',
      // backgroundImage: `url(${BgPhoto})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      zIndex: -1,
    },
  };
}
