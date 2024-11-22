import { Box } from "@mui/material";

import { AboutMe, Carousel, Header } from "./components";

function App() {
  return (
    <>
      <Header />
      <Box sx={{ mt: 8 }}>
        <AboutMe />
        <Carousel />
      </Box>
    </>
  );
}

export default App;
