import { Box, Typography, Paper, List, ListItem, ListItemText } from "@mui/material";
import { motion } from "framer-motion";
import { COLORS } from "../../utils/colors";

const timelineData = [
  {
    date: "February 2023 - October 2024",
    title: "Front-End Developer - Teamoty",
    description: [
      "One year apprenticeship and six months contract",
      "Developed features with React, TypeScript, and MUI.",
      "Improved code structure and implemented best practices.",
      "Worked closely with UI/UX designers to enhance user experience.",
      "Refactored components for better maintainability.",
      "Collaborated with back-end teams to integrate APIs.",
    ],
  },
  {
    date: "December 2023 - March 2024",
    title: "READ-it - Personal project",
    description: [
      "Developed a self publishing platform to improve publishing process.",
      "Created wireframes and mockups",
      "Built the frontend using Next.js and the backend with NestJS, with SQLite for the database.",
      "Developed authentication features (sign-in and sign-up), project creation, modification, and deletion, as well as manuscript creation and deletion",
    ],
  },
  {
    date: "May 2022 - February 2023",
    title: "Software Developer training",
    description: [
      "Worked on group projects following AGILE methodology.",
      "Gained expertise in web and mobile development.",
      "Enhanced problem-solving skills by developing several projects in different langages",
    ],
  },
];

export const Timeline = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: { xs: "100%", sm: 800 },
          px: { xs: 2, sm: 0 },
        }}
      >
        {/* Desktop Vertical Line */}
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
          <Box
            key={index}
            sx={{
              width: "100%",
              mb: { xs: 8, sm: 5 },
              position: "relative",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "center", sm: "flex-start" },
              justifyContent: {
                sm: index % 2 === 0 ? "flex-start" : "flex-end",
              },
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: { xs: "100%", sm: "45%" },
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                style={{ width: "100%" }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  style={{ width: "100%" }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      backgroundColor: "#F8F2F3",
                      cursor: "pointer",
                      color: COLORS.text,
                      "&:hover": {
                        boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
                      },
                    }}
                  >
                    <Box>
                      <Typography
                        component="h1"
                        variant="subtitle1"
                        sx={{
                          fontWeight: "bold",
                          fontSize: { xs: "1rem", sm: "1.1rem" },
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        component="h2"
                        variant="subtitle2"
                        color={COLORS.secondaryText}
                        sx={{
                          fontSize: { xs: "0.875rem", sm: "0.9rem" },
                        }}
                      >
                        {item.date}
                      </Typography>
                    </Box>
                    <List>
                      {item.description.map((point, i) => (
                        <ListItem key={i} sx={{ py: 0 }}>
                          <ListItemText
                            primary={`• ${point}`}
                            primaryTypographyProps={{
                              variant: "caption",
                              sx: {
                                fontSize: { xs: "0.75rem", sm: "0.8rem" },
                              },
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                </motion.div>
              </motion.div>
            </Box>
            {/* Mobile Timeline Elements */}
            <Box
              sx={{
                display: { xs: "flex", sm: "none" },
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                mt: 2,
              }}
            >
              <Box
                sx={{
                  width: 4,
                  height: 24,
                  bgcolor: COLORS.main,
                }}
              />
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  backgroundColor: COLORS.main,
                  borderRadius: "50%",
                  border: `3px solid ${COLORS.main}`,
                }}
              />
            </Box>
            {/* Desktop Timeline Dot */}
            <Box
              sx={{
                display: { xs: "none", sm: "block" },
                width: 16,
                height: 16,
                backgroundColor: COLORS.main,
                borderRadius: "50%",
                position: "absolute",
                left: "50%",
                top: "25%",
                transform: "translateX(-50%)",
                border: `4px solid ${COLORS.main}`,
                zIndex: 1,
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};
