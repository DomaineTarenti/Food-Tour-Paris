interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "gold" | "sage";
  className?: string;
}

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const variantClass =
    variant === "gold" ? "badge-gold" : variant === "sage" ? "badge-sage" : "badge";
  return (
    <span className={`${variantClass} ${className}`}>
      {children}
    </span>
  );
}
