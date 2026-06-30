interface AtmosphereProps {
  variant?: "primary" | "secondary" | "accent";
  className?: string;
}

const Atmosphere = ({ variant = "primary", className = "" }: AtmosphereProps) => {
  return (
    <div
      className={`atmosphere atmosphere--${variant} ${className}`.trim()}
      aria-hidden
    />
  );
};

export default Atmosphere;
