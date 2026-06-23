interface CustomerStripProps {
  className?: string;
}

const stack = ["GitHub", "Cursor", "TypeScript", "React", "Node.js", "CI/CD"];

const CustomerStrip = ({ className = "" }: CustomerStripProps) => {
  return (
    <div className={`mx-auto max-w-[1200px] px-6 ${className}`.trim()}>
      <p className="mb-6 text-center text-body-sm text-ld-muted">
        Works with the stack you already ship on.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
        {stack.map((name) => (
          <span
            key={name}
            className="text-label-md text-ld-muted opacity-40 transition-opacity hover:opacity-60"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CustomerStrip;
