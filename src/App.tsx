import { Box, Container, Stack } from "@mui/material";
import { AboutMe, AboutMeSection, Carousel, Header, Projects } from "./components";
import { styled } from "@mui/material/styles";
import { Background } from "./components/common/Background";

const SkipLink = styled("a")(({ theme }) => ({
  position: "absolute",
  top: "-40px",
  left: 0,
  background: theme.palette.primary.main,
  color: "#fff",
  padding: "8px",
  zIndex: 100,
  transition: "top 0.3s",
  "&:focus": {
    top: 0,
  },
}));

function App() {
  return (
    <>
      <SkipLink href="#my-projects">Skip to projects</SkipLink>
      <SkipLink href="#about-me">Skip to about me</SkipLink>
      <Header />
      <Background />
      <Box
        component="main"
        sx={{
          position: "relative",
          minHeight: "100vh",
          pt: 4,
          pb: 8
        }}
      >
        <Container maxWidth="lg">
          <Stack
            spacing={8}
            sx={{
              position: "relative",
              "& > *": {
                position: "relative",
                zIndex: 1,
                backdropFilter: "blur(8px)",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                borderRadius: 2,
                p: 4,
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-4px)"
                }
              }
            }}
          >
            <AboutMe />
            <Carousel />
            <Projects />
            <AboutMeSection />
          </Stack>
        </Container>
      </Box>
    </>
  );
}

export default App;
