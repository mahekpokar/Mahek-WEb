"use client";

import { useEffect, useState } from "react";
import { useMotionValue, useSpring, useTransform } from "framer-motion";

export function useScrollAnimation() {
  const [scrollY, setScrollY] = useState(0);
  const motionScrollY = useMotionValue(0);

  // Smoother scroll with spring physics
  const smoothScrollY = useSpring(motionScrollY, {
    damping: 50,
    stiffness: 400
  });

  // Calculate how much we want to parallax
  const contentY = useTransform(smoothScrollY, [0, 1000], [0, 300]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollY(currentScroll);
      motionScrollY.set(currentScroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [motionScrollY]);

  return { scrollY, contentY };
}
