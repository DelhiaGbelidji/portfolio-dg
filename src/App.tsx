import { Box } from "@mui/material";

import { Carousel, Header } from "./components";

function App() {
  return (
    <>
      <Header />
      <Box sx={{ mt: 8 }}>
        <Carousel />
      </Box>
    </>
  );
}

export default App;
