import { AppBar, Box, Stack, styled, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

import { COLORS } from "../../utils/colors";
import { DefaultButton, IconWrapper } from "..";
import { openLink } from "../../utils/links";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: COLORS.white,
  position: "fixed",
  paddingRight: theme.spacing(4),
  paddingLeft: theme.spacing(4),
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
}));

export const Header = () => {
  return (
    <StyledAppBar>
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
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
        <Box>
          <Typography
            variant="h6"
            fontWeight="bold"
            fontFamily={"cursive"}
            color="black"
          >
            Délhia <span style={{ color: COLORS.dark }}> Gbelidji</span>
          </Typography>
        </Box>
        <DefaultButton>
          <a
            href="/assets/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View resume
          </a>
        </DefaultButton>
      </Stack>
    </StyledAppBar>
  );
};
