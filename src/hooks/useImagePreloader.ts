/// <reference lib="dom" />
import { useEffect } from 'react';

export const useImagePreloader = (images: string[]) => {
  useEffect(() => {
    const preloadImages = async () => {
      const promises = images.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new globalThis.Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(promises);
      } catch (err) {
        console.error('Error preloading images:', err);
      }
    };

    preloadImages();
  }, [images]);
};
