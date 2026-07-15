import { cn } from "@/lib/utils";

interface SectionWaveProps {
  /** Where the wave sits within the parent section. */
  position?: "top" | "bottom";
  /** Mirror the wave horizontally for organic variety. */
  flip?: boolean;
  /** Height utility classes controlling how tall the transition is. */
  height?: string;
  /** Color of the flowing shape — set via text-* (uses currentColor). */
  className?: string;
}

/**
 * A smooth, full-width SVG wave that blends two adjacent sections together so
 * their edges flow into one another instead of meeting at a hard rectangle.
 * Place it at the `top` of a section filled with the previous section's color,
 * or at the `bottom` filled with the next section's color.
 */
const TOP_PATH =
  "M0,0 L1440,0 L1440,70 C1180,132 980,18 720,58 C470,96 250,4 0,66 Z";
const BOTTOM_PATH =
  "M0,62 C250,4 470,96 720,58 C980,18 1180,132 1440,70 L1440,140 L0,140 Z";

export function SectionWave({
  position = "bottom",
  flip = false,
  height = "h-[52px] md:h-[84px]",
  className,
}: SectionWaveProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-x-0 z-[1] w-full leading-none",
        position === "top" ? "top-0" : "bottom-0",
        height,
        className
      )}
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        style={flip ? { transform: "scaleX(-1)" } : undefined}
      >
        <path d={position === "top" ? TOP_PATH : BOTTOM_PATH} />
      </svg>
    </div>
  );
}
