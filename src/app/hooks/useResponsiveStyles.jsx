"use client";

import { useState, useEffect } from "react";

const useResponsiveStyles = (breakpoints) => {
  const getStyles = (width, breakpoints) => {
    for (const breakpoint of breakpoints) {
      if (width <= breakpoint.maxWidth) {
        return breakpoint.styles;
      }
    }
    return breakpoints[breakpoints.length - 1].styles;
  };

  const [styles, setStyles] = useState(
    getStyles(window.innerWidth, breakpoints)
  );

  useEffect(() => {
    const handleResize = () => {
      setStyles(getStyles(window.innerWidth, breakpoints));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoints]);

  return styles;
};

export default useResponsiveStyles;
