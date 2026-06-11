const AppMockup = () => {
    return (
        <div className="app-mockup">
            <div className="app-mockup-header">
                <div className="app-mockup-dot red" />
                <div className="app-mockup-dot yellow" />
                <div className="app-mockup-dot green" />
                <span style={{ marginLeft: 12, fontSize: 12, color: "#666", fontFamily: "'JetBrains Mono', monospace" }}>
                    refract-analysis — quality-report
                </span>
            </div>
            <div style={{ display: "flex", minHeight: 360 }}>
                {/* Sidebar */}
                <div style={{ width: 180, borderRight: "1px solid #2A2A2A", padding: 12, background: "#141414" }}>
                    {["Quality Score", "Issues", "Drift", "Recent PRs"].map((item) => (
                        <div
                            key={item}
                            style={{
                                padding: "6px 10px",
                                borderRadius: 6,
                                fontSize: 12,
                                cursor: "pointer",
                                marginBottom: 2,
                                background: item === "Issues" ? "#2A2A2A" : "transparent",
                                color: item === "Issues" ? "#fff" : "#999",
                            }}
                        >
                            {item}
                        </div>
                    ))}
                </div>
                {/* Main content */}
                <div style={{ flex: 1, padding: "16px 20px", background: "#1A1A1A" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                        <span style={{ fontSize: 16, fontWeight: 600, color: "#fff" }}>Issues Found</span>
                        <span style={{ fontSize: 20, fontWeight: 700, color: "#F87171" }}>12</span>
                    </div>
                    {[
                        { file: "src/components/Table.tsx", issue: "Prop drilling: 4 levels deep", lines: "L42–L68", severity: "high" },
                        { file: "src/hooks/useData.ts", issue: "Missing error boundary", lines: "L1–L89", severity: "high" },
                        { file: "src/utils/transform.ts", issue: "`any` type leakage", lines: "L15", severity: "medium" },
                        { file: "src/App.tsx", issue: "Circular dependency detected", lines: "L3, L27", severity: "medium" },
                        { file: "src/components/Card.tsx", issue: "Unused state variable", lines: "L12", severity: "low" },
                    ].map((item, i) => (
                        <div
                            key={i}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 12,
                                padding: "10px 12px",
                                borderBottom: "1px solid #2A2A2A",
                                fontSize: 13,
                            }}
                        >
                            <span
                                style={{
                                    width: 6,
                                    height: 6,
                                    borderRadius: "50%",
                                    background: item.severity === "high" ? "#F87171" : item.severity === "medium" ? "#FFBD2E" : "#999",
                                    flexShrink: 0,
                                }}
                            />
                            <span style={{ color: "#4ADE80", fontFamily: "'JetBrains Mono', monospace", fontSize: 12, width: 280 }}>
                                {item.file}
                            </span>
                            <span style={{ color: "#ccc", flex: 1 }}>{item.issue}</span>
                            <span style={{ color: "#666", fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>{item.lines}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AppMockup;