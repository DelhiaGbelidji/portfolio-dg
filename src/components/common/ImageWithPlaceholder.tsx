import { useState } from "react";
import { Box, Skeleton, styled } from "@mui/material";

interface ImageWithPlaceholderProps {
  src: string;
  webpSrc?: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  className?: string;
}

const StyledImage = styled("img")({
  opacity: 0,
  transition: "opacity 0.3s ease-in-out",
  "&.loaded": {
    opacity: 1,
  },
});

export const ImageWithPlaceholder = ({
  src,
  webpSrc,
  alt,
  width = "100%",
  height = "100%",
  objectFit = "cover",
  className,
}: ImageWithPlaceholderProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <Box
      position="relative"
      width={width}
      height={height}
      overflow="hidden"
      className={className}
    >
      {!isLoaded && (
        <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          animation="wave"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          }}
        />
      )}
      {webpSrc ? (
        <picture>
          <source srcSet={webpSrc} type="image/webp" />
          <StyledImage
            src={src}
            alt={alt}
            onLoad={handleLoad}
            className={isLoaded ? "loaded" : ""}
            style={{
              width,
              height,
              objectFit,
            }}
            loading="lazy"
          />
        </picture>
      ) : (
        <StyledImage
          src={src}
          alt={alt}
          onLoad={handleLoad}
          className={isLoaded ? "loaded" : ""}
          style={{
            width,
            height,
            objectFit,
          }}
          loading="lazy"
        />
      )}
    </Box>
  );
};
