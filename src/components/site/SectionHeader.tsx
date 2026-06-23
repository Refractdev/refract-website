import { ReactNode } from "react";

interface SectionHeaderProps {
  label?: string;
  title: ReactNode;
  description?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeader = ({
  label,
  title,
  description,
  centered = false,
  className = "",
}: SectionHeaderProps) => {
  return (
    <header
      className={`${centered ? "mx-auto text-center" : ""} mb-12 max-w-[680px] ${className}`.trim()}
    >
      {label ? <p className="section-label">{label}</p> : null}
      <h2 className="text-section-title text-balance">{title}</h2>
      {description ? <p className="text-body mt-4">{description}</p> : null}
    </header>
  );
};

export default SectionHeader;
