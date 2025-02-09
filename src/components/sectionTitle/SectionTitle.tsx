import { Box, Typography, Divider } from "@mui/material";
import { COLORS } from "../../utils/colors";

type Type_Props_Title = {
  title: string;
};

export const SectionTitle = ({ title }: Type_Props_Title) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" m={4}>
      <Typography
        variant="h6"
        sx={{
          color: COLORS.dark,
          textTransform: "uppercase",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        {title}
      </Typography>
      <Divider
        sx={{
          width: "200px",
          borderColor: `${COLORS.grey}`,
        }}
      />
    </Box>
  );
};
