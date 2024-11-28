import { Box } from "@mui/material";

import { AboutMe, Carousel, Header, ProjectList } from "./components";

function App() {
  return (
    <>
      <Header />
      <Box sx={{ mt: 8 }}>
        <AboutMe />
        <Carousel />
        <ProjectList />
      </Box>
    </>
  );
}

export default App;
