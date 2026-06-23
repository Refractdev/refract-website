import { Card } from "@/components/ui/card";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import SectionBand from "./SectionBand";

const tools = [
  {
    name: "refract_scan",
    description: "Run analysis on the current workspace. Returns issues JSON.",
    tier: "Free + Max",
  },
  {
    name: "refract_issues",
    description: "List open project issues from cloud — severity, file, patch.",
    tier: "Max",
  },
  {
    name: "refract_apply",
    description: "Apply one issue's patch to a file on disk.",
    tier: "Max",
  },
  {
    name: "refract_prepare_pr",
    description: "Accept issues and open a GitHub PR from the session.",
    tier: "Max",
  },
];

const MCPSection = () => {
  return (
    <SectionBand id="mcp" wide>
      <div className="mb-16 max-w-[640px]">
        <p className="section-label">Cursor MCP</p>
        <h2 className="text-section-title text-balance">Refract in Cursor</h2>
        <p className="text-body mt-4">
          Your agent sees what the repo already knows is broken. Install the MCP server and give Cursor the same memory as your Refract project.
        </p>
      </div>

      <StaggerContainer className="grid gap-4 md:grid-cols-4">
        {tools.map((tool) => (
          <StaggerItem key={tool.name}>
            <FadeIn direction="none">
              <Card className="flex h-full flex-col p-6">
                <p className="text-mono-label mb-2">{tool.tier}</p>
                <h3 className="font-mono text-headline-sm mb-2">{tool.name}</h3>
                <p className="text-body-sm flex-1">{tool.description}</p>
              </Card>
            </FadeIn>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <p className="text-body-sm mt-6 text-center text-ld-muted">
        Free: local scan only, 3/day. Max: cloud tools require API key.
      </p>
    </SectionBand>
  );
};

export default MCPSection;
