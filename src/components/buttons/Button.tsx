import { Button, IconButton, styled } from "@mui/material";

import { COLORS } from "../../utils/colors";

export const DefaultButton = styled(Button)(() => ({
  height: 32,
  fontSize: "14px",
  lineHeight: "16px",
  backgroundColor: COLORS.main,
  border: `1px solid ${COLORS.main}`,
  color: COLORS.white,
  "&:hover:not(.Mui-disabled), &.Mui-focused": {
    backgroundColor: COLORS.light,
    boxShadow: "0px 2px 4px rgba(25, 49, 84, 0.15)",
    border: `1px solid ${COLORS.light}`,
  },
  "&.MuiButtonBase-root": {
    textTransform: "none",
  },
}));

export const CardButton = styled(Button)(() => ({
  height: 32,
  fontSize: "14px",
  lineHeight: "16px",
  backgroundColor: COLORS.cardButton,
  color: COLORS.cardButtonText,
  "&.MuiButtonBase-root": {
    textTransform: "none",
  },
}));

export const ClearButton = styled(Button)(() => ({
  fontSize: "14px",
  lineHeight: "16px",
  backgroundColor: COLORS.white,
  color: COLORS.main,
  borderRadius: 44,
  border: `1px solid ${COLORS.main}`,
  "&:hover:not(.Mui-disabled), &.Mui-focused": {
    backgroundColor: COLORS.main,
    color: COLORS.white,
    boxShadow: "0px 2px 4px rgba(25, 49, 84, 0.15)",
  },
  "&.MuiButtonBase-root": {
    textTransform: "none",
  },
}));

export const IconWrapper = styled(IconButton)(() => ({
  color: COLORS.main,
  padding: 0,
  "&:hover": {
    color: COLORS.light,
    transform: "scale(1.1)",
    transition: "transform 0.2s, color 0.2s",
  },
}));
