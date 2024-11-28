import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export type Type_Project = {
  name: string;
  image: string;
  description: string;
  links: { url: string; icon: React.ReactNode }[];
};

export const projects: Type_Project[] = [
  {
    name: "Michonne's Zombalad",
    description:
      "Coded in a simplified version of the langage LUA, in the vintage style game console, PICO-8. You are Michonne in a post-apocalyptic world and you have to eliminate all the zombies (that look a lot like Zemmour but it's open to interpretation)",
    image: "pico8.gif",
    links: [
      {
        url: "https://github.com/DelhiaGbelidji/Pico8",
        icon: <GitHubIcon />,
      },
      {
        url: "https://www.lexaloffle.com/bbs/?tid=50312",
        icon: <OpenInNewIcon />,
      },
    ],
  },
  {
    name: "Welcome to space",
    description:
      "Welcome to this data-visualisation site. You can follow the ISS path around Earth. There is also a feature APOD where you can find what picture the NASA posted according to the date you choose. I developed it during my time at Ada Tech School with two teammates (Nicolas and Clémentine).",
    image: "dataviz.gif",
    links: [
      {
        url: "https://github.com/DelhiaGbelidji/DatavizAPI",
        icon: <GitHubIcon />,
      },
      {
        url: "https://welcome-to-space-dataviz.netlify.app",
        icon: <OpenInNewIcon />,
      },
    ],
  },
  {
    name: "Turfu",
    description:
      "Turfu is a Google Chrome extension created to simplified your WEB surfing: a notepad, a bookmark and a dictionnary. Very useful if you're a student written a thesis (just an example of the many uses!).",
    image: "turfu.gif",
    links: [
      {
        url: "https://github.com/DelhiaGbelidji/projet_collectif_extension_naviateur-ada_extension",
        icon: <GitHubIcon />,
      },
    ],
  },
  {
    name: "My first portfolio",
    description:
      "This portfolio was my very first attempt at showcasing my work as a developer. Built a couple of years ago, it was a project where I explored ReactJS. While simple in design, it was a significant milestone in my journey as a developer, reflecting my eagerness to learn and grow.",
    image: "portfolio.png",
    links: [
      {
        url: "https://github.com/DelhiaGbelidji/Portfolio",
        icon: <GitHubIcon />,
      },
      {
        url: "https://delhia-gbelidji-portfolio.netlify.app",
        icon: <OpenInNewIcon />,
      },
    ],
  },
];
