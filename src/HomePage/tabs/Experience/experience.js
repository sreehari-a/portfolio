import React from "react";
import stylize from "../../../utils/stylize";
import styles from "./styles";

function getPropString(prop, classes) {
  let returnValue = "";
  for (let key in prop) {
    returnValue = `${returnValue} ${key}={${prop[key]}}`;
  }
  return <span className={classes.propView}>{returnValue}</span>;
}

function ExperienceView({ experiences,classes }) {
  return experiences.map((exp) => (
    <div className={classes.componentView}>
      {(exp.children && (
        <>
          <div>{`<${exp.title}`}{getPropString(exp.props, classes)}{'>'}</div>
          <ExperienceView experiences={exp.children} classes={classes} />
          <div>{`</${exp.title}>`}</div>
        </>
      )) ||
      <div>{`<${exp.title}`}{getPropString(exp.props, classes)}{' />'}</div>}
    </div>
  ));
}
export default stylize(ExperienceView, styles);
