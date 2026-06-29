import PageShell from "@/components/site/PageShell";

const quickStartSteps = [
  {
    step: "1",
    title: "Connect a repository",
    desc: "Sign in with GitHub and select the repos you want Refract to monitor. You can connect one repo on the Free plan or unlimited repos on Early access.",
  },
  {
    step: "2",
    title: "Trigger a scan",
    desc: "Push new code or use the manual scan button. Refract analyses every commit for structural debt, security issues, and guideline violations.",
  },
  {
    step: "3",
    title: "Review proposals",
    desc: "Each issue includes a diff, context, and severity. Accept or reject proposals directly from the dashboard.",
  },
  {
    step: "4",
    title: "Ship the fix",
    desc: "Approved proposals become pull requests automatically. Refract handles the pipeline — you just review and merge.",
  },
];

const docSections = [
  {
    title: "Pipeline",
    desc: "Detect → Propose → Approve → Execute → Test → Document → Deliver. The full automation pipeline explained.",
    href: "/product#pipeline",
    icon: "→",
  },
  {
    title: "Security scanning",
    desc: "Secrets, injections, dependency audits, and the security gate. Keep vulnerabilities out of production.",
    href: "/product#security",
    icon: "→",
  },
  {
    title: "Analytics",
    desc: "Understand trends, track issue velocity, and measure team impact with automatic analytics.",
    href: "/product#analytics",
    icon: "→",
  },
  {
    title: "Guidelines & policies",
    desc: "Write rules as code in .refract/guidelines.json. Enforce org-wide policies on every scan.",
    href: "/product#govern",
    icon: "→",
  },
  {
    title: "MCP integration",
    desc: "Use Refract from Cursor, Windsurf, Claude Desktop, Cline, and any MCP-compatible agent.",
    href: "/product#mcp+cli",
    icon: "→",
  },
  {
    title: "CLI reference",
    desc: "Every command, flag, and exit code for the refract CLI tool.",
    href: "/product#mcp+cli",
    icon: "→",
  },
];

const Documentation = () => {
  return (
    <PageShell
      label="Documentation"
      title="Refract Docs"
      description="Everything you need to connect, scan, and ship with Refract."
      maxWidth={900}
    >
      <div className="rounded-xl border border-[#1a1a1a] bg-[#0d0d0d] p-6 md:p-8">
        <h2 className="text-lg font-medium text-white">Quick start</h2>
        <p className="mt-2 text-sm text-[#888888]">
          Get up and running with Refract in 4 steps.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {quickStartSteps.map((s) => (
            <div key={s.step} className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-black">
                {s.step}
              </div>
              <div>
                <h3 className="text-sm font-medium text-white">{s.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-[#888888]">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-medium text-white">Core features</h2>
        <p className="mt-1 text-sm text-[#888888]">
          Understand what Refract does and how it fits into your workflow.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {docSections.map((section) => (
          <a
            key={section.title}
            href={section.href}
            className="group block rounded-xl border border-[#1a1a1a] bg-[#0d0d0d] p-5 transition-colors hover:border-[#2a2a2a]"
          >
            <h3 className="text-sm font-medium text-white group-hover:text-white/90">
              {section.title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-[#888888]">
              {section.desc}
            </p>
            <span className="mt-3 inline-block text-sm text-white opacity-0 transition-opacity group-hover:opacity-100">
              Read more {section.icon}
            </span>
          </a>
        ))}
      </div>

      <div className="rounded-xl border border-[#1a1a1a] bg-[#0d0d0d] p-6 md:p-8">
        <h2 className="text-lg font-medium text-white">Need help?</h2>
        <p className="mt-2 text-sm leading-relaxed text-[#888888]">
          Check the{" "}
          <a href="/help" className="text-white underline hover:no-underline">
            Help Center
          </a>{" "}
          for FAQs and troubleshooting guides. For urgent issues, email{" "}
          <a href="mailto:refractcode@gmail.com" className="text-white underline hover:no-underline">
            refractcode@gmail.com
          </a>.
        </p>
      </div>
    </PageShell>
  );
};

export default Documentation;
