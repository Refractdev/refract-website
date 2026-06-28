import SectionBand from "./SectionBand";

const rows = [
  {
    feature: "Detects structural debt",
    refract: true,
    linter: "Partial",
    formatter: false,
    vuln: false,
    aiTool: false,
  },
  {
    feature: "Proposes + diffs fixes",
    refract: true,
    linter: false,
    formatter: false,
    vuln: false,
    aiTool: "Partial",
  },
  {
    feature: "Requires human approval",
    refract: true,
    linter: false,
    formatter: false,
    vuln: false,
    aiTool: false,
  },
  {
    feature: "Generates tests",
    refract: true,
    linter: false,
    formatter: false,
    vuln: false,
    aiTool: "Partial",
  },
  {
    feature: "Creates PR",
    refract: true,
    linter: false,
    formatter: false,
    vuln: "Partial",
    aiTool: false,
  },
  {
    feature: "Safety gate before merge",
    refract: true,
    linter: false,
    formatter: false,
    vuln: true,
    aiTool: false,
  },
  {
    feature: "Works with any AI tool",
    refract: true,
    linter: true,
    formatter: true,
    vuln: true,
    aiTool: false,
  },
];

const Cell = ({ value }: { value: boolean | string }) => {
  if (value === true) return <span className="text-ld-on-surface">✓</span>;
  if (value === false) return <span className="text-ld-muted">—</span>;
  return <span className="text-ld-tertiary text-[13px]">{value}</span>;
};

const TrustSection = () => {
  return (
    <SectionBand>
      <div className="mx-auto max-w-[900px]">
        <p className="tp-section-label">Credibility</p>
        <h2 className="text-section-title text-balance max-w-[680px]">
          Not heuristics. Not pattern matching.
        </h2>

        <p className="text-body mt-4 max-w-[640px] text-ld-tertiary">
          Refract uses the TypeScript Compiler API and AST analysis — the same tools the TypeScript team uses. It doesn't guess. It knows.
        </p>

        <p className="text-body-sm mt-8 text-ld-on-surface">
          Refract doesn't replace your tools. It finishes their job.
        </p>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-ld-border">
                <th className="py-3 pr-4 text-label-sm text-ld-muted font-medium">Feature</th>
                <th className="py-3 px-3 text-label-sm text-ld-on-surface font-medium">Refract</th>
                <th className="py-3 px-3 text-label-sm text-ld-muted font-medium">Linter</th>
                <th className="py-3 px-3 text-label-sm text-ld-muted font-medium">Formatter</th>
                <th className="py-3 px-3 text-label-sm text-ld-muted font-medium">Vuln scanner</th>
                <th className="py-3 pl-3 text-label-sm text-ld-muted font-medium">AI coding tool</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.feature} className="border-b border-ld-border/50 last:border-0">
                  <td className="py-3 pr-4 text-body-sm text-ld-on-surface">{row.feature}</td>
                  <td className="py-3 px-3 text-body-sm"><Cell value={row.refract} /></td>
                  <td className="py-3 px-3 text-body-sm"><Cell value={row.linter} /></td>
                  <td className="py-3 px-3 text-body-sm"><Cell value={row.formatter} /></td>
                  <td className="py-3 px-3 text-body-sm"><Cell value={row.vuln} /></td>
                  <td className="py-3 pl-3 text-body-sm"><Cell value={row.aiTool} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SectionBand>
  );
};

export default TrustSection;