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
    <main className="min-h-screen bg-black pt-28 pb-20 text-white">
      <div className="mx-auto px-5 md:px-6" style={{ maxWidth }}>
        <header className="mb-12">
          {label ? <p className="tp-section-label">{label}</p> : null}
          <h1 className="text-tp-heading">{title}</h1>
          {description ? (
            <div className="text-tp-desc mt-3 max-w-[560px]">{description}</div>
          ) : null}
        </header>
        <div className="text-body text-[#999999] space-y-6">
          {children}
        </div>
      </div>
    </main>
  );
};

export default PageShell;
