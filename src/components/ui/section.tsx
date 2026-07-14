"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "light" | "primary" | "dark";
}

export function Section({
  children,
  className,
  id,
  background = "white",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24",
        background === "white" && "bg-white",
        background === "light" && "bg-background-secondary",
        background === "primary" && "bg-primary text-white",
        background === "dark" && "bg-secondary-dark text-white",
        className
      )}
    >
      {children}
    </section>
  );
}

interface AnimatedSectionProps extends SectionProps {
  delay?: number;
}

export function AnimatedSection({
  children,
  className,
  id,
  background = "white",
  delay = 0,
}: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={cn(
        "py-16 md:py-24",
        background === "white" && "bg-white",
        background === "light" && "bg-background-secondary",
        background === "primary" && "bg-primary text-white",
        background === "dark" && "bg-secondary-dark text-white",
        className
      )}
    >
      {children}
    </motion.section>
  );
}
