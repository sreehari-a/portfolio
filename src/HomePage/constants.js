/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */
import ExperienceView from "./tabs/Experience/experience";
import AboutTab from './tabs/About';
import ContactTab from "./tabs/Contact";

export const CHANGE_USERNAME = "boilerplate/Home/CHANGE_USERNAME";

export const experiences = [
  {
    title: "Frontend Developer",
    props: {
      experience: "3 years",
    },
    children: [
      {
        title: "Web Developer",
        props: {
          experience: "3 years",
        },
        children: [
          {
            title: "React",
            props: {
              experience: "3 years",
            },
          },
          {
            title: "ReduxSaga",
            props: {
              experience: "3 years",
            },
          },
          {
            title: "Javascript",
            props: {
              experience: "3 years",
            },
          },
        ],
      },
    ],
  },
];

export const TabConfig = [
  {
    key: "about",
    title: "About",
    component: AboutTab,
  },
  {
    key: "experience",
    title: "Experience",
    component: ExperienceView,
    props: {
      experiences,
    },
  },
  {
    key: "contact",
    title: "Contact",
    component: ContactTab,
  },
];
