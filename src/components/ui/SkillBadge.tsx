import { type ReactNode } from "react";
import { cn } from "../../utils/cn";

interface SkillBadgeProps {
  children: ReactNode;
  className?: string;
  icon?: ReactNode; // Optional prop to pass in a Lucide icon
}

export function SkillBadge({ children, className, icon }: SkillBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full bg-slate-800/40 border border-slate-700/50 px-3 py-1.5 text-sm font-medium text-slate-300 backdrop-blur-md transition-colors hover:bg-slate-700/60 hover:text-white cursor-default",
        className,
      )}
    >
      {icon && (
        <span className='w-4 h-4 flex items-center justify-center'>{icon}</span>
      )}
      {children}
    </span>
  );
}
