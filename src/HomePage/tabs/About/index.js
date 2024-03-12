import React from "react";
import stylize from "../../../utils/stylize";
import styles from "./styles";
const years = Math.round(((new Date().getTime() - new Date("07-08-2019").getTime())/31536000000) * 10) / 10;
const aboutText = 
`Achievement-driven professional with over ${years} years of extensive exposure in Front End
Development specializing in React JS and associated technologies within the IT sector.`;
function AboutTab(props) {
  const [aboutTextArray] = React.useState(aboutText.split(" "));
  return (
    <div className={props.classes.container}>
      {aboutTextArray.map((word, index) => (
        <span
          style={{ animationDelay: `${0.05 * (index + 1)}s` }}
        >{`${word} `}</span>
      ))}
    </div>
  );
}
export default stylize(AboutTab, styles);
