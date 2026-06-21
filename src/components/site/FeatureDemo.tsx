import {
  IssuesReviewEmbed,
  QualityDashboardEmbed,
  DiffViewEmbed,
  ProjectViewEmbed,
} from "@embed/components";

type EmbedType = "issues" | "quality" | "diff" | "project";

interface FeatureDemoProps {
  type: EmbedType;
  height: number;
}

const FeatureDemo = ({ type, height }: FeatureDemoProps) => (
  <div data-theme="dark" style={{ height, overflow: "hidden" }}>
    {type === "issues" && <IssuesReviewEmbed height={height} />}
    {type === "quality" && <QualityDashboardEmbed height={height} />}
    {type === "diff" && <DiffViewEmbed maxHeight={`${height}px`} />}
    {type === "project" && <ProjectViewEmbed height={height} />}
  </div>
);

export default FeatureDemo;
