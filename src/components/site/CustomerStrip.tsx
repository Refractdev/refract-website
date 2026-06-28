interface CustomerStripProps {
  className?: string;
}

const platforms = [
  { name: "GitHub", logo: "GH" },
  { name: "GitLab", logo: "GL" },
  { name: "Cursor", logo: "CU" },
  { name: "Windsurf", logo: "WS" },
  { name: "VS Code", logo: "VS" },
  { name: "Claude", logo: "CL" },
];

const CustomerStrip = ({ className = "" }: CustomerStripProps) => {
  return (
    <div className={`mx-auto max-w-[1300px] px-5 md:px-6 ${className}`.trim()}>
      <p className="mb-6 text-center font-mono text-sm text-[#9a9a9a]">
        Integrated platforms
      </p>
      <div className="tp-marquee">
        <div className="tp-marquee__track">
          {[...platforms, ...platforms, ...platforms].map((p, i) => (
            <span key={`${p.name}-${i}`} className="tp-logo-chip">
              {p.logo}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerStrip;
