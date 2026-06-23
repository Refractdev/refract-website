import { ArrowRight } from "lucide-react";

const BeforeAfter = () => {
  return (
    <section
      style={{
        backgroundColor: "var(--color-canvas)",
        paddingTop: 80,
        paddingBottom: 80,
        borderTop: "1px solid var(--color-hairline)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative" }}>
        {/* Header */}
        <div className="text-center animate-fade-up" style={{ marginBottom: 56 }}>
          <span className="section-label" style={{ marginBottom: 16, display: "inline-block" }}>
            Real transformation
          </span>
          <h2
            className="text-section-title"
            style={{ marginTop: 12, color: "var(--color-ink)" }}
          >
            See what Refract actually does.
          </h2>
          <p
            style={{
              marginTop: 12,
              fontSize: 15,
              color: "var(--color-body)",
              maxWidth: 480,
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: 1.65,
            }}
          >
            Same project. Same logic. Cleaner code.
          </p>
        </div>

        {/* Metrics Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 12,
            marginBottom: 40,
          }}
        >
          <MetricCard label="any types removed" before="34" after="0" delay={0} />
          <MetricCard label="components split" before="1 giant" after="8 modules" delay={1} />
          <MetricCard label="unused state removed" before="12" after="0" delay={2} />
          <MetricCard label="lines documented" before="0" after="214" delay={3} />
        </div>

        {/* Code Blocks */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          {/* Before */}
          <div className="animate-fade-up" style={{ animationDelay: "100ms", display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, paddingLeft: 4 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "var(--color-accent-red)", flexShrink: 0 }} />
              <span className="text-caption-upper" style={{ color: "var(--color-muted)" }}>Legacy Vibe Code</span>
            </div>
            <div
              style={{
                backgroundColor: "var(--color-surface-card)",
                border: "1px solid var(--color-hairline)",
                borderRadius: 12,
                overflow: "hidden",
              }}
            >
              <div className="window-header">
                <div className="window-dot" style={{ backgroundColor: "#ff5f56" }} />
                <div className="window-dot" style={{ backgroundColor: "#ffbd2e" }} />
                <div className="window-dot" style={{ backgroundColor: "#27c93f" }} />
                <span style={{ marginLeft: 8, fontSize: 11, color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}>UserDashboard.tsx</span>
              </div>
              <div style={{ padding: 20, overflow: "auto" }}>
                <pre style={{ margin: 0 }}>
                  <code className="text-code" style={{ color: "var(--color-muted)" }}>{`function UserDashboard(props: any) {
  const [data1, setData1] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [val2, setVal2] = useState(""); // unused

  useEffect(() => {
    fetch(\`/api/user/\${props.id}\`)
      .then(r => r.json())
      .then(d => {
        setData1(d);
        setLoading(false);
      });
  }, [props.id]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-4 bg-white flex flex-col gap-2">
      <h1>{data1?.name}</h1>
      <img src={data1?.avatar} />
    </div>
  );
}`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* After */}
          <div className="animate-fade-up" style={{ animationDelay: "200ms", display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, paddingLeft: 4 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "var(--color-accent-green)", flexShrink: 0 }} />
              <span className="text-caption-upper" style={{ color: "var(--color-ink)" }}>Refracted Production Code</span>
            </div>
            <div
              style={{
                backgroundColor: "var(--color-surface-card)",
                border: "1px solid var(--color-hairline-strong)",
                borderRadius: 12,
                overflow: "hidden",
                boxShadow: "none",
              }}
            >
              <div className="window-header">
                <div className="window-dot" style={{ backgroundColor: "#ff5f56" }} />
                <div className="window-dot" style={{ backgroundColor: "#ffbd2e" }} />
                <div className="window-dot" style={{ backgroundColor: "#27c93f" }} />
                <span style={{ marginLeft: 8, fontSize: 11, color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}>UserProfile.tsx</span>
              </div>
              <div style={{ padding: 20, overflow: "auto" }}>
                <pre style={{ margin: 0 }}>
                  <code className="text-code" style={{ color: "var(--color-ink)" }}>{`interface UserProfile {
  id: string;
  name: string;
  avatar: string;
}

/**
 * Handles fetching and display for user profile.
 * Refracted from bloated UserDashboard component.
 */
export function UserProfileCard({ id }: { id: string }) {
  const { profile, isLoading, error } = useUserProfile(id);

  if (isLoading) return <ProfileSkeleton />;
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <CardContainer>
      <ProfileHeader
        name={profile.name}
        avatar={profile.avatar}
      />
    </CardContainer>
  );
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface MetricCardProps {
  label: string;
  before: string;
  after: string;
  delay?: number;
}

const MetricCard = ({ label, before, after, delay = 0 }: MetricCardProps) => (
  <div
    className="card-hairline animate-fade-up"
    style={{ padding: 20, animationDelay: `${delay * 80}ms` }}
  >
    <p className="text-caption-upper" style={{ color: "var(--color-muted)", marginBottom: 10 }}>
      {label}
    </p>
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <span style={{ fontSize: 15, fontWeight: 600, color: "var(--color-mute)" }}>{before}</span>
      <ArrowRight style={{ width: 12, height: 12, color: "var(--color-hairline-strong)", flexShrink: 0 }} />
      <span style={{ fontSize: 15, fontWeight: 600, color: "var(--color-ink)" }}>{after}</span>
    </div>
  </div>
);

export default BeforeAfter;
