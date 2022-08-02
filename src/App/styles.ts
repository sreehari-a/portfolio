import BgPhoto from '../images/siteBg2.jpg'
export default function styles() {
  return {
    app: {
      height: 'calc(100% - 5rem)',
      color: '#fff',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      // background: '#1e272e',
      overflow: 'auto',
      backgroundImage: `url(${BgPhoto})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      zIndex: -1,
    },
  };
}
