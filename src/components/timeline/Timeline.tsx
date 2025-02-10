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
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", py: 6 }}>
      <Box sx={{ position: "relative", width: "100%", maxWidth: 800 }}>
        {/* Vertical Line */}
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            width: 4,
            height: "100%",
            bgcolor: COLORS.main,
          }}
        />
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            style={{
              display: "flex",
              justifyContent: index % 2 === 0 ? "start" : "end",
              width: "100%",
              marginBottom: 40,
            }}
          >
            <motion.div
              whileHover={{ scale: 1.1, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              style={{ width: "45%" }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 1,
                  borderRadius: 2,
                  backgroundColor: "#F8F2F3",
                  cursor: "pointer",
                  color: COLORS.text,
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  {item.title}
                </Typography>
                <Typography variant="subtitle2" color={COLORS.secondaryText}>
                  {item.date}
                </Typography>
                <List>
                  {item.description.map((point, i) => (
                    <ListItem key={i} sx={{ py: 0 }}>
                      <ListItemText
                        primary={`• ${point}`}
                        primaryTypographyProps={{ variant: "caption" }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </motion.div>
            {/* Timeline Dot */}
            <Box
              sx={{
                width: 16,
                height: 16,
                backgroundColor: COLORS.main,
                borderRadius: "50%",
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                mt: 1.5,
                border: `4px solid ${COLORS.main}`,
              }}
            />
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};
