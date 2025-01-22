import { Box, Typography, styled } from "@mui/material";

import { COLORS } from "../../utils/colors";
import { ClearButton } from "../buttons/Button";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: theme.spacing(1),
  marginTop: theme.spacing(4),
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
  width: "200px",
  height: "200px",
  borderRadius: "4px",
  objectFit: "cover",
  [theme.breakpoints.down("md")]: {
    marginTop: "16px",
  },
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
}));

export const AboutMe = () => {
  return (
    <Container>
      <TextSection>
        <Typography
          variant="h3"
          component="h1"
          fontWeight="bold"
          fontFamily={"cursive"}
        >
          Hello, I’m{" "}
          <span style={{ color: COLORS.dark }}>Délhia Gbelidji,</span>
        </Typography>
        <Typography variant="h5" component="p" sx={{ mt: 2 }}>
          Front-end Developer specialzing in React/Typescript
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Passionate about developing modern and intuitive user interfaces, I
          thrive on solving technical challenges, contributing to impactful
          projects, and continuously learning about web development with the
          teams I work with.
        </Typography>
        <ButtonContainer>
          <ClearButton href="#about-me">See more...</ClearButton>
        </ButtonContainer>
      </TextSection>
      <ProfileImage src="/assets/profile.jpeg" alt="Delhia Gbelidji" />
    </Container>
  );
};
