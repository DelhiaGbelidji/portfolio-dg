import { Stack } from "@mui/material";

import { AboutMe, Carousel, Header, ProjectsList } from "./components";
import { AboutMeSection } from "./components/aboutMe/AboutMeSection";

function App() {
  return (
    <>
      <Header />
      <main>
        <Stack sx={{ margin: 8 }}>
          <AboutMe />
          <Carousel />
          <ProjectsList />
          <AboutMeSection />
        </Stack>
      </main>
    </>
  );
}

export default App;
