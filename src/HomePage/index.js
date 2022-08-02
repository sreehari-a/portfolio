/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { memo } from "react";
import { compose } from "redux";

import { useInjectReducer } from "../utils/injectReducer";
import { useInjectSaga } from "../utils/injectSaga";
import reducer from "./reducer";
import saga from "./saga";
import stylize from "../utils/stylize";
import styles from "./styles";
import { TabConfig } from "./constants";
import TabView from "../components/Tab";
import { Col, Row } from "antd";

const key = "home";

export function HomePage({ classes }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <div className={classes.container}>
      <div className={classes.introductionHeader}>
        Hi There, it's me Sreehari
      </div>
      <div className={classes.content}>
        <Row>
          <Col sm={24} md={8}>
            <div className={classes.profileImg}></div>
          </Col>
          <Col sm={24} md={16}>
            <div className={classes.introduction}>
              <TabView config={TabConfig} />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default compose(memo)(stylize(HomePage, styles));
