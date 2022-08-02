import React from "react";
import stylize from "../../../utils/stylize";
import styles from "./styles";
const aboutText = 
`Passionate frontend developer based in Kerala, India. This page intends to highlight my skills and to showcase some of my interesting 
experiments. Checkout Projects page to view my works.`;
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
