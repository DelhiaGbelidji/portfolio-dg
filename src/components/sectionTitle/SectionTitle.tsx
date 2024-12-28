import { Typography } from "@mui/material";
import { COLORS } from "../../utils/colors";

type Type_Props_Title = {
  title: string;
};

export const SectionTitle = ({ title }: Type_Props_Title) => {
  return (
    <Typography
      variant="h6"
      sx={{
        color: COLORS.main,
        fontWeight: "bold",
        textAlign: "center",
        textTransform: "uppercase",
        borderBottom: `2px solid ${COLORS.contrast}`,
        display: "inline-block",
        paddingBottom: "8px",
      }}
    >
      {title}
    </Typography>
  );
};
