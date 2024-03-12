import ReactLogo from "../images/logos/react.jpg";
import ReduxSagaLogo from "../images/logos/redux-saga.png";
import StrapiLogo from "../images/logos/strapi.png";
import MeanstackLogo from '../images/logos/MEANstack.png';
import MernstackLogo from '../images/logos/MERNstack.png';
import JavaLogo from '../images/logos/java-logo.svg';

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
  mean: {
    image: MeanstackLogo,
    style: {
      width: '100px',
    },
    toolTipText: 'MEAN Stack Developement is a full stack developement model',
    link: 'https://www.mongodb.com/mean-stack',
  },
  mern: {
    image: MernstackLogo,
    style: {
      width: '99px',
    },
    toolTipText: 'MERN Stack Developement is a full stack developement model',
    link: 'https://www.mongodb.com/mern-stack',
  },
  java: {
    image: JavaLogo,
    toolTipText: 'Java',
    link: 'https://www.java.com/en/',
  }
};
export default logos;
