import { memo, useState, useEffect } from "react";
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
  onImageLoad?: () => void;
}

const projects: Project[] = projectsData;

export const ProjectCard = memo(
  ({ name, image, imageWebp, description, links, onImageLoad }: Project) => {
    const [isLoaded, setIsLoaded] = useState(false);
    return (
      <Mui_Card
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: COLORS.white,
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.02)",
            backgroundColor: COLORS.cardHover,
          },
        }}
      >
        <Box
          sx={{
            height: 140,
            opacity: isLoaded ? 1 : 0.4,
            transition: "opacity 0.3s ease-in-out",
            transform: "translate3d(0,0,0)",
            willChange: "opacity",
          }}
        >
          <ImageWithPlaceholder
            webpSrc={imageWebp ? `/assets/${imageWebp}` : undefined}
            src={`/assets/${image}`}
            alt={name}
            width="100%"
            height="100%"
            objectFit="cover"
            onLoad={() => {
              setIsLoaded(true);
              onImageLoad?.();
            }}
            style={{
              transform: "translate3d(0,0,0)",
              willChange: "transform, opacity",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              opacity: isLoaded ? 1 : 0,
            }}
          />
        </Box>
        <CardContent sx={{ flexGrow: 1, padding: 2 }}>
          <Typography gutterBottom variant="h6" component="h3">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions sx={{ padding: 2, justifyContent: "flex-start", gap: 1 }}>
          {links.map((link) => (
            <CardButton
              key={link.url}
              onClick={() => openLink(link.url)}
              startIcon={link.icon === "GitHub" ? <GitHubIcon /> : <OpenInNewIcon />}
              aria-label={`Visit ${name} ${link.icon === "GitHub" ? "repository" : "live site"}`}
            >
              {link.icon === "GitHub" ? "GitHub" : "Live Demo"}
            </CardButton>
          ))}
        </CardActions>
      </Mui_Card>
    );
  },
);

ProjectCard.displayName = "ProjectCard";

export const Projects = memo(() => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [visibleProjects, setVisibleProjects] = useState<Project[]>(projects.slice(0, 6));

  // Preload visible images
  const imagesToPreload = visibleProjects
    .map((project) => [
      project.imageWebp ? `/assets/${project.imageWebp}` : null,
      `/assets/${project.image}`,
    ])
    .flat()
    .filter(Boolean) as string[];

  useImagePreloader(imagesToPreload);
  
  useEffect(() => {
    // Sauvegarde la position actuelle
    const scrollY = window.scrollY;
    
    // Charger tous les projets
    setVisibleProjects(projects);
    
    // Utiliser requestAnimationFrame pour une meilleure synchronisation avec le cycle de rendu
    // eslint-disable-next-line no-undef
    const frameId = requestAnimationFrame(() => {
      window.scrollTo({ top: scrollY, behavior: "instant" }); // Restaure la position
    });
    
    return () => {
      // Nettoyer l'animation frame si le composant est démonté
      // eslint-disable-next-line no-undef
      cancelAnimationFrame(frameId);
    };
  }, []);
  

  const handleImageLoad = (imagePath: string) => {
    setLoadedImages((prev) => new Set([...prev, imagePath]));
  };

  return (
    <section
      id="my-projects"
      aria-label="My Projects Section"
      role="region"
      style={{ overflowX: "hidden", overflowY: "visible" }}
    >
      <SectionTitle title="My projects" />
      <Box
        sx={{
          overflow: "hidden",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Grid
          container
          spacing={3}
          sx={{
            justifyContent: "center",
            alignItems: "stretch",
          }}
          role="list"
          aria-label="Projects grid"
        >
          {visibleProjects.map((project) => (
            <Grid
              item
              key={project.name}
              xs={12}
              sm={6}
              md={4}
              role="listitem"
              aria-label={`Project: ${project.name}`}
              sx={{
                display: "flex",
                opacity: loadedImages.has(`/assets/${project.image}`) ? 1 : 0,
                transition: "opacity 0.5s ease-in-out",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                }}
              >
                <LazyComponent threshold={0.1} rootMargin="300px">
                  <ProjectCard
                    {...project}
                    onImageLoad={() => handleImageLoad(`/assets/${project.image}`)}
                  />
                </LazyComponent>
              </Box>
            </Grid>
          ))}
          <div id="projects-sentinel" style={{ width: "100%", height: "20px" }} />
        </Grid>
      </Box>
    </section>
  );
});

Projects.displayName = "Projects";
