import {
  Card as Mui_Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Divider,
} from "@mui/material";

import { IconWrapper } from "../buttons/Button";
import { openLink } from "../../utils/links";
import projectsData from "../../utils/projects.json";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { SectionTitle } from "..";

export type Type_Project = {
  name: string;
  image: string;
  description: string;
  links: { url: string; icon: string }[];
};

const projects: Type_Project[] = projectsData;

export const Card = ({ name, image, description, links }: Type_Project) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "GitHub":
        return <GitHubIcon />;
      case "OpenInNew":
        return <OpenInNewIcon />;
      default:
        return null;
    }
  };

  return (
    <Mui_Card sx={{ width: 300 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={`/assets/${image}`}
        title={`${name}`}
      />
      <CardContent sx={{ height: "180px", padding: 1 }}>
        <Box display={"flex"} justifyContent={"center"}>
          <Typography gutterBottom variant="body1" fontWeight={"bold"}>
            {name}
          </Typography>
        </Box>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <Divider />
      {links?.length ? (
        <CardActions>
          {links.map(({ url, icon }, index) => (
            <IconWrapper
              title={icon === "GitHub" ? "Open Github's repo" : "Open website"}
              key={index}
              onClick={() => openLink(url)}
            >
              {getIcon(icon)}
            </IconWrapper>
          ))}
        </CardActions>
      ) : null}
    </Mui_Card>
  );
};

export const ProjectsList = () => {
  return (
    <>
      <SectionTitle title="My projects" />
      <Box display="flex" flexWrap="wrap" justifyContent="center" gap={4}>
        {projects.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </Box>
    </>
  );
};
