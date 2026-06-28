import { ReactNode } from "react";

interface SectionBandProps {
  id?: string;
  elevated?: boolean;
  wide?: boolean;
  narrow?: boolean;
  className?: string;
  children: ReactNode;
}

const SectionBand = ({
  id,
  elevated = false,
  wide = false,
  narrow = false,
  className = "",
  children,
}: SectionBandProps) => {
  const widthClass = narrow
    ? "max-w-[900px]"
    : wide
      ? "max-w-[1300px]"
      : "";

  return (
    <section
      id={id}
      className={`section-band ${elevated ? "section-band--elevated" : ""} ${className}`.trim()}
    >
      <div
        className={`section-band__inner ${widthClass}`.trim()}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionBand;