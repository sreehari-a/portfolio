/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { memo } from "react";
import { compose } from "redux";

import stylize from "../utils/stylize";
import { projects } from "./config";
import ProjectItem from "./projectItem";
import styles from "./styles";

type Props = {
  classes: any;
}

export function ProjectsPage({ classes }: Props) {
  return (
    <div className={classes.projectsContainer}>
      {projects.map(project => (
        <ProjectItem project={project} />
      ))}
    </div>
  )
}

export default compose(memo)(stylize(ProjectsPage, styles));
