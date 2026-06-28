interface IntegrationCard {
  name: string;
  category: string;
  logo: string;
  status: "Auto Sync" | "File Import" | "Coming Soon";
  href: string;
}

const integrations: IntegrationCard[] = [
  { name: "GitHub", category: "Git", logo: "GH", status: "Auto Sync", href: "/integrations#github" },
  { name: "GitLab", category: "Git", logo: "GL", status: "Auto Sync", href: "/integrations#github" },
  { name: "Bitbucket", category: "Git", logo: "BB", status: "Coming Soon", href: "#" },
  { name: "Cursor", category: "MCP", logo: "CU", status: "Auto Sync", href: "/integrations#mcp" },
  { name: "Windsurf", category: "MCP", logo: "WS", status: "Auto Sync", href: "/integrations#mcp" },
  { name: "Claude Desktop", category: "MCP", logo: "CL", status: "Auto Sync", href: "/integrations#mcp" },
  { name: "Cline", category: "MCP", logo: "CE", status: "Auto Sync", href: "/integrations#mcp" },
  { name: "Continue", category: "MCP", logo: "CO", status: "Auto Sync", href: "/integrations#mcp" },
  { name: "Lovable", category: "MCP", logo: "LO", status: "Coming Soon", href: "#" },
  { name: "VS Code", category: "MCP", logo: "VS", status: "Auto Sync", href: "/integrations#mcp" },
  { name: "refract check", category: "CLI", logo: "~", status: "Auto Sync", href: "/integrations#cli" },
  { name: "refract scan", category: "CLI", logo: "~", status: "Auto Sync", href: "/integrations#cli" },
  { name: "refract pr", category: "CLI", logo: "~", status: "Auto Sync", href: "/integrations#cli" },
  { name: "GitHub Action", category: "CI", logo: "GA", status: "Auto Sync", href: "/integrations#ci" },
  { name: "Manual API", category: "CI", logo: "API", status: "File Import", href: "/docs" },
];

const categories = ["All", "Git", "MCP", "CLI", "CI"];

const statusColors: Record<string, string> = {
  "Auto Sync": "text-[#11ff99]",
  "File Import": "text-[#ffc53d]",
  "Coming Soon": "text-[#888888]",
};

const Integrations = () => {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-[1300px] px-5 md:px-6">
          <div className="mx-auto max-w-[720px] text-center">
            <p className="tp-section-label">Integrations</p>
            <h1 className="text-tp-heading text-balance mt-1">
              Can you auto-connect your tools to Refract?
            </h1>
            <p className="text-tp-desc mt-4 max-w-[560px] mx-auto">
              Connect your git provider, editor, or CI pipeline to Refract and scan your code automatically.
            </p>
            <a
              href="#"
              className="mt-6 inline-block text-sm font-medium text-[#888888] transition-colors hover:text-white"
            >
              Can't find your platform? Request it
            </a>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-[1300px] px-5 md:px-6">
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  cat === "All"
                    ? "bg-white text-black"
                    : "bg-[#1a1a1a] text-[#888888] hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {integrations.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group flex items-center gap-4 rounded-xl border border-[#1a1a1a] bg-[#0d0d0d] p-5 transition-colors hover:border-[#2f2f2f]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[#1a1a1a] bg-[#121212] text-sm font-medium text-white">
                  {item.logo}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-white">{item.name}</p>
                  <p className={`text-xs mt-0.5 ${statusColors[item.status] || "text-[#888888]"}`}>
                    {item.status}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-[#888888]">
              Can't find your platform?{" "}
              <a href="/contact" className="text-white underline transition-colors hover:text-white/80">
                Request integration
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Integrations;
