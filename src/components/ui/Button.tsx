import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../../utils/cn";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary disabled:pointer-events-none disabled:opacity-50 active:scale-95",
          {
            "bg-brand-primary text-white hover:bg-blue-600 shadow-md hover:shadow-lg hover:shadow-brand-primary/20":
              variant === "primary",
            "bg-brand-secondary text-white hover:bg-purple-600 shadow-md hover:shadow-lg hover:shadow-brand-secondary/20":
              variant === "secondary",
            "border border-slate-700 bg-transparent hover:bg-slate-800 text-slate-200":
              variant === "outline",
            "h-9 px-4 text-sm": size === "sm",
            "h-11 px-6 text-base": size === "md",
            "h-12 px-8 text-lg": size === "lg",
          },
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
