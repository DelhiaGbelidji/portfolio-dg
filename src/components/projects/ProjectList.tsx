import { Box, Stack, Typography } from "@mui/material";
import { Card } from "..";
import { projects, Type_Project } from "../../utils/projects";

export const ProjectList = () => {
  return (
    <Stack p={4} spacing={2}>
      <Typography variant="h6">My projects</Typography>
      <Box display="flex" flexDirection="row" gap={2} flexWrap="wrap">
        {projects.map((project: Type_Project, index: number) => (
          <Card
            key={index}
            name={project.name}
            description={project.description}
            image={project.image}
            links={project.links}
          />
        ))}
      </Box>
    </Stack>
  );
};
