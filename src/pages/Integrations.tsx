import { MessageSquare, Github, MousePointer2, Code2, Blocks, Sailboat } from "lucide-react";
import { Card } from "@/components/ui/card";
import PageShell from "@/components/site/PageShell";

const integrations = [
  { name: "Slack", description: "Get code quality alerts and analysis summaries directly in your Slack workspace.", icon: MessageSquare, comingSoon: false },
  { name: "GitHub", description: "Automatically analyze pull requests and surface issues before merging.", icon: Github, comingSoon: false },
  { name: "Cursor", description: "Connect Refract analysis directly to your Cursor AI coding environment.", icon: MousePointer2, comingSoon: true },
  { name: "VS Code", description: "View Refract issues and suggestions inline within Visual Studio Code.", icon: Code2, comingSoon: true },
  { name: "JetBrains IDEs", description: "Integrate with IntelliJ, WebStorm, and other JetBrains IDEs.", icon: Blocks, comingSoon: true },
  { name: "Windsurf", description: "Integrate Refract analysis with Windsurf's AI-powered development environment.", icon: Sailboat, comingSoon: true },
];

const Integrations = () => {
  return (
    <PageShell
      label="Integrations"
      title="Connect Refract to your workflow."
      description="Plug Refract into the tools you already use."
      maxWidth={1200}
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {integrations.map((item) => (
          <Card key={item.name} className="flex flex-col p-5">
            <item.icon className="mb-3 size-5 text-ld-tertiary" />
            <div className="flex items-center gap-2">
              <h3 className="text-headline-sm">{item.name}</h3>
              {item.comingSoon && <span className="chip">Coming soon</span>}
            </div>
            <p className="text-body-sm mt-2">{item.description}</p>
          </Card>
        ))}
      </div>
    </PageShell>
  );
};

export default Integrations;
