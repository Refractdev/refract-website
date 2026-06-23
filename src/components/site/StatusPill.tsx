import { ReactNode } from "react";

type StatusVariant = "success" | "warning" | "info" | "neutral" | "error";

interface StatusPillProps {
  variant: StatusVariant;
  children: ReactNode;
}

const StatusPill = ({ variant, children }: StatusPillProps) => {
  return (
    <span className={`status-pill status-pill--${variant}`}>{children}</span>
  );
};

export default StatusPill;
