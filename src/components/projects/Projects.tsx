import { Card as Mui_Card, CardActions, CardContent, Typography, Box, Grid } from "@mui/material";

import { openLink } from "../../utils/links";
import projectsData from "../../utils/projects.json";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { SectionTitle } from "..";
import { COLORS } from "../../utils/colors";
import { CardButton } from "../buttons/Button";
import { useImagePreloader } from "../../hooks/useImagePreloader";
import { ImageWithPlaceholder } from "../common/ImageWithPlaceholder";
import { LazyComponent } from "../common/LazyComponent";
import { memo } from "react";

interface ProjectLink {
  url: string;
  icon: string;
}

export interface Project {
  name: string;
  image: string;
  imageWebp: string | null;
  description: string;
  links: ProjectLink[];
}

const projects: Project[] = projectsData;

export const ProjectCard = memo(({ name, image, imageWebp, description, links }: Project) => {
  return (
    <Mui_Card
        tabIndex={0}
      sx={{
        height: "100%",
        backgroundColor: COLORS.white,
        transition: "all 0.3s ease",
        "&:hover": { 
          backgroundColor: COLORS.cardHover,
          transform: "translateY(-4px)",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
        },
        "&:focus": {
          outline: `2px solid ${COLORS.focusOutline}`,
          outlineOffset: "2px",
          boxShadow: `0 0 0 4px ${COLORS.focusRing}`,
        },
        "&:focus:not(:focus-visible)": {
          outline: "none",
          boxShadow: "none"
        }
      }}
    >
      <Box sx={{ height: 140 }}>
        <ImageWithPlaceholder
          webpSrc={imageWebp ? `/assets/${imageWebp}` : undefined}
          src={`/assets/${image}`}
          alt={name}
          width="100%"
          height="100%"
          objectFit="cover"
        />
      </Box>
      <CardContent sx={{ height: 170, padding: 1, color: COLORS.text }}>
        <Box display="flex" justifyContent="center">
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        {links.map((link, index) => (
          <CardButton
            sx={{
              "&:focus": {
                outline: `2px solid ${COLORS.focusOutline}`,
                outlineOffset: "2px",
                boxShadow: `0 0 0 4px ${COLORS.focusRing}`,
              },
              "&:focus:not(:focus-visible)": {
                outline: "none",
                boxShadow: "none"
              }
            }}
            key={index}
            onClick={() => openLink(link.url)}
            startIcon={link.icon === "GitHub" ? <GitHubIcon /> : <OpenInNewIcon />}
            aria-label={link.icon === "GitHub" ? "Open repo" : "See the project"}
          >
            {link.icon === "GitHub" ? "Open repo" : "See the project"}
          </CardButton>
        ))}
      </CardActions>
    </Mui_Card>
  );
});

ProjectCard.displayName = "ProjectCard";

export const Projects = memo(() => {
  // Preload only visible images
const visibleProjects = projects.slice(0, 3); // Load first 3 projects immediately
const imagesToPreload = visibleProjects
    .map((project) => [
      project.imageWebp ? `/assets/${project.imageWebp}` : null,
      `/assets/${project.image}`,
    ])
    .flat()
    .filter(Boolean) as string[];

  useImagePreloader(imagesToPreload);

  return (
    <section id="my-projects" aria-label="My Projects Section" role="region">
      <SectionTitle title="My projects" />
      <Grid 
        container 
        spacing={3} 
        sx={{ justifyContent: "center", alignItems: "center" }}
        role="list"
        aria-label="Projects grid"
      >
        {projects.map((project, index) => (
          <Grid 
            item 
            key={index} 
            xs={12} 
            sm={6} 
            md={4}
            role="listitem"
            aria-label={`Project: ${project.name}`}
          >
            <Box display="flex" justifyContent="center">
              <LazyComponent threshold={0.1} rootMargin="100px">
                <ProjectCard {...project} />
              </LazyComponent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </section>
  );
});
