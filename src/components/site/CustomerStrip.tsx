interface CustomerStripProps {
  className?: string;
}

const stack = ["GitHub", "Cursor", "TypeScript", "React", "Node.js", "CI/CD"];

const CustomerStrip = ({ className = "" }: CustomerStripProps) => {
  return (
    <div className={`mx-auto max-w-[1200px] px-6 ${className}`.trim()}>
      <p className="mb-8 text-center text-body-sm text-ld-muted">
        Works with the stack you already ship on.
      </p>
      <div className="tp-logos">
        {stack.map((name) => (
          <span key={name} className="tp-logo-chip">
            {name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CustomerStrip;
