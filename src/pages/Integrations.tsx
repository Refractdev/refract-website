import { MessageSquare, Github, MousePointer2, Code2, Blocks, Sailboat } from "lucide-react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";

const integrations = [
  {
    name: "Slack",
    description: "Get code quality alerts and analysis summaries directly in your Slack workspace.",
    icon: MessageSquare,
    comingSoon: false,
  },
  {
    name: "GitHub",
    description: "Automatically analyze pull requests and surface issues before merging.",
    icon: Github,
    comingSoon: false,
  },
  {
    name: "Cursor",
    description: "Connect Refract analysis directly to your Cursor AI coding environment.",
    icon: MousePointer2,
    comingSoon: true,
  },
  {
    name: "VS Code",
    description: "View Refract issues and suggestions inline within Visual Studio Code.",
    icon: Code2,
    comingSoon: true,
  },
  {
    name: "JetBrains IDEs",
    description: "Integrate with IntelliJ, WebStorm, and other JetBrains IDEs.",
    icon: Blocks,
    comingSoon: true,
  },
  {
    name: "Windsurf",
    description: "Integrate Refract analysis with Windsurf's AI-powered development environment.",
    icon: Sailboat,
    comingSoon: true,
  },
];

const Integrations = () => {
  return (
    <main className="page-enter" style={{ minHeight: "100vh", backgroundColor: "var(--color-theme-bg)", color: "var(--color-theme-text)" }}>
      <Navbar />

      <div className="section" style={{ paddingTop: 128, paddingBottom: 80 }}>
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-16 max-w-[680px]">
            <p className="mb-2 font-serif italic" style={{ fontSize: 15, color: "var(--color-theme-text-sec)" }}>
              Integrations
            </p>
            <h1 className="text-balance" style={{ fontSize: "clamp(28px, 5vw, 38px)", fontWeight: 500, lineHeight: 1.15, letterSpacing: "-0.03em", color: "var(--color-theme-text)" }}>
              Connect Refract to your workflow.
            </h1>
            <p className="mt-4" style={{ fontSize: 15, color: "var(--color-theme-text-sec)", lineHeight: 1.6, maxWidth: 560 }}>
              Plug Refract into the tools you already use.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {integrations.map((item, i) => (
              <div
                key={item.name}
                className="anim-fade-up relative flex flex-col rounded-md p-6"
                style={{
                  background: "var(--color-theme-card)",
                  border: "1px solid var(--color-theme-border)",
                  animationDelay: `${i * 60}ms`,
                }}
              >
                <item.icon className="mb-3" style={{ width: 24, height: 24, color: "var(--color-theme-text)" }} />
                <div className="flex items-center gap-2">
                  <h3 style={{ fontSize: 16, fontWeight: 500, color: "var(--color-theme-text)" }}>
                    {item.name}
                  </h3>
                  {item.comingSoon && (
                    <span
                      className="rounded-full px-2 py-0.5 text-xs font-medium"
                      style={{ background: "rgba(237,236,236,0.08)", color: "var(--color-theme-text-sec)" }}
                    >
                      Coming soon
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm" style={{ color: "var(--color-theme-text-sec)", lineHeight: 1.6 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Integrations;
