import { cn } from "@/lib/utils";

/**
 * Soft, blurred organic "blobs" used as a consistent decorative motif across
 * the light home-page sections. Purely presentational and non-interactive, so
 * it keeps the layout calm while adding fluid graphic shapes.
 */
export function SoftBlobs({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div className="absolute -top-16 right-[6%] h-72 w-72 rounded-full bg-gradient-to-br from-primary/[0.07] to-primary-light/[0.03] blur-3xl animate-float" />
      <div className="absolute bottom-[-4rem] left-[4%] h-80 w-80 rounded-full bg-gradient-to-tr from-accent/[0.10] to-accent-light/[0.04] blur-3xl animate-pulse-soft" />
      <div className="absolute left-1/2 top-1/3 h-40 w-40 -translate-x-1/2 rounded-full bg-primary-100/25 blur-2xl" />
    </div>
  );
}
