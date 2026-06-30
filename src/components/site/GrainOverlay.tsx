interface GrainOverlayProps {
  className?: string;
}

const GrainOverlay = ({ className = "" }: GrainOverlayProps) => {
  return (
    <div
      className={`grain-overlay ${className}`.trim()}
      aria-hidden
    />
  );
};

export default GrainOverlay;
