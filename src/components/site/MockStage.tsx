import { ReactNode } from "react";
import HeroSpotlight from "./HeroSpotlight";

interface MockStageProps {
  children: ReactNode;
  className?: string;
}

const MockStage = ({ children, className = "" }: MockStageProps) => {
  return (
    <div className={`relative ${className}`.trim()}>
      <HeroSpotlight />
      <div
        className="relative"
        style={{
          perspective: "1200px",
        }}
      >
        <div
          style={{
            transform: "rotateX(2deg)",
            transformOrigin: "center top",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default MockStage;
