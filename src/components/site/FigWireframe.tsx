type FigVariant = "plates" | "cubes" | "tiers";

const FigWireframe = ({ variant }: { variant: FigVariant }) => {
  if (variant === "plates") {
    return (
      <svg viewBox="0 0 120 100" className="relative h-28 w-full" aria-hidden>
        <g stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none">
          <ellipse cx="60" cy="78" rx="36" ry="10" />
          <path d="M24 78 L36 42 L84 42 L96 78 Z" />
          <path d="M36 42 L48 18 L72 18 L84 42 Z" />
          <circle cx="60" cy="52" r="8" stroke="rgba(255,255,255,0.12)" />
        </g>
      </svg>
    );
  }

  if (variant === "cubes") {
    return (
      <svg viewBox="0 0 120 100" className="relative h-28 w-full" aria-hidden>
        <g stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none">
          <path d="M20 60 L40 48 L60 60 L40 72 Z" />
          <path d="M40 48 L40 28 L60 40 L60 60 Z" />
          <path d="M60 40 L80 28 L80 48 L60 60 Z" />
          <path d="M50 20 L70 8 L90 20 L70 32 Z" />
          <path d="M70 8 L70 28 L90 40 L90 20 Z" />
        </g>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 120 100" className="h-28 w-full" aria-hidden>
      <g stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none">
        <path d="M15 75 L35 55 L55 75" />
        <path d="M35 55 L35 25 L55 45 L55 75" />
        <path d="M55 45 L75 25 L75 55 L55 75" />
        <path d="M65 65 L85 45 L105 65" />
        <path d="M85 45 L85 15 L105 35 L105 65" />
      </g>
    </svg>
  );
};

export default FigWireframe;
