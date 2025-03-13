import { ReactNode } from 'react';
import { Box } from '@mui/material';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface LazyComponentProps {
  children: ReactNode;
  threshold?: number;
  rootMargin?: string;
}

export const LazyComponent = ({
  children,
  threshold = 0.1,
  rootMargin = '50px',
}: LazyComponentProps) => {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold,
    rootMargin,
  });

  return (
    <Box
      ref={elementRef as any}
      sx={{
        opacity: isVisible ? 1 : 0,
        transform: `translateY(${isVisible ? 0 : '20px'})`,
        transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
      }}
    >
      {isVisible && children}
    </Box>
  );
};
