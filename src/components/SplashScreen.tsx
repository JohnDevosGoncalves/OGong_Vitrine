"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const dots = [
  { color: "#FF8C42", angle: 0 },
  { color: "#FFB347", angle: 60 },
  { color: "#4A3AFF", angle: 120 },
  { color: "#7B6FFF", angle: 180 },
  { color: "#FF6B6B", angle: 240 },
  { color: "#FF8C42", angle: 300 },
];

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"gong" | "text" | "exit">("gong");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("text"), 600);
    const t2 = setTimeout(() => setPhase("exit"), 1800);
    const t3 = setTimeout(onComplete, 2400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  const logoRadius = 22;
  const dotR = 4.5;
  const viewBox = 64;
  const center = viewBox / 2;

  return (
    <AnimatePresence>
      {phase !== "exit" ? (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#fafaf9]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Ripple rings — gong shockwave */}
          <div className="relative">
            {[0, 1, 2].map((ring) => (
              <motion.div
                key={ring}
                className="absolute rounded-full border border-primary/20"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
                initial={{ width: 0, height: 0, opacity: 0.6 }}
                animate={{
                  width: [0, 200 + ring * 80],
                  height: [0, 200 + ring * 80],
                  opacity: [0.5, 0],
                }}
                transition={{
                  duration: 1.4,
                  delay: 0.2 + ring * 0.2,
                  ease: "easeOut",
                }}
              />
            ))}

            {/* Logo SVG with gong animation */}
            <svg
              width="80"
              height="80"
              viewBox={`0 0 ${viewBox} ${viewBox}`}
              fill="none"
              overflow="visible"
              className="relative z-10"
            >
              {dots.map((dot, i) => {
                const rad = (dot.angle * Math.PI) / 180;
                const cx = center + logoRadius * Math.cos(rad);
                const cy = center + logoRadius * Math.sin(rad);

                // Overshoot positions for gong bounce
                const overshootFactor = 1.7;
                const bounceFactor = 0.85;
                const settleFactor = 1.08;

                const oxCx = center + logoRadius * overshootFactor * Math.cos(rad);
                const oxCy = center + logoRadius * overshootFactor * Math.sin(rad);
                const bxCx = center + logoRadius * bounceFactor * Math.cos(rad);
                const bxCy = center + logoRadius * bounceFactor * Math.sin(rad);
                const sxCx = center + logoRadius * settleFactor * Math.cos(rad);
                const sxCy = center + logoRadius * settleFactor * Math.sin(rad);

                return (
                  <motion.circle
                    key={i}
                    fill={dot.color}
                    initial={{ cx: center, cy: center, r: 0 }}
                    animate={{
                      cx: [center, oxCx, bxCx, sxCx, cx],
                      cy: [center, oxCy, bxCy, sxCy, cy],
                      r: [0, dotR * 2.2, dotR * 0.6, dotR * 1.3, dotR],
                    }}
                    transition={{
                      duration: 1.1,
                      delay: i * 0.05,
                      ease: [0.22, 1, 0.36, 1],
                      times: [0, 0.3, 0.5, 0.7, 1],
                    }}
                  />
                );
              })}
            </svg>
          </div>

          {/* Brand name */}
          <motion.p
            className="mt-6 text-xl font-bold tracking-tight text-foreground"
            initial={{ opacity: 0, y: 8 }}
            animate={
              phase === "text"
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 8 }
            }
            transition={{ duration: 0.4 }}
          >
            ogong
          </motion.p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
