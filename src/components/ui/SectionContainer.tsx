import { type HTMLAttributes, type ReactNode } from "react";
import { cn } from "../../utils/cn";

interface SectionContainerProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export function SectionContainer({
  children,
  className,
  ...props
}: SectionContainerProps) {
  return (
    <section
      className={cn(
        "w-full py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
