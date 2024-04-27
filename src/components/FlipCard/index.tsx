import React from "react";
import stylize from "../../utils/stylize";
import styles from "./styles";

const FlipCard = ({ classes, frontContent, backContent }) => {
  return (
    <div className={classes.flipCard}>
      <div className={classes.flipCardInner}>
        <div className={`${classes.flipCardCommon} ${classes.flipCardFront}`}>
         {frontContent}
        </div>
        <div className={`${classes.flipCardCommon} ${classes.flipCardBack}`}>
          {backContent}
        </div>
      </div>
    </div>
  );
};
export default stylize(FlipCard, styles);
