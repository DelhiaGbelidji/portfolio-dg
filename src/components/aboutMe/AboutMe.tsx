import { Box, Typography, styled } from "@mui/material";

import { COLORS } from "../../utils/colors";
import { ClearButton } from "../buttons/Button";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(4),
  borderRadius: theme.spacing(1),
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
  borderRadius: "50%",
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
        <Typography variant="h3" component="h1" fontWeight="bold">
          Hello, I’m{" "}
          <span style={{ color: COLORS.contrast }}>Delhia Gbelidji</span>
        </Typography>
        <Typography variant="h5" component="p" sx={{ mt: 2 }}>
          Front-End Developer specializing in React and TypeScript.
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Passionate about creating modern and intuitive user interfaces, I
          enjoy solving technical challenges and contributing to meaningful
          projects.
        </Typography>
        <ButtonContainer>
          <ClearButton>See my projects</ClearButton>
        </ButtonContainer>
      </TextSection>
      <ProfileImage src="/assets/profile.jpeg" alt="Delhia Gbelidji" />
    </Container>
  );
};
