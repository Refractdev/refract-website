interface CustomerStripProps {
  className?: string;
}

const stack = ["GitHub", "Cursor", "TypeScript", "React", "Node.js", "CI/CD"];

const CustomerStrip = ({ className = "" }: CustomerStripProps) => {
  return (
    <div className={`mx-auto max-w-[1300px] px-5 md:px-6 ${className}`.trim()}>
      <p className="mb-6 text-center font-mono text-sm text-[#9a9a9a]">
        Integrated platforms
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