/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import HomePage from "../HomePage/Loadable";

// import GlobalStyle from '../../global-styles';
import styles from "./styles";
import stylize from "../utils/stylize";
import MaintenancePage from "../MaintenancePage/Loadable";
import AppHeader from "../components/AppHeader";
import ProjectsPage from "../ProjectsPage/Loadable";

type Props = {
  classes: any;
};

export function App(props: Props) {
  return (
    <div className="app-root">
      <BrowserRouter>
        <AppHeader />
        <div className={props.classes.app}>
          <Switch>
            <Route exact path="/portfolio" component={HomePage} />
            <Route exact path="/projects" component={ProjectsPage} />
            <Route path="/" component={MaintenancePage} />
          </Switch>
          {/* <GlobalStyle /> */}
        </div>
      </BrowserRouter>
    </div>
  );
}
export default stylize(App, styles);
