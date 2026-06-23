import { MockFrame } from "../MockFrame";

const nodes = [
  { id: "app", label: "App.tsx", x: 50, y: 12, active: true },
  { id: "layout", label: "Layout", x: 22, y: 38, active: false },
  { id: "hooks", label: "useCart", x: 78, y: 38, active: false },
  { id: "shop", label: "Shop.tsx", x: 12, y: 68, active: false },
  { id: "card", label: "ProductCard", x: 38, y: 68, active: false },
  { id: "api", label: "api/client", x: 78, y: 68, active: false },
];

const edges = [
  ["app", "layout"],
  ["app", "hooks"],
  ["layout", "shop"],
  ["layout", "card"],
  ["hooks", "api"],
  ["shop", "card"],
];

const nodeById = Object.fromEntries(nodes.map((n) => [n.id, n]));

const CodeMapMock = () => {
  return (
    <MockFrame
      title="refract — code-map"
      headerRight={<span className="mock-pill">6 modules</span>}
    >
      <div className="min-h-[280px] bg-ld-surface p-3.5">
        <svg viewBox="0 0 100 80" className="h-60 w-full">
          {edges.map(([from, to]) => {
            const a = nodeById[from];
            const b = nodeById[to];
            return (
              <line
                key={`${from}-${to}`}
                x1={a.x}
                y1={a.y + 4}
                x2={b.x}
                y2={b.y - 4}
                stroke={a.active || b.active ? "var(--ld-primary)" : "var(--ld-border-strong)"}
                strokeWidth="0.6"
                opacity={a.active || b.active ? 1 : 0.5}
              />
            );
          })}
          {nodes.map((node) => (
            <g key={node.id}>
              <rect
                x={node.x - 10}
                y={node.y - 5}
                width="20"
                height="10"
                rx="2"
                fill={node.active ? "rgba(113, 112, 255, 0.15)" : "var(--ld-overlay)"}
                stroke={node.active ? "var(--ld-primary)" : "var(--ld-border-strong)"}
                strokeWidth="0.4"
              />
              <text
                x={node.x}
                y={node.y + 1.5}
                textAnchor="middle"
                fontSize="3.2"
                fill={node.active ? "var(--ld-on-surface)" : "var(--ld-tertiary)"}
                fontFamily="JetBrains Mono, monospace"
              >
                {node.label}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </MockFrame>
  );
};

export default CodeMapMock;
