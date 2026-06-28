import { Code2, ShieldCheck, LineChart, Terminal, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SectionBand from "./SectionBand";

const features = [
  {
    icon: Code2,
    label: "TRANSFORM",
    title: "Detect debt. Ship the fix.",
    desc: "Scans for 7 structural issue types and turns accepted proposals into PRs automatically.",
  },
  {
    icon: ShieldCheck,
    label: "SECURITY",
    title: "Nothing ships with a secret in it.",
    desc: "Secret scanning, injection detection, dependency audits, and a configurable gate on every PR.",
  },
  {
    icon: LineChart,
    label: "MONITOR",
    title: "Know what every push costs you.",
    desc: "A real-time feed of issues introduced, resolved, and trending — per repo, per author, per AI tool.",
  },
  {
    icon: Terminal,
    label: "MCP + CLI",
    title: "Use it where you already work.",
    desc: "Native MCP support for Cursor, Windsurf, and Claude Desktop. GitHub Actions in one line.",
  },
  {
    icon: Building2,
    label: "GOVERN",
    title: "Set the rules. Enforce them automatically.",
    desc: "Guidelines as code, org-wide policies, and team analytics for teams shipping AI at scale.",
  },
];

const LogicFeatures = () => {
  return (
    <SectionBand>
      <div className="mx-auto max-w-[1100px]">
        <p className="tp-section-label">Features</p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <Card
                key={f.label}
                className="border border-[#1a1b1c] bg-transparent transition-colors duration-200 hover:border-[#333]"
              >
                <CardContent className="flex flex-col gap-3 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0d0d0d]">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#666]">
                      {f.label}
                    </p>
                    <h3 className="mt-1 text-base font-medium text-white">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#999]">
                      {f.desc}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </SectionBand>
  );
};

export default LogicFeatures;
