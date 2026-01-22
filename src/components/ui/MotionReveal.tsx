import type { ReactNode } from "react";
import { motion } from "framer-motion";

type MotionRevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  id?: string;
};

export const MotionReveal = ({
  children,
  delay = 0,
  className,
  id
}: MotionRevealProps) => (
  <motion.div
    id={id}
    className={className}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut", delay }}
    viewport={{ once: true, amount: 0.2 }}
  >
    {children}
  </motion.div>
);
