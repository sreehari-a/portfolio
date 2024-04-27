import React from "react";
import { getExperience } from "../../../utils/experienceUtils";
import stylize from "../../../utils/stylize";
import styles from "./styles";
import { AppstoreOutlined, DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const years = getExperience("07-08-2019");
const aboutText = `I am Sreehari, I have been working as a frontend developer for ${years} years, creating web applications in  various organizations .`;
function AboutTab(props) {
  const [aboutTextArray] = React.useState(aboutText.split(" "));
  return (
    <div className={props.classes.container}>
      <div className={props.classes.aboutHeader}>About Me!</div>
      <div className={props.classes.aboutText}>
        {props.showAboutText &&
          aboutTextArray.map((word, index) => (
            <span
              style={{ animationDelay: `${0.05 * (index + 1)}s` }}
            >{`${word} `}</span>
          ))}
      </div>
      <div className={props.classes.bottomSection}>
        <div className={props.classes.address}>
          <div className={`${props.classes.aboutHeader} ${props.classes.contactHeader}`}>Contact Me</div>
          <div>Harisree,</div>
          <div>Westfort,</div>
          <div>Mavelikara P.O,</div>
          <div>Alleppey, Kerala, 690101,</div>
        </div>
        <div
          className={props.classes.buttonContainer}
          style={{ animationDelay: `${0.05 * (aboutTextArray.length + 1)}s` }}
        >
          <a href={`#projects`}>
            {" "}
            <Button
              type="primary"
              shape="round"
              icon={<AppstoreOutlined />}
              size={"large"}
              className={props.classes.button}
            >
              View Projects
            </Button>{" "}
          </a>
          <a
            href={
              "https://drive.usercontent.google.com/download?id=13Qufedur-q3w3cgO9ljyBf31DjTjGxP_&export=download"
            }
            download="Sreehari A - Resume"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              type="primary"
              shape="round"
              icon={<FontAwesomeIcon icon={faDownload} className={"anticon"} />}
              size={"large"}
              className={props.classes.button}
            >
              Resume
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default stylize(AboutTab, styles);
