import { AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variantClasses: Record<ButtonVariant, string> = {
  // Reserved for the main conversion action (book-a-call CTA) — orange so it
  // pops against the purple brand color used everywhere else.
  primary: "bg-cta text-white hover:bg-cta-dark shadow-sm shadow-cta/20",
  secondary:
    "bg-white text-ink border border-border hover:border-primary hover:text-primary",
  ghost: "text-primary hover:text-primary-dark",
};

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant;
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-150 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
      <span aria-hidden>→</span>
    </a>
  );
}
