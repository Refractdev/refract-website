import { ReactNode } from "react";

interface PageShellProps {
  label?: string;
  title: string;
  description?: ReactNode;
  children: ReactNode;
  maxWidth?: number;
}

const PageShell = ({
  label,
  title,
  description,
  children,
  maxWidth = 720,
}: PageShellProps) => {
  return (
    <main className="min-h-screen bg-ld-neutral pt-28 pb-20 text-ld-on-surface">
      <div className="mx-auto px-6" style={{ maxWidth }}>
        <header className="mb-12">
          {label ? <p className="section-label">{label}</p> : null}
          <h1 className="text-section-title">{title}</h1>
          {description ? (
            <div className="text-body mt-3 max-w-[560px]">{description}</div>
          ) : null}
        </header>
        {children}
      </div>
    </main>
  );
};

export default PageShell;
