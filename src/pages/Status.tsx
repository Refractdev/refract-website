import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";

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

const dot = (status: string) => {
  if (status === "operational") return { bg: "#34d89a", shadow: "0 0 8px rgba(52,216,154,0.5)" };
  if (status === "degraded") return { bg: "#f59e0b", shadow: "0 0 8px rgba(245,158,11,0.5)" };
  return { bg: "#f04c67", shadow: "0 0 8px rgba(240,76,103,0.5)" };
};

const label = (status: string) => {
  if (status === "operational") return "Operational";
  if (status === "degraded") return "Degraded";
  return "Outage";
};

export default function Status() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-canvas)", color: "var(--color-ink)", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <main style={{ flex: 1, paddingTop: 128, paddingBottom: 96 }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px" }}>

          {/* Header */}
          <div className="animate-fade-up" style={{ marginBottom: 56, textAlign: "center" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 20 }}>
              <span style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#34d89a", boxShadow: "0 0 12px rgba(52,216,154,0.6)", display: "inline-block" }} />
              <span className="text-caption-upper" style={{ color: "#34d89a" }}>All systems operational</span>
            </div>
            <h1 className="text-display-lg" style={{ color: "var(--color-ink)" }}>System Status</h1>
            <p style={{ marginTop: 16, fontSize: 15, color: "var(--color-body)" }}>
              Real-time status of all Refract services. Last checked just now.
            </p>
          </div>

          {/* Services */}
          <div className="animate-fade-up" style={{ animationDelay: "80ms", borderRadius: 12, border: "1px solid var(--color-hairline)", overflow: "hidden", backgroundColor: "var(--color-surface-card)" }}>
            {services.map((s, i) => {
              const d = dot(s.status);
              return (
                <div
                  key={s.name}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "18px 24px",
                    borderBottom: i < services.length - 1 ? "1px solid var(--color-hairline)" : "none",
                    transition: "background-color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--color-surface-hover)")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: d.bg, boxShadow: d.shadow, flexShrink: 0 }} />
                    <span style={{ fontSize: 14, fontWeight: 500, color: "var(--color-ink)" }}>{s.name}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
                    <span style={{ fontSize: 12, color: "var(--color-muted)" }}>Uptime {s.uptime}</span>
                    <span style={{ fontSize: 12, fontWeight: 600, color: d.bg }}>{label(s.status)}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Past incidents */}
          <div className="animate-fade-up" style={{ animationDelay: "160ms", marginTop: 64 }}>
            <h2 className="text-display-sm" style={{ color: "var(--color-ink)", marginBottom: 32 }}>Past Incidents</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {incidents.map((inc) => (
                <div key={inc.title} style={{ padding: "24px", borderRadius: 12, border: "1px solid var(--color-hairline)", backgroundColor: "var(--color-surface-card)" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                    <span style={{ fontSize: 13, color: "var(--color-muted)" }}>{inc.date}</span>
                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#34d89a", backgroundColor: "rgba(52,216,154,0.1)", padding: "3px 8px", borderRadius: 4 }}>{inc.status}</span>
                  </div>
                  <h3 style={{ fontSize: 15, fontWeight: 600, color: "var(--color-ink)", marginBottom: 8 }}>{inc.title}</h3>
                  <p style={{ fontSize: 14, color: "var(--color-body)", lineHeight: 1.65 }}>{inc.body}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="animate-fade-up" style={{ animationDelay: "240ms", marginTop: 48, fontSize: 13, color: "var(--color-muted)", textAlign: "center" }}>
            Issues? Contact us at{" "}
            <a href="mailto:refractcode@gmail.com" style={{ color: "var(--color-primary)", textDecoration: "underline", textUnderlineOffset: 3 }}>
              refractcode@gmail.com
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
