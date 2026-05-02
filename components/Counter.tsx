"use client";

import { motion } from "motion/react";
import type React from "react";
import { useEffect, useState } from "react";

interface CounterProps {
  value: number;
  fontSize?: number;
  fontWeight?: React.CSSProperties["fontWeight"];
  textColor?: string;
  duration?: number;
}

export default function Counter({
  value,
  fontSize = 28,
  fontWeight = "900",
  textColor = "currentColor",
  duration = 2.5,
}: CounterProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = {
      current: 0,
    };

    const interval = setInterval(() => {
      controls.current += value / (duration * 60);
      if (controls.current >= value) {
        controls.current = value;
        setDisplayValue(Math.round(value));
        clearInterval(interval);
      } else {
        setDisplayValue(Math.round(controls.current));
      }
    }, 1000 / 60); // 60fps

    return () => clearInterval(interval);
  }, [value, duration]);

  return (
    <motion.span
      style={{
        fontSize,
        fontWeight,
        color: textColor,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayValue}
    </motion.span>
  );
}
