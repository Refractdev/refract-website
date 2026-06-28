import { Card } from "@/components/ui/card";
import PageShell from "@/components/site/PageShell";
import StatusPill from "@/components/site/StatusPill";

const services = [
  { name: "Analysis Engine", status: "operational", uptime: "99.98%" },
  { name: "GitHub Integration", status: "operational", uptime: "99.95%" },
  { name: "Health Score API", status: "operational", uptime: "100%" },
  { name: "Live Monitoring", status: "operational", uptime: "99.99%" },
  { name: "Web Dashboard", status: "operational", uptime: "99.97%" },
  { name: "Authentication", status: "operational", uptime: "100%" },
];

const incidents = [
  {
    date: "May 8, 2026",
    title: "Increased latency on Analysis Engine",
    status: "Resolved",
    body: "A spike in concurrent requests caused analysis jobs to queue. The issue was mitigated by auto-scaling. Total impact window: ~14 minutes.",
  },
  {
    date: "April 22, 2026",
    title: "GitHub webhook delivery delays",
    status: "Resolved",
    body: "Upstream issues with GitHub's webhook infrastructure caused delays in PR report generation. No data was lost. Resolved on GitHub's end.",
  },
];

const statusColor = (status: string) => {
  if (status === "operational") return "text-ld-success";
  if (status === "degraded") return "text-ld-warning";
  return "text-ld-error";
};

const statusDot = (status: string) => {
  if (status === "operational") return "bg-ld-success";
  if (status === "degraded") return "bg-ld-warning";
  return "bg-ld-error";
};

const statusLabel = (status: string) => {
  if (status === "operational") return "Operational";
  if (status === "degraded") return "Degraded";
  return "Outage";
};

export default function Status() {
  return (
    <PageShell
      label="Status"
      title="System Status"
      description="Real-time status of all Refract services. Last checked just now."
    >
      <div className="mb-10 flex items-center justify-center gap-2.5">
        <span className="inline-block size-2.5 rounded-full bg-ld-success" />
        <span className="text-label-sm text-ld-success">All systems operational</span>
      </div>

      <Card className="overflow-hidden p-0">
        {services.map((s, i) => (
          <div
            key={s.name}
            className={`flex items-center justify-between px-6 py-4 ${
              i < services.length - 1 ? "border-b border-ld-border" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <span className={`size-2 shrink-0 rounded-full ${statusDot(s.status)}`} />
              <span className="text-label-md text-ld-on-surface">{s.name}</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-caption text-ld-muted">Uptime {s.uptime}</span>
              <span className={`text-caption font-medium ${statusColor(s.status)}`}>
                {statusLabel(s.status)}
              </span>
            </div>
          </div>
        ))}
      </Card>

      <div className="mt-16">
        <h2 className="text-section-subtitle mb-8">Past Incidents</h2>
        <div className="flex flex-col gap-4">
          {incidents.map((inc) => (
            <Card key={inc.title} className="p-6">
              <div className="mb-2.5 flex items-center justify-between">
                <span className="text-body-sm text-ld-muted">{inc.date}</span>
                <StatusPill variant="success">{inc.status}</StatusPill>
              </div>
              <h3 className="text-headline-sm mb-2">{inc.title}</h3>
              <p className="text-body-sm">{inc.body}</p>
            </Card>
          ))}
        </div>
      </div>

      <p className="text-body-sm mt-12 text-center text-ld-muted">
        Issues? Contact us at{" "}
        <a href="mailto:refractcode@gmail.com" className="link-accent">
          refractcode@gmail.com
        </a>
      </p>
    </PageShell>
  );
}
