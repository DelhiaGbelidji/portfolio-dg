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
    name: "READ-it",
    description:
      "READ-IT is the ideal fusion of technology and the publishing world. It introduces a new approach to how we think about publishing and producing books. I used Next.js for the frontend part and Nest.js, Prisma and SQLite for the backend part and the database management.",
    image: "profile.jpeg",
    links: [],
  },
  {
    name: "Welcome to space",
    description:
      "Dataviz | It's a responsive website that provides informations about space using different APIs. I developed it during my time at Ada Tech School with two teammates (Nicolas and Clémentine).",
    image: "profile.jpeg",
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
];
