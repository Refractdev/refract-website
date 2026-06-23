import { StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import FigWireframe from "./FigWireframe";
import SectionBand from "./SectionBand";

const features = [
  {
    title: "Built for purpose",
    description:
      "Refract is shaped by the practices of modern engineering teams shipping with AI. Persistent issues per commit, actionable patches, and automated PRs.",
    label: "FIG 0.2",
    variant: "plates" as const,
  },
  {
    title: "Powered by AI agents",
    description:
      "Designed for workflows shared by humans and agents. From scanning every push to preparing pull requests — Cursor agents see the same memory as your Refract project.",
    label: "FIG 0.3",
    variant: "cubes" as const,
  },
  {
    title: "Designed for speed",
    description:
      "Reduces noise and restores momentum. No config files, no CI setup. Connect a repo, push code, and issues appear automatically with severity, file, and patch.",
    label: "FIG 0.4",
    variant: "tiers" as const,
  },
];

const FeaturesGrid = () => {
  return (
    <SectionBand id="features" className="!pt-12">
      <StaggerContainer className="grid gap-12 md:grid-cols-3 md:gap-8">
        {features.map((f) => (
          <StaggerItem key={f.title}>
            <div className="flex h-full flex-col">
              <FigWireframe variant={f.variant} />
              <p className="text-mono-label mb-3 mt-8">{f.label}</p>
              <h3 className="text-headline-sm mb-2">{f.title}</h3>
              <p className="text-body-sm text-ld-tertiary">{f.description}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionBand>
  );
};

export default FeaturesGrid;
