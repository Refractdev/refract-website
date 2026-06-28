import PageShell from "@/components/site/PageShell";
import { Card } from "@/components/ui/card";

const Integrations = () => {
  return (
    <>
      <PageShell
        label="Integrations"
        title="Works where you ship."
        description="GitHub, MCP, CLI, CI. One connection, every surface."
        maxWidth={1200}
      >
        <section id="github" className="mb-16">
          <h2 className="text-headline-lg mb-6">GitHub</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6">
              <h3 className="text-headline-md mb-2">OAuth</h3>
              <p className="text-body-sm text-ld-tertiary">
                Connects Refract to your GitHub account. Read-only access to clone repos. Write access limited to opening PRs you've approved. You control what Refract can see and do.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-headline-md mb-2">Push webhook (Pro)</h3>
              <p className="text-body-sm text-ld-tertiary">
                Every push to a connected repo triggers an automatic scan. No manual rescanning. No polling. Push → scan → review → approve → PR.
              </p>
            </Card>
          </div>
        </section>

        <section id="mcp" className="mb-16">
          <h2 className="text-headline-lg mb-6">MCP (Model Context Protocol)</h2>
          <p className="text-body text-ld-tertiary mb-6 max-w-[640px]">
            Refract works inside Cursor, Windsurf, Claude, Cline, Continue, and any MCP client. Your agent can scan and propose. Executing and opening PRs require human approval — unless you've configured auto-approve rules.
          </p>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "refract_scan", desc: "Run Detect + Propose locally" },
              { name: "refract_issues", desc: "List open issues for a project" },
              { name: "refract_apply", desc: "Preview or execute a proposal" },
              { name: "refract_prepare_pr", desc: "Open PR for accepted proposals (Pro)" },
              { name: "refract_explain", desc: "Explain an issue" },
              { name: "refract_security", desc: "Security report for a project" },
            ].map((tool) => (
              <Card key={tool.name} className="p-5">
                <p className="font-mono text-label-md mb-1">{tool.name}</p>
                <p className="text-body-sm text-ld-tertiary">{tool.desc}</p>
              </Card>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-ld-border bg-ld-surface p-4">
            <p className="text-label-sm mb-2">Setup</p>
            <pre className="text-body-sm text-ld-tertiary overflow-x-auto">
{`{
  "mcpServers": {
    "refract": {
      "command": "npx",
      "args": ["@refract/mcp"]
    }
  }
}`}
            </pre>
          </div>
        </section>

        <section id="cli" className="mb-16">
          <h2 className="text-headline-lg mb-6">CLI</h2>
          <div className="rounded-lg border border-ld-border bg-ld-surface p-4 mb-6">
            <pre className="text-body-sm text-ld-tertiary">npm install -g @refract/cli</pre>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {[
              { cmd: "refract auth login / refract auth status", desc: "Authenticate and check connection" },
              { cmd: "refract check <path>", desc: "Run detection on a local path" },
              { cmd: "refract issues --project <id>", desc: "List issues for a project" },
              { cmd: "refract security --project <id>", desc: "Security report for a project" },
              { cmd: "refract apply <id> --project <id>", desc: "Apply a specific proposal" },
              { cmd: "refract pr --project <id>", desc: "Open a PR for accepted proposals (Pro)" },
            ].map((item) => (
              <div key={item.cmd} className="border-t border-ld-border pt-3">
                <p className="font-mono text-body-sm">{item.cmd}</p>
                <p className="text-body-sm text-ld-tertiary mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="ci">
          <h2 className="text-headline-lg mb-6">CI/CD</h2>
          <p className="text-body text-ld-tertiary mb-6 max-w-[640px]">
            GitHub Action for security gate and scan in your pipeline. Configurable fail threshold (e.g. fail on High+ findings).
          </p>

          <div className="rounded-lg border border-ld-border bg-ld-surface p-4">
            <pre className="text-body-sm text-ld-tertiary overflow-x-auto">
{`steps:
  - uses: refract-hq/action@v1
    with:
      mode: security-gate
      fail-on: high`}
            </pre>
          </div>
        </section>
      </PageShell>
    </>
  );
};

export default Integrations;