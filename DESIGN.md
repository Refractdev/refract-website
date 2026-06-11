# Design Spec — Refract Landing Page (Codex-inspired)

## Visão geral

Landing page dark-first para Refract, um platforma de qualidade de código. Inspirada no design da OpenAI Codex: fundo preto, produto como única prova visual, gradientes indigo/purple nos showcases, CTA pills brancas.

---

## Tokens

### Cores

| Nome | Hex | Uso |
|---|---|---|
| `surface-base` | `#000000` | Background geral da página |
| `surface-raised` | `#111111` | Cards de features |
| `surface-app` | `#1A1A1A` | Mockup do app (janela escura) |
| `accent-indigo` | `#5C6BF5` | Gradientes, highlights, badges |
| `accent-purple` | `#9B6EF5` | Ponto secundário do gradiente |
| `text-primary` | `#FFFFFF` | Headlines, body principal |
| `text-secondary` | `#999999` | Atribuições, labels, metadata |
| `border-subtle` | `#2A2A2A` | Divisores, bordas de cards |
| `code-green` | `#4ADE80` | Diff additions (+) |
| `code-red` | `#F87171` | Diff deletions (-) |

### Tipografia

| Role | Family | Weight | Size ref |
|---|---|---|---|
| Display | `Inter` | 700–800 | 64–72px no hero |
| Body | `Inter` | 400 | 16–18px |
| Code / monospace | `JetBrains Mono` | 400 | 13–14px |
| Label / caption | `Inter` | 400 | 12–14px |

### Espaçamento

| Token | Valor |
|---|---|
| `--space-xs` | 8px |
| `--space-sm` | 16px |
| `--space-md` | 32px |
| `--space-lg` | 64px |
| `--space-xl` | 96px |
| `--space-2xl` | 128px |

---

## Estrutura

1. **Nav** — Logo + links + CTA pill branca
2. **Hero** — Headline + subtítulo + 2 botões + app mockup
3. **Features (alternadas)** — Mockup ~60% + texto ~40%
4. **Cross-platform** — 3 cards (GitHub App / CLI / VS Code)
5. **Pricing** — Free / Pro / Team
6. **Footer** — Mega-footer 5 colunas

---

## Anti-patterns (evitar)

- Gradientes em texto ou botões
- Ícones decorativos genéricos
- Mockups de laptop sem produto real
- Pricing como secção principal (é secundária)