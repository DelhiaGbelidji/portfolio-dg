import { Box } from "@mui/material";

import { AboutMe, Carousel, Header } from "./components";
import { ProjectCard } from "./components/card/Card";
import { projects, Type_Project } from "./utils/projects.tsx";

function App() {
  return (
    <>
      <Header />
      <Box sx={{ mt: 8 }}>
        <AboutMe />
        <Carousel />
        <Box>
          {projects.map((project: Type_Project, index: number) => (
            <ProjectCard
              key={index}
              name={project.name}
              description={project.description}
              image={project.image}
              links={project.links}
            />
          ))}
        </Box>
      </Box>
    </>
  );
}

export default App;
