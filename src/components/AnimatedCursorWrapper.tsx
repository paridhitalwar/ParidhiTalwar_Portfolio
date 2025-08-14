"use client";
import AnimatedCursor from "react-animated-cursor";

export default function AnimatedCursorWrapper() {
  return (
    <AnimatedCursor
      innerSize={12}      // was 8 → bigger inner dot
      outerSize={45}      // was 35 → bigger outer circle
      color="185, 122, 255" /* lilac */
      outerAlpha={0.3}
      innerScale={0.8}    // slightly larger scaling
      outerScale={2.5}    // bigger expansion
      trailingSpeed={6}
    />
  );
}
