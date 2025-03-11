import {
  Card as Mui_Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Divider,
  Grid2,
} from "@mui/material";

import { openLink } from "../../utils/links";
import projectsData from "../../utils/projects.json";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { SectionTitle } from "..";
import { COLORS } from "../../utils/colors";
import { CardButton } from "../buttons/Button";

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
    <Mui_Card
      sx={{
        minWidth: 300,
        maxWidth: 300,
        transition: "0.3s",
        "&:hover": { backgroundColor: COLORS.cardHover },
      }}
    >
      <CardMedia sx={{ height: 140 }} image={`/assets/${image}`} title={name} />
      <CardContent sx={{ height: 170, padding: 1, color: COLORS.text }}>
        <Box display={"flex"} justifyContent={"center"}>
          <Typography gutterBottom variant="body1" fontWeight={"bold"}>
            {name}
          </Typography>
        </Box>
        <Box>
          <Typography variant="caption" lineHeight={0}>
            {description}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      {links?.length ? (
        <CardActions sx={{ paddingX: 2 }}>
          {links.map(({ url, icon }, index) => (
            <CardButton
              key={index}
              onClick={() => openLink(url)}
              startIcon={getIcon(icon)}
              aria-label={icon === "GitHub" ? "Open repo" : "See the project"}
            >
              {icon === "GitHub" ? "Open repo" : "See the project"}
            </CardButton>
          ))}
        </CardActions>
      ) : null}
    </Mui_Card>
  );
};

export const ProjectsList = () => {
  return (
    <section id="my-projects">
      <SectionTitle title="My projects" />
      <Grid2
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent="center"
        alignItems="center"
      >
        {projects.map((project, index) => (
          <Grid2 key={index} display="flex" justifyContent="center">
            <Card {...project} />
          </Grid2>
        ))}
      </Grid2>
    </section>
  );
};
