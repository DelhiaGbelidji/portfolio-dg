import { Box, Typography, Paper, List, ListItem, ListItemText } from "@mui/material";
import { motion } from "framer-motion";
import { COLORS } from "../../utils/colors";

type Type_Props_TimelineItem = {
  item: {
    date: string;
    title: string;
    description: string[];
  };
  index: number;
};

export const TimelineItem = ({ item, index }: Type_Props_TimelineItem) => {
  return (
    <Box
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
              </Box>
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
            height: 12,
            width: 12,
            borderRadius: "50%",
            backgroundColor: COLORS.white,
            border: `3px solid ${COLORS.main}`,
          }}
        />
      </Box>
      {/* Desktop Timeline Dot */}
      <Box
        sx={{
          display: { xs: "none", sm: "block" },
          position: "absolute",
          width: 16,
          height: 16,
          backgroundColor: COLORS.white,
          borderRadius: "50%",
          left: "50%",
          top: "25%",
          transform: "translateX(-50%)",
          border: `4px solid ${COLORS.main}`,
          zIndex: 1,
        }}
      />
    </Box>
  );
};
