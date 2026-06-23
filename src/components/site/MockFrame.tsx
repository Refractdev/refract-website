import { ReactNode } from "react";

interface MockFrameProps {
  children: ReactNode;
  className?: string;
  title?: string;
  headerRight?: ReactNode;
}

export function MockFrame({ children, className = "", title, headerRight }: MockFrameProps) {
  return (
    <div className={`panel overflow-hidden ${className}`.trim()}>
      {(title || headerRight) && (
        <div className="flex items-center justify-between border-b border-ld-border px-3.5 py-2.5">
          {title ? <span className="text-label-sm text-ld-on-surface">{title}</span> : <span />}
          {headerRight}
        </div>
      )}
      {children}
    </div>
  );
}
