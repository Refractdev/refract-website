import React from "react";
import { motion } from "motion/react";
import { FadeIn, StaggerContainer } from "@/components/ui/fade-in";
import { APP_URL } from "@/lib/constants";

const plans = [
  {
    name: "Free",
    price: "Grátis",
    description: "Descobre os problemas no teu código",
    features: [
      { text: "Análise AST (TypeScript/React/JSX)", included: true },
      { text: "Até 2 projetos", included: true },
      { text: "Até 200 ficheiros por análise", included: true },
      { text: "10 detectores básicos", included: true, sub: true },
      { text: "Score de saúde (0–100)", included: true },
      { text: "Resumo por categorias (High/Medium/Low)", included: true },
      { text: "Tabela de ficheiros com contagem de issues", included: true },
      { text: "Visão geral do projeto", included: true },
      { text: "Lista de issues com ficheiro e linha", included: true },
      { text: "Código antes (problema encontrado)", included: true },
      { text: "Drift monitoring", included: false },
      { text: "AI (Briefing, Explain, Sugestão de nomes)", included: false },
      { text: "Patches / Diffs", included: false },
      { text: "PR generation", included: false },
      { text: "Relatório Markdown", included: false },
      { text: "Cross-file analysis", included: false },
      { text: "Safety Gate", included: false },
      { text: "Guidelines customizadas", included: false },
    ],
    cta: "Get Started",
    href: APP_URL,
    highlighted: false,
  },
  {
    name: "Pro",
    price: "€20",
    period: "/mês",
    description: "Corrige os problemas com um clique",
    highlighted: true,
    features: [
      { text: "Tudo do Free", included: true },
      { text: "Projetos ilimitados", included: true },
      { text: "Ficheiros ilimitados por análise", included: true },
      { text: "16 detectores completos (6 extras)", included: true, sub: true },
      { text: "Cálculo de blast radius", included: true },
      { text: "Scoring de prioridade (impacto × blast radius ÷ esforço)", included: true },
      { text: "Cálculo de esforço por issue", included: true },
      { text: "Patch preview — diffs antes/depois", included: true },
      { text: "Motor de transforms (5 tipos)", included: true, sub: true },
      { text: "Safety Gate — valida cada transformação", included: true },
      { text: "AI Briefing, Explain issue, Explain code", included: true },
      { text: "Sugestão de nomes PascalCase", included: true },
      { text: "Mensagem de commit automática", included: true },
      { text: "Relatório Markdown completo + Mermaid", included: true },
      { text: "Guidelines customizadas", included: true },
      { text: "Drift Monitoring (tendências, anomalias, hotspots)", included: true },
      { text: "Alertas automáticos (score drop, anomaly, decay)", included: true },
      { text: "Histórico de análises (20 snapshots)", included: true },
      { text: "Clone via GitHub API", included: true },
      { text: "Cria PR automático com correções", included: true },
    ],
    cta: "Subscribe",
    href: APP_URL,
  },
  {
    name: "Teams",
    price: "€40",
    period: "/mês",
    description: "Quality at scale para equipas de engenharia",
    highlighted: false,
    features: [
      { text: "Tudo do Pro", included: true },
      { text: "Membros ilimitados no projeto", included: true },
      { text: "Roles: Admin, Member, Viewer", included: true },
      { text: "Projetos compartilhados", included: true },
      { text: "Comentários em issues", included: true },
      { text: "Atribuição de issues", included: true },
      { text: "GitHub Action oficial", included: true },
      { text: "Status checks (bloqueia merge se score descer)", included: true },
      { text: "Webhooks (Slack/Discord/Teams)", included: true },
      { text: "Análise automática agendada (diária/semanal)", included: true },
      { text: "Custom detectors", included: true },
      { text: "Quality gates configuráveis", included: true },
      { text: "Audit log", included: true },
      { text: "SSO (SAML/OIDC)", included: true },
      { text: "SLA de suporte (24h)", included: true },
      { text: "API access", included: true },
      { text: "Export de dados (CSV/JSON)", included: true },
      { text: "Branding customizado nos relatórios", included: true },
    ],
    cta: "Subscribe",
    href: APP_URL,
  },
];

const compareRows = [
  { label: "Projetos", free: "2", pro: "∞", teams: "∞" },
  { label: "Ficheiros/análise", free: "200", pro: "∞", teams: "∞" },
  { label: "Detectores", free: "10", pro: "16", teams: "16 + custom" },
  { label: "AI", free: "✗", pro: "✓", teams: "✓" },
  { label: "Patches/Diffs", free: "✗", pro: "✓", teams: "✓" },
  { label: "PR Generation", free: "✗", pro: "✓", teams: "✓" },
  { label: "Documentação", free: "✗", pro: "✓", teams: "✓ + branding" },
  { label: "Drift Monitoring", free: "✗", pro: "✓", teams: "✓" },
  { label: "Equipas", free: "✗", pro: "✗", teams: "✓" },
  { label: "CI/CD", free: "✗", pro: "✗", teams: "✓" },
  { label: "SSO", free: "✗", pro: "✗", teams: "✓" },
  { label: "API Access", free: "✗", pro: "✗", teams: "✓" },
];

const roadmapQuarters = [
  {
    quarter: "Q3 2026",
    items: [
      "Custom rules engine — regras de negócio específicas",
      "Slack bot — comandos /refract status no Slack",
      "VS Code extension — vê issues e aplica fixes no editor",
      "Performance profiler — deteta re-renders e memoization faltando",
    ],
  },
  {
    quarter: "Q4 2026",
    items: [
      "Cross-repo analysis — dependências entre múltiplos repositórios",
      "Regression tracking — que commit introduziu cada problema",
      "Auto-fix PRs agendados — Refract cria PRs automaticamente",
      "Dashboard executivo — métricas para CTOs/VPs de Engenharia",
    ],
  },
  {
    quarter: "2027",
    items: [
      "AI pair programming — refatorações ao vivo enquanto codas",
      "Multi-language support — Python, Go, Rust, Java",
      "Security scanning — deteção de vulnerabilidades",
      "SOC2 compliance reports — relatórios de conformidade automáticos",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p
    style={{
      fontFamily: "'Inter', sans-serif",
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: "0.1em",
      textTransform: "uppercase" as const,
      color: "var(--color-mute)",
      marginBottom: 12,
    }}
  >
    {children}
  </p>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2
    className="text-balance"
    style={{
      fontFamily: "'Playfair Display', Georgia, serif",
      fontSize: "clamp(32px, 5vw, 56px)",
      fontWeight: 400,
      lineHeight: 1.0,
      letterSpacing: "-0.02em",
      color: "var(--color-ink)",
    }}
  >
    {children}
  </h2>
);

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="section"
      style={{ background: "#000000", borderTop: "1px solid var(--color-hairline)" }}
    >
      <div className="mx-auto max-w-[1200px] px-6">

        {/* Header */}
        <FadeIn className="mb-16 max-w-[680px]">
          <SectionLabel>Pricing</SectionLabel>
          <SectionTitle>Simple, transparent pricing</SectionTitle>
          <p
            style={{
              fontFamily: "'Inter Tight', 'Inter', sans-serif",
              fontSize: 16,
              color: "var(--color-body)",
              marginTop: 16,
              lineHeight: 1.6,
            }}
          >
            Start for free, upgrade when you need more power.
          </p>
        </FadeIn>

        {/* Pricing Cards — stagger + hover lift */}
        <StaggerContainer className="mb-24 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              whileHover={{
                y: plan.highlighted ? -8 : -5,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              className="flex flex-col"
              style={{
                background: plan.highlighted
                  ? "var(--color-surface-elevated)"
                  : "var(--color-surface-card)",
                border: `1px solid ${plan.highlighted ? "var(--color-hairline-strong)" : "var(--color-hairline-strong)"}`,
                borderRadius: 12,
                cursor: "default",
              }}
            >
              {plan.highlighted && (
                <div
                  style={{
                    padding: "8px 16px",
                    textAlign: "center",
                    borderBottom: "1px solid var(--color-hairline-strong)",
                    borderRadius: "12px 12px 0 0",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 11,
                      fontWeight: 500,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--color-accent-green)",
                    }}
                  >
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex flex-1 flex-col p-8">
                <h3
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 18,
                    fontWeight: 500,
                    color: "var(--color-ink)",
                    marginBottom: 4,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {plan.name}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter Tight', 'Inter', sans-serif",
                    fontSize: 13,
                    color: "var(--color-charcoal)",
                    marginBottom: 20,
                    lineHeight: 1.5,
                  }}
                >
                  {plan.description}
                </p>

                <div style={{ marginBottom: 28 }}>
                  <span
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: 48,
                      fontWeight: 400,
                      lineHeight: 1.0,
                      color: "var(--color-ink)",
                    }}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 14,
                        color: "var(--color-mute)",
                        marginLeft: 6,
                      }}
                    >
                      {plan.period}
                    </span>
                  )}
                </div>

                <ul style={{ listStyle: "none", padding: 0, margin: 0, flex: 1 }}>
                  {plan.features.map((f) => (
                    <li
                      key={f.text}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 8,
                        padding: "4px 0",
                        fontSize: 13,
                        fontFamily: "'Inter', sans-serif",
                        color: f.included ? "var(--color-body)" : "var(--color-stone)",
                        ...(f.sub ? { paddingLeft: 20 } : {}),
                      }}
                    >
                      <span
                        style={{
                          color: f.included ? "var(--color-accent-green)" : "var(--color-stone)",
                          fontSize: 13,
                          lineHeight: 1.6,
                          flexShrink: 0,
                        }}
                      >
                        {f.included ? "✓" : "—"}
                      </span>
                      {f.text}
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.href}
                  className={plan.highlighted ? "btn btn--primary mt-8" : "btn btn--ghost mt-8"}
                  style={{ textAlign: "center", width: "100%" }}
                >
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Comparison Table */}
        <FadeIn className="mb-24">
          <h3
            className="mb-8 text-center"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 400,
              lineHeight: 1.1,
              color: "var(--color-ink)",
            }}
          >
            Compare plans
          </h3>
          <div className="overflow-x-auto">
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "12px 16px",
                      borderBottom: "1px solid var(--color-hairline-strong)",
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 500,
                      color: "var(--color-charcoal)",
                    }}
                  >
                    Feature
                  </th>
                  {["Free", "Pro (€20)", "Teams (€40)"].map((col, ci) => (
                    <th
                      key={col}
                      style={{
                        textAlign: "center",
                        padding: "12px 16px",
                        borderBottom: "1px solid var(--color-hairline-strong)",
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 500,
                        color: "var(--color-ink)",
                        background: ci === 1 ? "var(--color-surface-elevated)" : "transparent",
                      }}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row) => (
                  <tr key={row.label}>
                    <td
                      style={{
                        padding: "10px 16px",
                        borderBottom: "1px solid var(--color-hairline)",
                        fontFamily: "'Inter', sans-serif",
                        color: "var(--color-body)",
                      }}
                    >
                      {row.label}
                    </td>
                    {[row.free, row.pro, row.teams].map((val, vi) => (
                      <td
                        key={vi}
                        style={{
                          textAlign: "center",
                          padding: "10px 16px",
                          borderBottom: "1px solid var(--color-hairline)",
                          fontFamily: "'Inter', sans-serif",
                          color:
                            val === "✓" || val === "✓ + branding"
                              ? "var(--color-accent-green)"
                              : val === "✗"
                              ? "var(--color-stone)"
                              : "var(--color-body)",
                          background: vi === 1 ? "var(--color-surface-elevated)" : "transparent",
                        }}
                      >
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>

        {/* Roadmap */}
        <div>
          <FadeIn className="mb-12 max-w-[680px]">
            <SectionLabel>Upcoming</SectionLabel>
            <SectionTitle>Roadmap</SectionTitle>
          </FadeIn>

          <StaggerContainer className="grid gap-6 md:grid-cols-3">
            {roadmapQuarters.map((q) => (
              <motion.div
                key={q.quarter}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.22, ease: "easeOut" } }}
                className="p-8"
                style={{
                  background: "var(--color-surface-card)",
                  border: "1px solid var(--color-hairline-strong)",
                  borderRadius: 12,
                  cursor: "default",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 16,
                    fontWeight: 500,
                    color: "var(--color-ink)",
                    marginBottom: 16,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {q.quarter}
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {q.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 8,
                        padding: "5px 0",
                        fontFamily: "'Inter Tight', 'Inter', sans-serif",
                        fontSize: 13,
                        color: "var(--color-body)",
                        lineHeight: 1.5,
                      }}
                    >
                      <span
                        style={{
                          color: "var(--color-accent-green)",
                          fontSize: 12,
                          lineHeight: 1.6,
                          flexShrink: 0,
                          marginTop: 1,
                        }}
                      >
                        ◆
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
