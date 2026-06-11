const plans = [
  {
    name: "Free",
    price: "Free",
    description: "For individual developers exploring Refract.",
    features: ["AST analysis", "15+ detectors", "Quality dashboard", "Drift monitoring"],
  },
  {
    name: "Pro",
    price: "$19",
    description: "For professional developers who ship daily.",
    features: [
      "Everything in Free",
      "AI-powered suggestions",
      "One-click PR generation",
      "Auto-documentation",
    ],
    highlighted: true,
  },
  {
    name: "Team",
    price: "$49",
    description: "For teams that need collaboration and CI/CD.",
    features: [
      "Everything in Pro",
      "CI/CD integration",
      "Team collaboration",
      "Priority support",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="section-pad">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="section-label">Pricing</span>
          <h2
            style={{
              fontSize: 40,
              fontWeight: 700,
              color: "#fff",
              marginBottom: 12,
            }}
          >
            Simple, transparent pricing
          </h2>
          <p style={{ fontSize: 16, color: "#999", maxWidth: 500, margin: "0 auto" }}>
            Start for free, upgrade when you need more power.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
            maxWidth: 960,
            margin: "0 auto",
          }}
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              style={{
                background: plan.highlighted ? "#1A1A1A" : "#111",
                border: plan.highlighted ? "1px solid #5C6BF5" : "1px solid #2A2A2A",
                borderRadius: 16,
                padding: 32,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h3 style={{ fontSize: 18, fontWeight: 600, color: "#fff", marginBottom: 4 }}>
                {plan.name}
              </h3>
              <div style={{ marginBottom: 16 }}>
                <span style={{ fontSize: 36, fontWeight: 700, color: "#fff" }}>{plan.price}</span>
                {plan.price !== "Free" && (
                  <span style={{ fontSize: 14, color: "#999", marginLeft: 4 }}>/month</span>
                )}
              </div>
              <p style={{ fontSize: 14, color: "#999", marginBottom: 24, lineHeight: 1.5 }}>
                {plan.description}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", flex: 1 }}>
                {plan.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "6px 0",
                      fontSize: 14,
                      color: "#ccc",
                    }}
                  >
                    <span style={{ color: "#4ADE80", fontSize: 14 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="/signup"
                className={plan.highlighted ? "btn-primary" : "btn-secondary"}
                style={{
                  textAlign: "center",
                  padding: "12px 24px",
                  fontSize: 14,
                  display: "block",
                }}
              >
                {plan.name === "Free" ? "Get Started" : "Subscribe"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;