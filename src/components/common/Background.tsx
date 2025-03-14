import { Box } from "@mui/material";
import { COLORS } from "../../utils/colors";

export const Background = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        background: `linear-gradient(135deg, ${COLORS.white} 0%, ${COLORS.cardHover} 100%)`,
        willChange: "transform",
        transform: "translateZ(0)",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          backgroundImage: `radial-gradient(${COLORS.main}15 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
          opacity: 0.3,
          transform: "translateZ(0)",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          background: `linear-gradient(45deg, ${COLORS.main}05, ${COLORS.light}05)`,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 85%, 100% 70%, 100% 50%, 0 35%)",
          transform: "translateZ(0)",
        }
      }}
    />
  );
};
