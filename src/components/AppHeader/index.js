import React from "react";
import styles from "./styles";
import stylize from "../../utils/stylize";
import { NavLink } from "react-router-dom";

const routes = [
  {
    link: "/portfolio",
    title: "Home",
  },
  {
    link: "/projects",
    title: "Projects",
  },
];

function AppHeader(props) {
  // };
  return (
    <div className={`${props.classes.appHeader}`}>
      <span>Welcome To My Page</span>
      <div className={props.classes.links}>
        {routes.map((route) => (
          <NavLink
            to={route.link}
            className={(isActive) => (isActive ? props.classes.linkActive : "")}
            activeStyle={{
              background: "#40c1d2",
              color: "black",
              transition: "background-color 1s ease-out"
             }}
          >
            {route.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
export default stylize(AppHeader, styles);
