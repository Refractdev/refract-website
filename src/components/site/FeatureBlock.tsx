import { ReactNode } from "react";

interface FeatureBlockProps {
  label: string;
  title: string;
  description: string;
  soon?: boolean;
  imagePosition?: "left" | "right";
  image?: ReactNode;
  children?: ReactNode;
  className?: string;
  wide?: boolean;
}

const FeatureBlock = ({
  label,
  title,
  description,
  soon = false,
  imagePosition = "right",
  image,
  children,
  className = "",
  wide = false,
}: FeatureBlockProps) => {
  const content = (
    <div>
      <p className="tp-section-label flex items-center gap-2">
        {label}
        {soon && <span className="tp-badge tp-badge-soon">Soon</span>}
      </p>
      <h2 className="text-tp-heading text-balance mt-2 max-w-[540px]">
        {title}
      </h2>
      <p className="text-tp-desc mt-4 max-w-[480px]">
        {description}
      </p>
    </div>
  );

  const media = image || (children ? <div>{children}</div> : null);

  return (
    <section className={`tp-feature-section ${className}`}>
      <div className={`mx-auto px-5 md:px-6 ${wide ? "max-w-[1500px]" : "max-w-[1300px]"}`}>
        <div className="tp-feature-grid">
          {imagePosition === "left" ? (
            <>
              <div className="order-2 lg:order-1">{media}</div>
              <div className="order-1 lg:order-2">{content}</div>
            </>
          ) : (
            <>
              <div>{content}</div>
              <div>{media}</div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeatureBlock;
