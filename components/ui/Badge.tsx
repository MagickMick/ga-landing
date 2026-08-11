import { ReactNode } from "react";

export function Badge({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-dark ${className}`}
    >
      {children}
    </span>
  );
}
