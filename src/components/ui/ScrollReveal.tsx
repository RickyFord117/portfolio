import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
}

export function ScrollReveal({
  children,
  width = "100%",
  delay = 0,
}: ScrollRevealProps) {
  return (
    <div style={{ width, position: "relative", overflow: "hidden" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }} // Triggers slightly before it fully enters the screen
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
