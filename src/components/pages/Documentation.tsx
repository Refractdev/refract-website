import PageShell from "@/components/site/PageShell";
import { Card } from "@/components/ui/card";

const docSections = [
  { title: "Quick start", description: "Connect a repo, run your first scan, review proposals." },
  { title: "Transforms", description: "Detect → Propose → Approve → Execute → Test → Document → Deliver." },
  { title: "Security", description: "Secret scanning, vulnerability detection, security gate configuration." },
  { title: "Activity", description: "Commit feed, push delta, drift detection, alerts." },
  { title: "Guidelines", description: "Rules as code, policies, exception workflow." },
  { title: "CLI reference", description: "Every command, flag, and exit code." },
  { title: "MCP reference", description: "Available tools, setup, and agent configuration." },
  { title: "GitHub Action", description: "CI gate setup, fail thresholds, mode options." },
  { title: "API reference", description: "REST API endpoints and authentication." },
];

const Documentation = () => {
  return (
    <PageShell
      label="Documentation"
      title="Refract Docs"
      description="Everything you need to connect, scan, and ship."
      maxWidth={900}
    >
      <p className="text-body text-ld-tertiary mb-10">
        Refract scans your repo after every push. Finds what AI left behind — structural debt, security gaps, missing tests — and proposes fixes as diffs. You approve. Refract opens the PR.
      </p>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {docSections.map((section) => (
          <Card key={section.title} className="p-5">
            <h3 className="text-headline-sm mb-1">{section.title}</h3>
            <p className="text-body-sm text-ld-tertiary">{section.description}</p>
          </Card>
        ))}
      </div>

      <div className="mt-12 border-t border-ld-border pt-8">
        <p className="text-body-sm text-ld-muted">
          AI writes fast. Refract makes it shippable.
        </p>
      </div>
    </PageShell>
  );
};

export default Documentation;