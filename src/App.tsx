import { Stack } from "@mui/material";

import { AboutMe, AboutMeSection, Carousel, Header, ProjectsList } from "./components";

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
