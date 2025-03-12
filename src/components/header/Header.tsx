import { AppBar, Stack, styled, Typography, useTheme } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from "@mui/icons-material/Description";

import { COLORS } from "../../utils/colors";
import { IconWrapper } from "..";
import { openLink } from "../../utils/links";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: COLORS.white,
  color: COLORS.text,
  position: "fixed",
  padding: theme.spacing(1.5),
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  borderRadius: "0 0 8px 8px",
}));

export const Header = () => {
  const theme = useTheme();
  return (
    <StyledAppBar>
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ width: "100%" }}
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{
            [theme.breakpoints.down("sm")]: {
              "& .fullName": { display: "none" },
              "& .initials": { display: "inline", fontSize: "1.25rem" },
            },
            [theme.breakpoints.up("sm")]: {
              "& .fullName": { display: "inline" },
              "& .initials": { display: "none" },
            },
          }}
        >
          <span className="fullName">
            Délhia <span style={{ color: COLORS.main }}>Gbelidji</span>
          </span>
          <span className="initials">
            D<span style={{ color: COLORS.main }}>G</span>
          </span>
        </Typography>
        <Stack
          direction="row"
          component="nav"
          aria-label="Social media links"
          alignItems="center"
          spacing={2}
        >
          <IconWrapper
            aria-label="View resume"
            title="View resume"
            onClick={() => window.open("/assets/resume.pdf", "_blank", "noopener noreferrer")}
          >
            <DescriptionIcon />
          </IconWrapper>
          <IconWrapper
            aria-label="LinkedIn"
            title="LinkedIn"
            onClick={() => openLink("https://www.linkedin.com/in/delhia-gbelidji/")}
          >
            <LinkedInIcon />
          </IconWrapper>
          <IconWrapper
            title="GitHub"
            aria-label="GitHub"
            onClick={() => openLink("https://github.com/DelhiaGbelidji")}
          >
            <GitHubIcon />
          </IconWrapper>
        </Stack>
      </Stack>
    </StyledAppBar>
  );
};
