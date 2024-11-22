import { Button, IconButton, styled } from "@mui/material";

import { COLORS } from "../../utils/colors";

export const DefaultButton = styled(Button)(() => ({
  height: 32,
  fontSize: "14px",
  lineHeight: "16px",
  backgroundColor: COLORS.main,
  border: `1px solid ${COLORS.main}`,
  color: COLORS.dark,
  "&:hover:not(.Mui-disabled), &.Mui-focused": {
    backgroundColor: COLORS.white,
    color: COLORS.main,
    boxShadow: "0px 2px 4px rgba(25, 49, 84, 0.15)",
    border: `1px solid ${COLORS.main}`,
  },
  "&.MuiButtonBase-root": {
    textTransform: "none",
  },
}));

export const ClearButton = styled(Button)(() => ({
  fontSize: "14px",
  lineHeight: "16px",
  backgroundColor: COLORS.white,
  color: COLORS.dark,
  border: `1px solid ${COLORS.dark}`,
  "&:hover:not(.Mui-disabled), &.Mui-focused": {
    backgroundColor: COLORS.dark,
    color: COLORS.white,
    boxShadow: "0px 2px 4px rgba(25, 49, 84, 0.15)",
  },
  "&.MuiButtonBase-root": {
    textTransform: "none",
  },
}));

export const IconWrapper = styled(IconButton)(({ theme }) => ({
  color: COLORS.dark,
  marginRight: theme.spacing(1.5),
  "&:hover": {
    color: COLORS.main,
    transform: "scale(1.1)",
    transition: "transform 0.2s, color 0.2s",
  },
}));
