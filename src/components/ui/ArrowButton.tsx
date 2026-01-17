import { MouseEventHandler } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

type ArrowButtonVariant = "primary" | "secondary";
type ArrowButtonSize = "sm" | "md" | "lg";

interface ArrowButtonProps {
  label: string;
  href?: string;
  to?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  variant?: ArrowButtonVariant;
  size?: ArrowButtonSize;
  iconPosition?: "left" | "right";
  showIcon?: boolean;
  className?: string;
  type?: "button" | "submit";
  target?: string;
  rel?: string;
  disabled?: boolean;
}

const sizeClasses: Record<ArrowButtonSize, string> = {
  sm: "px-5 py-2.5 text-sm min-h-[44px]",
  md: "px-7 py-3.5 text-sm md:text-base min-h-[48px]",
  lg: "px-8 py-4 text-base md:text-lg min-h-[52px]",
};

const arrowSizeClasses: Record<ArrowButtonSize, string> = {
  sm: "h-8 w-8",
  md: "h-9 w-9",
  lg: "h-10 w-10",
};

const arrowIconClasses: Record<ArrowButtonSize, string> = {
  sm: "h-4 w-4",
  md: "h-4 w-4",
  lg: "h-5 w-5",
};

const variantClasses: Record<ArrowButtonVariant, { base: string; arrow: string; ring: string }> = {
  primary: {
    base: "bg-primary text-primary-foreground hover:bg-primary/90",
    arrow: "bg-primary-foreground text-primary",
    ring: "focus-visible:ring-primary",
  },
  secondary: {
    base: "bg-primary-foreground text-primary border border-primary/20 hover:bg-primary-foreground/90",
    arrow: "bg-primary text-primary-foreground",
    ring: "focus-visible:ring-primary-foreground",
  },
};

const ArrowButton = ({
  label,
  href,
  to,
  onClick,
  variant = "primary",
  size = "md",
  iconPosition = "right",
  showIcon = true,
  className,
  type = "button",
  target,
  rel,
  disabled,
}: ArrowButtonProps) => {
  const styles = variantClasses[variant];
  const arrowIcon = showIcon ? (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-[6px] transition-transform duration-300 group-hover:translate-x-[3px]",
        arrowSizeClasses[size],
        styles.arrow
      )}
    >
      <ArrowUpRight className={arrowIconClasses[size]} />
    </span>
  ) : null;

  const content = (
    <>
      {iconPosition === "left" && arrowIcon}
      <span>{label}</span>
      {iconPosition === "right" && arrowIcon}
    </>
  );

  const classes = cn(
    "group inline-flex items-center justify-between gap-3 whitespace-nowrap rounded-[6px] font-medium tracking-[0.3px] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-60",
    sizeClasses[size],
    styles.base,
    styles.ring,
    className
  );

  if (to) {
    return (
      <Link to={to} className={classes} aria-disabled={disabled} onClick={onClick}>
        {content}
      </Link>
    );
  }

  if (href) {
    const resolvedRel = target === "_blank" ? rel || "noopener noreferrer" : rel;
    return (
      <a
        href={href}
        className={classes}
        target={target}
        rel={resolvedRel}
        aria-disabled={disabled}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick as MouseEventHandler<HTMLButtonElement>} className={classes} disabled={disabled}>
      {content}
    </button>
  );
};

export default ArrowButton;
