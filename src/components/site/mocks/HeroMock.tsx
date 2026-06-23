import { useEffect, useState } from "react";

const navGroups = [
  { label: null, items: ["Inbox", "My issues", "Reviews", "Pulse"] },
  { label: "Workspace", items: ["Initiatives", "Projects", "More"] },
];

const favorites = [
  "Auth boundary refactor",
  "Agent patch queue",
  "Quality gates",
  "Cursor MCP",
];

const allActivity = [
  {
    who: "Refract",
    body: "created the issue via push analysis on behalf of alex",
    time: "2min ago",
  },
  {
    who: "Triage Intelligence",
    body: "added the labels Performance and React",
    time: "2min ago",
  },
  {
    who: "alex",
    body: "This repeats in the table toolbar and the activity drawer.",
    time: "4 min ago",
  },
  {
    who: "Refract",
    body: "changed 2 files · Draft PR awaiting your review",
    time: "just now",
  },
];

const allAgentLog = [
  "Connected by alex · 2 min ago",
  "Examining the component boundary...",
  "Searching accepted refactor decisions...",
  "Found matching pattern in project memory",
  "Changed 2 files · Draft PR awaiting review",
];

const statusSequence = ["Todo", "In Progress", "In Progress"] as const;

const Avatar = ({ label }: { label: string }) => (
  <div
    className="flex size-6 shrink-0 items-center justify-center rounded-full border border-ld-border bg-ld-surface text-[9px] font-medium text-ld-muted"
    aria-hidden
  >
    {label.slice(0, 1).toUpperCase()}
  </div>
);

const HeroMock = () => {
  const [step, setStep] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setStep(8);
      return;
    }

    const timer = setInterval(() => {
      setStep((s) => (s >= 8 ? 0 : s + 1));
    }, 1500);

    return () => clearInterval(timer);
  }, [reducedMotion]);

  const activityCount = reducedMotion ? allActivity.length : Math.min(step + 1, allActivity.length);
  const agentLogCount = reducedMotion
    ? allAgentLog.length
    : Math.min(Math.max(step - 2, 1), allAgentLog.length);
  const statusIndex = reducedMotion ? 2 : Math.min(Math.floor(step / 3), 2);
  const status = statusSequence[statusIndex];

  const visibleActivity = allActivity.slice(0, activityCount);
  const visibleAgentLog = allAgentLog.slice(0, agentLogCount);

  return (
    <div className="relative min-h-[620px] bg-ld-surface text-caption">
      <div className="grid min-h-[620px] grid-cols-1 md:grid-cols-[196px_1fr_220px]">
        <aside className="hidden border-r border-ld-border bg-ld-panel px-3 py-4 md:block">
          <p className="mb-4 px-2 text-label-sm text-ld-on-surface">Refract</p>

          <div className="space-y-5">
            {navGroups.map((group) => (
              <div key={group.items[0]} className="space-y-1">
                {group.label ? (
                  <p className="px-2 text-[10px] text-ld-muted">{group.label}</p>
                ) : null}
                {group.items.map((item) => (
                  <div
                    key={item}
                    className={`rounded-sm px-2 py-1.5 ${
                      item === "Projects"
                        ? "bg-ld-overlay text-ld-on-surface"
                        : "text-ld-muted"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-6 border-t border-ld-border pt-4">
            <p className="mb-2 px-2 font-mono text-[10px] uppercase text-ld-muted">Favorites</p>
            <div className="space-y-1">
              {favorites.map((item) => (
                <div key={item} className="truncate rounded-sm px-2 py-1.5 text-ld-muted">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </aside>

        <main className="min-w-0 border-r border-ld-border">
          <div className="border-b border-ld-border px-5 py-4">
            <p className="mb-2 font-mono text-[11px] text-ld-muted">REF-142 · 02/24</p>
            <h3 className="text-headline-sm max-w-[640px]">
              Prop drilling blocks the Table component refactor
            </h3>
            <p className="text-body-sm mt-2 max-w-[640px] text-ld-tertiary">
              Props pass through four component layers before reaching the toolbar. Refract found the
              same pattern in three related files.
            </p>
          </div>

          <section className="p-5">
            <div className="rounded-sm border border-ld-border bg-ld-panel">
              <div className="border-b border-ld-border px-4 py-3">
                <p className="text-label-sm text-ld-on-surface">Activity</p>
              </div>
              <div className="divide-y divide-ld-border">
                {visibleActivity.map((item, i) => (
                  <div
                    key={`${item.who}-${item.time}`}
                    className={`flex gap-3 px-4 py-3 transition-opacity duration-500 ${
                      i === visibleActivity.length - 1 && !reducedMotion ? "animate-fade-up" : ""
                    }`}
                  >
                    <Avatar label={item.who} />
                    <div className="min-w-0">
                      <p className="text-caption text-ld-tertiary">
                        <span className="font-medium text-ld-on-surface">{item.who}</span>{" "}
                        {item.body} · <span className="text-ld-muted">{item.time}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <aside className="hidden border-l border-ld-border p-4 md:block">
          <div className="space-y-4">
            <div>
              <p className="mb-2 text-[11px] text-ld-muted">Status</p>
              <div className="flex flex-wrap gap-2">
                <span
                  className={`mock-pill transition-colors duration-300 ${
                    status === "In Progress" ? "mock-pill--active" : ""
                  }`}
                >
                  {status}
                </span>
                <span className="mock-pill">High</span>
              </div>
            </div>
            {[
              ["Labels", "Performance", "React"],
              ["Cycle", "Cycle 24", ""],
              ["Project", "Core Quality", ""],
            ].map(([label, value, value2]) => (
              <div key={label}>
                <p className="mb-2 text-[11px] text-ld-muted">{label}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="mock-pill">{value}</span>
                  {value2 ? <span className="mock-pill">{value2}</span> : null}
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>

      <div className="absolute bottom-6 right-6 z-10 w-[280px] rounded-md border border-ld-border bg-ld-overlay">
        <div className="flex items-center justify-between border-b border-ld-border px-3 py-2">
          <p className="text-label-sm text-ld-on-surface">Refract Agent</p>
          <span className="text-[10px] text-ld-muted">Opus 4.8</span>
        </div>
        <div className="space-y-1.5 px-3 py-2.5 font-mono text-[10px] leading-relaxed text-ld-tertiary">
          {visibleAgentLog.map((line, i) => (
            <p
              key={line}
              className={
                i === visibleAgentLog.length - 1
                  ? "text-ld-success"
                  : i === visibleAgentLog.length - 2
                    ? "text-ld-primary"
                    : undefined
              }
            >
              {line}
            </p>
          ))}
        </div>
        <div className="border-t border-ld-border px-3 py-2.5">
          <p className="text-[10px] text-ld-muted">Tell Refract what to do next…</p>
        </div>
      </div>
    </div>
  );
};

export default HeroMock;
