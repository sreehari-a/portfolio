import React from "react";
import { getExperience } from "../../../utils/experienceUtils";
import stylize from "../../../utils/stylize";
import styles from "./styles";
import { AppstoreOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link } from "react-router-dom";

const years = getExperience("07-08-2019");
const aboutText = `Achievement-driven professional with over ${years} years of extensive exposure in Front End
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
      <div className={props.classes.buttonContainer} style={{ animationDelay: `${0.05 * (aboutTextArray.length + 1)}s` }}>
        <Link to="/projects">
          {" "}
          <Button
            type="primary"
            shape="round"
            icon={<AppstoreOutlined />}
            size={"large"}
          >
            View Projects
          </Button>{" "}
        </Link>
      </div>
    </div>
  );
}
export default stylize(AboutTab, styles);
