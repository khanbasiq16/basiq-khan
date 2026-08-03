"use client";

import { useEffect, useState } from "react";

/** Normalised -1..1 pointer position relative to the viewport centre. */
export function useMouseParallax(disabledUnder = 1024) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (window.innerWidth < disabledUnder) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() =>
        setPos({
          x: (e.clientX / window.innerWidth - 0.5) * 2,
          y: (e.clientY / window.innerHeight - 0.5) * 2,
        })
      );
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
    };
  }, [disabledUnder]);

  return pos;
}
