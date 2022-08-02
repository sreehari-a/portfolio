/*
 * MaintanencePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { memo } from "react";
import { compose } from "redux";
import stylize from "../utils/stylize";
import styles from "./styles";

type Props = {
  classes: any;
}

export function MaintanencePage({ classes }: Props) {

  return (
    <>
    <div className={classes.appBg} />
    <div className={classes.warningMessage}>
      Currently under Maintenance. Will be back soon
    </div>
    </>
  );
}

export default compose(memo)(stylize(MaintanencePage, styles));
