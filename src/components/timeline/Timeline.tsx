import { Box } from "@mui/material";
import { useEffect } from "react";

import { COLORS } from "../../utils/colors";
import { TimelineItem } from "./TimelineItem";
import timelineData from "../../utils/timeline.json";

export const Timeline = () => {
  useEffect(() => {
    const scrollY = window.scrollY;
  
    // eslint-disable-next-line no-undef
    const frameId = requestAnimationFrame(() => {
      window.scrollTo({ top: scrollY, behavior: "instant" });
    });
    
    return () => {
      // eslint-disable-next-line no-undef
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: { xs: "100%", sm: "100%", md: 800 },
          px: { xs: 2, sm: 2, md: 0 },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            width: 4,
            height: "100%",
            bgcolor: COLORS.main,
            display: { xs: "none", sm: "block" },
          }}
        />
        {timelineData.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
      </Box>
    </Box>
  );
};
