import { useState } from "react";
import { Box, Skeleton, styled } from "@mui/material";
import type { CSSProperties } from "react";

interface ImageWithPlaceholderProps {
  src: string;
  webpSrc?: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  className?: string;
  onLoad?: () => void;
  style?: CSSProperties;
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
  onLoad,
  style,
}: ImageWithPlaceholderProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
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
            width="100%"
            height="100%"
            style={{ objectFit, ...style }}
            onLoad={handleLoad}
            className={isLoaded ? "loaded" : ""}
          />
        </picture>
      ) : (
        <StyledImage
          src={src}
          alt={alt}
          width="100%"
          height="100%"
          style={{ objectFit, ...style }}
          onLoad={handleLoad}
          className={isLoaded ? "loaded" : ""}
        />
      )}
    </Box>
  );
};
