import { Box, Flex, Text, Icon, Image } from "@chakra-ui/react";
import * as React from "react";
import { Layout } from "../components/layout";
import { Project } from "../components/project";
import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";
import { MdEmail } from "react-icons/md";

type Projects = {
  title: string;
  type: string;
  description: string;
  link?: string;
}[];

const projects: Projects = [
  {
    title: "StudentBase",
    type: "Side project turned startup",
    description:
      "An online crowdsourcing platform for high school study resources. The platform is used by 10,000+ monthly users.",
    link: "https://studentbase.app",
  },
  {
    title: "OOCAM Mobile App",
    type: "Built at a startup",
    description:
      "A mobile app built with React Native and Typescript that connects to the OOCAM underwater camera and lets users do cool things.",
    link: "https://apps.apple.com/sg/app/open-ocean-camera/id1529380457",
  },
  {
    title: "Codesplash",
    type: "Side project",
    description:
      "A browser IDE for python. Each coding session spawns a new Docker instance where the user's code is transmitted to and evaluated with the help of websockets. I also coded a purely functional folder tree in React for this. I have taken it down from production due to lack of development.",
  },
  {
    title: "Codespace",
    type: "Hackathon project",
    description:
      "'Twitch for coders'. A platform where users can code in the browser and stream their code and webcam live to viewers who can interact with the code and fork it, Also built a hacky live chat lol (spent 24 hours on this project).",
    link: "https://devpost.com/software/codespace-tjg3wd",
  },
];

const IndexPage = () => {
  return (
    <Layout title="About Me">
      <Box mt={4}>
        <Image src="/ME.jpeg" w={24} h={24} borderRadius="50%" mb={4} />
        <Text fontSize="2xl" fontWeight="bold">
          Hi 👋 I'm Ahsan.
        </Text>
        <Text>
          I'm currently in my senior year at the{" "}
          <a href="https://hku.hk/">
            <span style={{ fontWeight: "bold", color: "#3182CE" }}>
              University of Hong Kong
            </span>
          </a>
          , majoring in computer science. Previously, I have built stuff at{" "}
          <a href="https://www.macquarie.com/">
          <span style={{ fontWeight: "bold", color: "#3182CE" }}>
            Macquarie Bank
          </span></a>{" "}
          and{" "}
          <a href="https://goldmansachs.com">
            <span style={{ fontWeight: "bold", color: "#3182CE" }}>
              Goldman Sachs
            </span>
          </a>{" "}
          as an intern. Currently, I am doing a final year project on
          blockchains, and building{" "}
          <a href="https://practice.studentbase.app">
            <span style={{ fontWeight: "bold", color: "#3182CE" }}>
              StudentBase
            </span>
          </a>
          .
        </Text>
        <Flex mt={4}>
            <a
              href="https://www.linkedin.com/in/ahsan-syed-930a2014a/"
              style={{ marginRight: "8px" }}
            >
              <Icon as={SiLinkedin} w={6} h={6} />
            </a>
            <a
              href="https://twitter.com/ahsannhere"
              style={{ marginRight: "8px" }}
            >
              <Icon as={SiTwitter} w={6} h={6} />
            </a>
            <a
              href="https://github.com/ahsan8244"
              style={{ marginRight: "8px" }}
            >
              <Icon as={SiGithub} w={6} h={6} />
            </a>
            <a
              href="mailto:syed.ahsan8244@gmail.com"
              style={{ marginRight: "8px" }}
            >
              <Icon as={MdEmail} w={6} h={6} />
            </a>
            <a href="https://drive.google.com/file/d/1hvNOa3hPyJ7HiSWZvBtrT1QEYHXw2GQi/view?usp=sharing" style={{ color: "#3182CE", textDecoration: "underline" }}>Resume</a>
        </Flex>
        <Text fontSize="2xl" fontWeight="bold" mt={8}>
          Some of my work
        </Text>
        {projects.map((project) => (
          <Project
            title={project.title}
            type={project.type}
            description={project.description}
            link={project.link}
          />
        ))}
      </Box>
    </Layout>
  );
};

export default IndexPage;
