import { ReactNode } from "react";

interface FeatureBlockProps {
  label: string;
  title: string;
  description: string;
  soon?: boolean;
  children?: ReactNode;
  tabs?: { label: string; active?: boolean }[];
  imagesCount?: 1 | 2 | 3;
  className?: string;
}

const FeatureBlock = ({
  label,
  title,
  description,
  soon = false,
  children,
  tabs,
  imagesCount = 1,
  className = "",
}: FeatureBlockProps) => {
  return (
    <section className={`tp-feature-section ${className}`}>
      <div className="mx-auto max-w-[1300px] px-5 md:px-6">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="tp-section-label flex items-center justify-center gap-2">
            {label}
            {soon && <span className="tp-badge tp-badge-soon">Soon</span>}
          </p>
          <h2 className="text-tp-heading text-balance mt-1 max-w-[640px] mx-auto">
            {title}
          </h2>
          <p className="text-tp-desc mt-4 max-w-[560px] mx-auto">
            {description}
          </p>
        </div>

        {tabs && (
          <div className="mt-8 flex justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.label}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  tab.active
                    ? "bg-white text-black"
                    : "bg-[#1a1a1a] text-[#888888] hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}

        <div
          className={`mt-8 ${
            imagesCount === 3
              ? "grid gap-4 md:grid-cols-3"
              : imagesCount === 2
                ? "grid gap-4 md:grid-cols-2"
                : ""
          }`}
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default FeatureBlock;
