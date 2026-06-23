import React from "react";

interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  height?: number | string;
  variant?: "full" | "icon";
}

export const Logo: React.FC<LogoProps> = ({
  height = 22,
  variant = "full",
  alt = "Refract",
  ...props
}) => {
  const src = variant === "icon" ? "/icon-white.svg" : "/logofull-white.svg";

  return (
    <img
      src={src}
      alt={alt}
      style={{ height, width: "auto", display: "block" }}
      {...props}
    />
  );
};
