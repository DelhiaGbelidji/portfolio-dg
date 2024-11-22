import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box, Container } from "@mui/material";

import { imageFiles } from "../../utils/imageFiles";

export const Carousel = () => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1115,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 778,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Container>
      <Slider {...settings}>
        {imageFiles.map((file, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <img
              src={`/assets/${file}`}
              alt={file.split(".")[0]}
              style={{
                width: "80px",
                height: "80px",
                objectFit: "contain",
              }}
            />
          </Box>
        ))}
      </Slider>
    </Container>
  );
};
