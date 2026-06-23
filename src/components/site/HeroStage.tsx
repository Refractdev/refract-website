import { ReactNode } from "react";
import HeroSpotlight from "./HeroSpotlight";

interface HeroStageProps {
  children: ReactNode;
  className?: string;
}

const HeroStage = ({ children, className = "" }: HeroStageProps) => {
  return (
    <div className={`hero-stage ${className}`.trim()}>
      <div className="hero-floor" aria-hidden />
      <HeroSpotlight />
      <div className="hero-stage__perspective">
        <div className="hero-stage__tilt">
          <div className="hero-stage__frame">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default HeroStage;
