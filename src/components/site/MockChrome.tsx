import { ReactNode } from "react";

interface MockChromeProps {
  children: ReactNode;
  title?: string;
  path?: string;
  headerRight?: ReactNode;
  className?: string;
}

const MockChrome = ({ children, title, path, headerRight, className = "" }: MockChromeProps) => {
  const headerLabel = path ?? title;

  return (
    <div className={`mock-window overflow-hidden rounded-lg border border-ld-border bg-ld-surface ${className}`.trim()}>
      {headerLabel && (
        <div className="flex items-center justify-between border-b border-ld-border bg-ld-panel px-4 py-2">
          <span className="font-mono text-caption text-ld-muted">{headerLabel}</span>
          {headerRight}
        </div>
      )}
      {children}
    </div>
  );
};

export default MockChrome;
