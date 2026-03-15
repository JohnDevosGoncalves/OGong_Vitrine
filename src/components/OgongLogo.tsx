"use client";

import { motion } from "framer-motion";

const dots = [
  { color: "#FF8C42", angle: 0 },
  { color: "#FFB347", angle: 60 },
  { color: "#4A3AFF", angle: 120 },
  { color: "#7B6FFF", angle: 180 },
  { color: "#FF6B6B", angle: 240 },
  { color: "#FF8C42", angle: 300 },
];

interface OgongLogoProps {
  size?: number;
  animate?: boolean;
}

export default function OgongLogo({ size = 28, animate = false }: OgongLogoProps) {
  const radius = 11;
  const dotR = 2.2;

  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      {dots.map((dot, i) => {
        const rad = (dot.angle * Math.PI) / 180;
        const cx = 16 + radius * Math.cos(rad);
        const cy = 16 + radius * Math.sin(rad);

        if (!animate) {
          return <circle key={i} cx={cx} cy={cy} r={dotR} fill={dot.color} />;
        }

        return (
          <motion.circle
            key={i}
            cx={16}
            cy={16}
            r={dotR}
            fill={dot.color}
            animate={{
              cx: [16, cx + (cx - 16) * 0.6, cx - (cx - 16) * 0.15, cx + (cx - 16) * 0.05, cx],
              cy: [16, cy + (cy - 16) * 0.6, cy - (cy - 16) * 0.15, cy + (cy - 16) * 0.05, cy],
              r: [0, dotR * 1.8, dotR * 0.7, dotR * 1.2, dotR],
            }}
            transition={{
              duration: 1.2,
              delay: 0.1 + i * 0.06,
              ease: [0.22, 1, 0.36, 1],
              times: [0, 0.35, 0.55, 0.75, 1],
            }}
          />
        );
      })}
    </svg>
  );
}
