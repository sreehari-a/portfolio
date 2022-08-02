import React, { memo } from "react";
import { compose } from "redux";

import stylize from "../utils/stylize";
import logos from "./logos";
import styles from "./styles";

type Props = {
  classes: any;
  project: {
    name: string;
    link: string;
    description: string;
    techStack: string[];
    cover?: string;
  };
};

export function ProjectItem({ classes, project }: Props) {
  const { name, link, description, techStack, cover } = project;
  return (
    // <Link to={{ pathname: link }}>
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className={classes.projectContainer} title={link}>
        <div
          style={{ backgroundImage: `url(${cover})` }}
          className={classes.projectBg}
        ></div>
        <div className={`malayalam ${classes.projectDetails}`}>
          <div className={classes.projectHeader}>{name}</div>
          <div className={classes.projectDesc}>{description}</div>
          <div className={classes.projectTechStack}>
            <div className={classes.techIntro}>Powered By:</div>
            {techStack.map((tech) => {
              //@ts-ignore
              const { image, style, toolTipText, link } = logos[tech];
              return (
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {
                    //@ts-ignore
                    logos[tech] && (
                      <div
                        title={toolTipText}
                        style={{ ...style, backgroundImage: `url(${image})` }}
                        className={classes.techLogo}
                      ></div>
                    )
                  }
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </a>
    // </Link>
  );
}

export default compose(memo)(stylize(ProjectItem, styles));
