import {
  Card as Mui_Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { COLORS } from "../../utils/colors";
import { IconWrapper } from "../buttons/Button";
import { openLink } from "../../utils/links";
import { Type_Project } from "../../utils/projects";

export const Card = ({ name, image, description, links }: Type_Project) => {
  return (
    <Mui_Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={`/assets/${image}`}
        title={`${name}`}
      />
      <CardContent sx={{ height: "180px" }}>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: COLORS.grey }}>
          {description}
        </Typography>
      </CardContent>
      {links?.length ? (
        <CardActions>
          {links.map(
            (link: { url: string; icon: React.ReactNode }, index: number) => (
              <IconWrapper key={index} onClick={() => openLink(link.url)}>
                {link.icon}
              </IconWrapper>
            )
          )}
        </CardActions>
      ) : (
        <></>
      )}
    </Mui_Card>
  );
};
