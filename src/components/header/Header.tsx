import { AppBar, Stack, styled } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

import { COLORS } from "../../utils/colors";
import { DefaultButton, IconWrapper } from "..";
import { openLink } from "../../utils/links";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: COLORS.white,
  position: "fixed",
  padding: theme.spacing(1),
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
}));

export const Header = () => {
  return (
    <StyledAppBar>
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{ px: 2 }}
      >
        <Stack
          flexDirection="row"
          component="nav"
          aria-label="Social media links"
        >
          <IconWrapper
            aria-label="LinkedIn"
            onClick={() =>
              openLink("https://www.linkedin.com/in/delhia-gbelidji/")
            }
          >
            <LinkedInIcon />
          </IconWrapper>
          <IconWrapper
            aria-label="GitHub"
            onClick={() => openLink("https://github.com/DelhiaGbelidji")}
          >
            <GitHubIcon />
          </IconWrapper>
          <a href="mailto:delhia.gb.pro@gmail.com">
            <IconWrapper aria-label="Email">
              <AlternateEmailIcon />
            </IconWrapper>
          </a>
        </Stack>
        <img src="/assets/logo.png" height={40} alt="Logo" loading="lazy" />
        <DefaultButton>
          <a
            href="/assets/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        </DefaultButton>
      </Stack>
    </StyledAppBar>
  );
};
