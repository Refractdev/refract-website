import { forwardRef, AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cn(className)}
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
