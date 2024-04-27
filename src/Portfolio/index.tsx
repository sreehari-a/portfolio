import { BookOutlined } from "@ant-design/icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Progress, Row, Timeline } from "antd";
import { useState } from "react";
import { memo, useEffect } from "react";
import { compose } from "redux";
import FlipCard from "../components/FlipCard";
import About from "../HomePage/tabs/About";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import useWindowDimensions from "../hooks/useWindowDimensions";
import ProPic from "../images/proPic.png";
import ProjectsPage from "../ProjectsPage";
import { projects } from "../ProjectsPage/config";
import { getExperience } from "../utils/experienceUtils";

import stylize from "../utils/stylize";
import styles from "./styles";

type Props = {
  classes: any;
};
const socials = [
  {
    icon: faGithub,
    link: "https://github.com/sreehari-a",
  },
  {
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/sreehari-a-15241116a",
  },
  {
    icon: faEnvelope,
    link: "mailto:harisreehari1457@gmail.com",
  },
  {
    icon: faTwitter,
    link: "https://twitter.com/Sreehari8",
  },
  {
    icon: faInstagram,
    link: "https://www.instagram.com/sreehari_1457",
  },
];
const years = getExperience("07-08-2019");
const aboutText = `Achievement-driven professional with over ${years} years of extensive exposure in Front End
Development specializing in React JS and associated technologies within the IT sector.`;

const CareerItems = [
  {
    location: "TKM College Of Engineering",
    designation: "Bachelor of Technology, Electrical & Electronics Engineering",
    timeFrame: "Aug 2015 -  Jul 2019",
    icon: <BookOutlined style={{ fontSize: "2rem" }} />,
  },
  {
    location: "Envestnet, Inc",
    designation: "Engineer - Product Development",
    timeFrame: "Jul 2019 -  Mar 2022",
    icon: <FontAwesomeIcon icon={faBriefcase} style={{ fontSize: "2rem" }} />,
  },
  {
    location: "Nagarro Enterprise Services Private Ltd",
    designation: "Engineer - Product Development",
    timeFrame: "Mar 2022 -  Present",
    icon: <FontAwesomeIcon icon={faBriefcase} style={{ fontSize: "2rem" }} />,
  },
];

const Skills = [
  {
    label: "React",
    rating: 80,
  },
  {
    label: "Javascript",
    rating: 80,
  },
  {
    label: "Typescript",
    rating: 80,
  },
  {
    label: "CSS",
    rating: 80,
  },
  {
    label: "Web Development",
    rating: 80,
  },
  {
    label: "HTML",
    rating: 70,
  },
  {
    label: "NextJS",
    rating: 70,
  },
];

export function Portfolio({ classes }: Props) {
  const [activeSection, setActiveSection] = useState("home");
  const { isIntersecting: aboutTabVisible, ref: aboutTabRef } =
    useIntersectionObserver({
      threshold: 0,
    });

  const { height } = useWindowDimensions();
  const { isIntersecting: homeTopVisible, ref: homeTopRef } =
    useIntersectionObserver({
      threshold: 0,
    });
  const { isIntersecting: homeBottomVisible, ref: homeBottomRef } =
    useIntersectionObserver({
      threshold: 0,
    });

  const handleScroll = () => {
    sections.map((section, i) => {
      const scrollContainer = document.getElementById("container");
      const thisSection = document.getElementById(section.id);
      const nextSection =
        sections[i + 1] && document.getElementById(sections[i + 1].id);
      const scrollPosition = scrollContainer.scrollTop;
      console.log(section.id, scrollPosition, thisSection.offsetTop);
      if (
        scrollPosition >= thisSection.offsetTop &&
        (!nextSection || scrollPosition < nextSection?.offsetTop)
      ) {
        setActiveSection(section.id);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const showHeader = !(!homeTopVisible && homeBottomVisible);
  const headerBg = (homeBottomVisible && "transparent") || "#333333";
  const headerTextClass = `${classes.headerLeft} ${
    (homeBottomVisible && classes.headerHide) || ""
  }`;

  const sections = [
    {
      id: "home",
      label: "Home",
      content: (
        <>
          <div ref={homeTopRef}></div>
          <div className={classes.home}>
            <img src={ProPic} className={classes.proPic} />
            <div className={classes.introSection}>
              <div ref={homeBottomRef}></div>
              <div className={classes.introText}>I'm Sreehari A</div>
              <div>
                <div className={classes.contactText}>
                  Frontend Developer.{" "}
                  <span className={classes.contactTextInner}>
                    Get in touch with me!
                  </span>{" "}
                </div>
                <div className={classes.iconsContainer}>
                  {socials.map((social) => (
                    <a href={social.link} target="_blank">
                      <FontAwesomeIcon
                        icon={social.icon}
                        className={classes.icon}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      ),
      background: "linear-gradient(135deg, #2a2b2d, #191b23 75%, #02050a 100%)",
    },
    {
      id: "about",
      label: "About",
      content: (
        <div className={`${classes.home} ${classes.aboutSection}`}>
          <div className={classes.profileImg}></div>
          <div ref={aboutTabRef}></div>
          <div style={{ flex: 1 }}>
            <About showAboutText={aboutTabVisible} />
          </div>
        </div>
      ),
      heightDisabled: true,
      background: "#2a2b2d",
    },
    {
      id: "projects",
      label: "Projects",
      content: (
        <div className={`${classes.home} ${classes.profileSection}`}>
          <ProjectsPage />
        </div>
      ),
      isMinHeight: true,
      background: "#1d1f23",
    },
    {
      id: "career",
      label: "Career",
      content: (
        <div className={`${classes.home} ${classes.careerSection}`}>
          <Row className={classes.skillSectionRow}>
            <Col xs={24} sm={12} lg={12}>
              <Timeline mode="left" className={classes.careerItem}>
                {CareerItems.map((item) => (
                  <Timeline.Item dot={item.icon}>
                    <div className={classes.timelineItem}>
                      <div className={classes.timelineHeader}>
                        {item.location}
                      </div>
                      <div className={classes.timelineSubTitle}>
                        <i>{item.designation}</i> <b> &#12539; </b>{" "}
                        <span>{item.timeFrame}</span>
                      </div>
                    </div>
                  </Timeline.Item>
                ))}
              </Timeline>
            </Col>
              <Col xs={24} sm={12} lg={12}>
                <div className={classes.careerItem}>
                  <div className={classes.timelineHeader}>Skills</div>
                  {Skills.map((skill) => (
                    <div className={classes.skillContainer}>
                      <span className={classes.skillLabel}>{skill.label}</span>
                      <Progress percent={skill.rating} size={"default"}  width={75} strokeWidth={20}/>
                    </div>
                  ))}
                </div>
              </Col>
          </Row>
        </div>
      ),
      isMinHeight: true,
      background: "#2a2b2d",
    },
  ];
  return (
    <div id="container" className={classes.container} onScroll={handleScroll}>
      {showHeader && (
        <div className={classes.header} style={{ background: headerBg }}>
          <span className={headerTextClass}>Sreehari A</span>
          <nav className={classes.nav}>
            {sections.map((section) => {
              const linkClass = `${classes.navLink} ${
                activeSection === section.id ? classes.activeLink : ""
              }`;
              return (
                <a className={linkClass} href={`#${section.id}`}>
                  {section.label}
                </a>
              );
            })}
          </nav>
          <div className={`${classes.headerLeft} ${classes.headerHide}`}>
            Sreehari A
          </div>
        </div>
      )}
      {sections.map((section) => {
        const style = {
          background: section.background,
          ...((!section.heightDisabled &&
            (section.isMinHeight ? { minHeight: height } : { height })) ||
            {}),
        };
        return (
          <section id={section.id} style={style}>
            {section.content}
          </section>
        );
      })}
    </div>
  );
}

export default compose(memo)(stylize(Portfolio, styles));
