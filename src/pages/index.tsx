import type { HeadFC, PageProps } from "gatsby";
import React, { useEffect, useState } from "react";
import { FaRegMoon as MoonIcon } from "react-icons/fa";
import {
  SiBootstrap as BootstrapIcon,
  SiCss3 as CSSIcon,
  SiGit as GitIcon,
  SiHtml5 as HTLMIcon,
  SiJavascript as JSIcon,
  SiReact as ReactIcon,
  SiSass as SassIcon,
} from "react-icons/si";
import { Footer } from "../components/footer";
import { Sections } from "../components/sections";
import { darkCard, lightCard } from "../constants/github-cards";
import { projects } from "../data/projects";
import Layout from "../layouts";
import { changeThemes, darkTheme, lightTheme } from "../styles/change-theme";

export type ChangeTheme = boolean;

const IndexPage: React.FC<PageProps> = () => {
  const [isThemeDark, setIsThemeDark] = useState<ChangeTheme>(false);

  const { Curriculum, MyProjects, Profile, Skills } = Sections;

  useEffect(() => {
    const colorMatch = window.matchMedia("(prefers-color-scheme: dark)");
    if (colorMatch.matches) {
      darkTheme();
      setIsThemeDark(true);
    }
    if (!colorMatch.matches) {
      lightTheme();
      setIsThemeDark(false);
    }
  }, []);

  return (
    <Layout>
      <button
        className="btn-theme"
        onClick={() =>
          changeThemes({ theme: isThemeDark, setTheme: setIsThemeDark })
        }
      >
        <MoonIcon />
      </button>
      <Profile />
      <Skills
        skills={[
          { techIcon: <HTLMIcon />, techName: "HTML" },
          { techIcon: <CSSIcon />, techName: "CSS" },
          { techIcon: <JSIcon />, techName: "JavaScript" },
          { techIcon: <SassIcon />, techName: "Sass" },
          { techIcon: <BootstrapIcon />, techName: "Bootstrap" },
          { techIcon: <ReactIcon />, techName: "React" },
          { techIcon: <GitIcon />, techName: "Git" },
        ]}
      />
      <Curriculum imgGithubURL={isThemeDark ? darkCard : lightCard} />
      <MyProjects projects={projects} />
      <Footer />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Portfólio</title>;
