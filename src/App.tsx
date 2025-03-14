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
          pt: { xs: 2, md: 4 },
          pb: { xs: 4, md: 8 },
          mt: 6
        }}
      >
        <Container maxWidth="lg">
          <Stack
            spacing={{ xs: 4, md: 6 }}
            sx={{
              position: "relative",
              "& > section": {
                position: "relative",
                zIndex: 1,
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                borderRadius: 2,
                p: { xs: 2, md: 4 },
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                transition: "box-shadow 0.3s ease-in-out",
                "&:hover": {
                  boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)"
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
