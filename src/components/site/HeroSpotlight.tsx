const HeroSpotlight = () => {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 h-72"
      style={{
        background:
          "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255, 255, 255, 0.06), transparent 70%)",
      }}
      aria-hidden
    />
  );
};

export default HeroSpotlight;
