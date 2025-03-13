/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference types="react" />

import { RefObject, useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = (
  options: {
    root?: null;
    rootMargin?: string;
    threshold?: number | number[];
  } = {}
): { elementRef: RefObject<any>; isVisible: boolean } => {
  const elementRef = useRef<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    const observer = new window.IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [options]);

  return { elementRef, isVisible };
};
