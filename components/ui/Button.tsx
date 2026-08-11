import { AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-dark shadow-sm shadow-primary/20",
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
    </a>
  );
}
