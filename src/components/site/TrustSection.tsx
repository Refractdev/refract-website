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
  if (value === true) return <span className="text-white font-medium">✓</span>;
  if (value === false) return <span className="text-[#555555]">—</span>;
  return <span className="text-[#777777] text-[13px]">{value}</span>;
};

const TrustSection = () => {
  return (
    <SectionBand>
      <div className="mx-auto max-w-[900px]">
        <p className="tp-section-label">Credibility</p>
        <h2 className="text-tp-heading text-balance max-w-[680px] mt-1">
          Not heuristics. Not pattern matching.
        </h2>

        <p className="text-tp-desc mt-4 max-w-[640px]">
          Refract uses the TypeScript Compiler API and AST analysis — the same tools the TypeScript team uses. It doesn't guess. It knows.
        </p>

        <p className="text-body-sm mt-8 text-white">
          Refract doesn't replace your tools. It finishes their job.
        </p>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[#1f1f1f]">
                <th className="py-3 pr-4 text-[13px] font-medium text-[#888888]">Feature</th>
                <th className="py-3 px-3 text-[13px] font-medium text-white">Refract</th>
                <th className="py-3 px-3 text-[13px] font-medium text-[#888888]">Linter</th>
                <th className="py-3 px-3 text-[13px] font-medium text-[#888888]">Formatter</th>
                <th className="py-3 px-3 text-[13px] font-medium text-[#888888]">Vuln scanner</th>
                <th className="py-3 pl-3 text-[13px] font-medium text-[#888888]">AI coding tool</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.feature} className="border-b border-[#1f1f1f]/60 last:border-0">
                  <td className="py-3 pr-4 text-[15px] text-white">{row.feature}</td>
                  <td className="py-3 px-3 text-[15px]"><Cell value={row.refract} /></td>
                  <td className="py-3 px-3 text-[15px]"><Cell value={row.linter} /></td>
                  <td className="py-3 px-3 text-[15px]"><Cell value={row.formatter} /></td>
                  <td className="py-3 px-3 text-[15px]"><Cell value={row.vuln} /></td>
                  <td className="py-3 pl-3 text-[15px]"><Cell value={row.aiTool} /></td>
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