"use client";
import { useState, useLayoutEffect } from "react";
import useWindowSize from "@shared/hooks/useWindowSize";

const useIsMobile = (breakpoint = 768) => {
  const { width } = useWindowSize();
  const [isMobile, setMobile] = useState<boolean | null>(null); // starts as null to indicate no initial assumption

  useLayoutEffect(() => {
    if (width !== null) {
      setMobile(width <= breakpoint);
    }
  }, [width, breakpoint]);

  return isMobile;
};

export default useIsMobile;
