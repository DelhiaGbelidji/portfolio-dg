import { Box, Typography, styled } from "@mui/material";

import { COLORS } from "../../utils/colors";
import { ClearButton } from "../buttons/Button";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    textAlign: "center",
  },
}));

const TextSection = styled(Box)(({ theme }) => ({
  maxWidth: "60%",
  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
  },
}));

const ProfileImage = styled("img")(({ theme }) => ({
  width: 300,
  height: 300,
  borderRadius: "25% 45% 50% 70%",
  objectFit: "cover",
  [theme.breakpoints.down("md")]: {
    marginTop: theme.spacing(4),
  },
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  marginTop: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
}));

export const AboutMe = () => {
  return (
    <Container>
      <TextSection>
        <Typography variant="h4" component="h1" fontWeight="bold">
          Hello, I’m {""}
          <span style={{ color: COLORS.dark }}>Délhia Gbelidji,</span>
        </Typography>
        <Typography variant="h5" component="p" sx={{ mt: 2 }}>
          Software Developer
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          I worked as a front-end developer using React.js and TypeScript for almost two years.
          Driven by curiosity and a passion for learning, I took the initiative to teach myself
          full-stack development with frameworks like Next.js and Nest.js. This allows me to build
          complete applications from A to Z while always keeping user experience in mind.
        </Typography>
        <ButtonContainer>
          <ClearButton href="#about-me" aria-label="See more">
            See more...
          </ClearButton>
        </ButtonContainer>
      </TextSection>
      <ProfileImage src="/assets/profile.jpeg" alt="Delhia Gbelidji" />
    </Container>
  );
};
