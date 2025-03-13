import { Box, styled, Typography } from "@mui/material";
import { SectionTitle } from "../sectionTitle/SectionTitle";
import { Timeline } from "..";
import { COLORS } from "../../utils/colors";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    textAlign: "center",
    gap: theme.spacing(6),
  },
}));

const TextSection = styled(Box)(({ theme }) => ({
  maxWidth: "60%",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
  },
}));

const ProfileImage = styled("img")(() => ({
  width: 300,
  height: 300,
  borderRadius: "25% 45% 50% 70%",
  objectFit: "cover",
  filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.1))",
  transition: "transform 0.3s ease-in-out, filter 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.02)",
    filter: "drop-shadow(0 12px 20px rgba(0,0,0,0.15))",
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
        <Typography variant="h5" component="p">
          Software Developer
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
          I worked as a front-end developer using React.js and TypeScript for almost two years.
          Driven by curiosity and a passion for learning, I took the initiative to teach myself
          full-stack development with frameworks like Next.js and Nest.js. This allows me to build
          complete applications from A to Z while always keeping user experience in mind.
        </Typography>
      </TextSection>
      <picture>
        <source srcSet="/assets/webp/profile.webp" type="image/webp" />
        <ProfileImage
          src="/assets/profile.jpeg"
          alt="Photo de profil de Délhia Gbelidji"
          loading="lazy"
          width="300"
          height="300"
        />
      </picture>
    </Container>
  );
};

export const AboutMeSection = () => {
  return (
    <section id="about-me">
      <SectionTitle title={"my journey"} />
      <Timeline />
    </section>
  );
};
