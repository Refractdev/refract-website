import { useState } from "react";

const screenshots = [
  {
    src: "/code health.png",
    alt: "Code Health Dashboard",
    label: "Quality Dashboard",
  },
  {
    src: "/analytics.png",
    alt: "Analytics View",
    label: "Analytics",
  },
  {
    src: "/diff view.png",
    alt: "Before/After Diff View",
    label: "Smart Refactoring",
  },
  {
    src: "/codemap.png",
    alt: "Code Map Visualization",
    label: "Code Map",
  },
  {
    src: "/category trends.png",
    alt: "Category Trends and Anomalies",
    label: "Drift Monitoring",
  },
  {
    src: "/commit history.png",
    alt: "Commit History",
    label: "Commit History",
  },
];

const AppShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div style={{ width: "100%", maxWidth: 1100, margin: "0 auto" }}>
      {/* Main screenshot */}
      <div
        style={{
          position: "relative",
          borderRadius: 12,
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)",
          background: "#0a0a0a",
        }}
      >
        <img
          src={screenshots[activeIndex].src}
          alt={screenshots[activeIndex].alt}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </div>

      {/* Thumbnail navigation */}
      <div
        style={{
          display: "flex",
          gap: 8,
          marginTop: 16,
          justifyContent: "center",
        }}
      >
        {screenshots.map((screenshot, index) => (
          <button
            key={screenshot.label}
            onClick={() => setActiveIndex(index)}
            style={{
              position: "relative",
              width: 64,
              height: 44,
              borderRadius: 6,
              overflow: "hidden",
              border: activeIndex === index
                ? "2px solid rgba(255,255,255,0.6)"
                : "1px solid rgba(255,255,255,0.1)",
              cursor: "pointer",
              transition: "all 0.2s ease",
              opacity: activeIndex === index ? 1 : 0.5,
              padding: 0,
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              if (activeIndex !== index) {
                e.currentTarget.style.opacity = "0.8";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
              }
            }}
            onMouseLeave={(e) => {
              if (activeIndex !== index) {
                e.currentTarget.style.opacity = "0.5";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
              }
            }}
          >
            <img
              src={screenshot.src}
              alt={screenshot.label}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </button>
        ))}
      </div>

      {/* Label */}
      <p
        style={{
          textAlign: "center",
          marginTop: 12,
          fontSize: 13,
          color: "rgba(255,255,255,0.4)",
          fontWeight: 500,
        }}
      >
        {screenshots[activeIndex].label}
      </p>
    </div>
  );
};

export default AppShowcase;
