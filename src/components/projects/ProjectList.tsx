import { Box, Stack } from "@mui/material";
import { Card } from "..";
import { projects, Type_Project } from "../../utils/projects";
import { SectionTitle } from "../sectionTitle/SectionTitle";

export const ProjectList = () => {
  return (
    <Stack p={4} spacing={2}>
      <SectionTitle title={"My projects"} />
      <Box
        display="flex"
        flexDirection="row"
        gap={2}
        flexWrap="wrap"
        justifyContent={"center"}
      >
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
