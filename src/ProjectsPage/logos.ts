import ReactLogo from "../images/logos/react.jpg";
import ReduxSagaLogo from "../images/logos/redux-saga.png";
import StrapiLogo from "../images/logos/strapi.png";

const logos = {
  react: {
    image: ReactLogo,
    toolTipText: 'React JS',
    link: 'https://reactjs.org/'
  },
  "redux-saga": {
    image: ReduxSagaLogo,
    style: {
      width: '70px',
    },
    toolTipText: 'Redux Saga',
    link: 'https://redux-saga.js.org/'
  },
  strapi: {
    image: StrapiLogo,
    toolTipText: 'Strapi.io',
    link: 'https://strapi.io/',
  },
};
export default logos;
