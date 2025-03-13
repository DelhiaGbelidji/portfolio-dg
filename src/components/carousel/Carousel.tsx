import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container, styled } from "@mui/material";
import { useImagePreloader } from "../../hooks/useImagePreloader";
import { imageFiles } from "../../utils/imageFiles";
import { ImageWithPlaceholder } from "../common/ImageWithPlaceholder";

const ImageContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(1),
  width: "80px",
  height: "80px",
}));

export const Carousel = () => {
  // Précharger toutes les images du carousel
  const imagesToPreload = imageFiles
    .map((image) => [`/assets/${image.webp}`, `/assets/${image.original}`])
    .flat()
    .filter(Boolean);

  useImagePreloader(imagesToPreload);

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
    <Container sx={{ margin: 8, justifyContent: "center" }}>
      <Slider {...settings}>
        {imageFiles.map((image, index) => (
          <ImageContainer key={index}>
            <ImageWithPlaceholder
              webpSrc={`/assets/${image.webp}`}
              src={`/assets/${image.original}`}
              alt={image.alt}
              width="100%"
              height="100%"
              objectFit="contain"
            />
          </ImageContainer>
        ))}
      </Slider>
    </Container>
  );
};
