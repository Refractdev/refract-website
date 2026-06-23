import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[background-color,border-color,color] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ld-primary focus-visible:ring-offset-2 focus-visible:ring-offset-ld-neutral disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "rounded-full bg-ld-secondary text-ld-neutral hover:bg-[#ddddde] text-label-md",
        secondary:
          "rounded-full bg-transparent text-ld-on-surface text-label-md border border-ld-border hover:border-ld-border-strong hover:bg-ld-overlay",
        tertiary:
          "rounded-none bg-transparent p-0 h-auto text-body-md text-ld-muted hover:text-ld-on-surface",
        ghost:
          "rounded-none bg-transparent p-0 h-auto text-body-md text-ld-muted hover:text-ld-on-surface",
        destructive:
          "rounded-full bg-ld-error text-ld-secondary text-label-md hover:bg-ld-error/90",
        outline:
          "rounded-full border border-ld-border-strong bg-transparent text-ld-on-surface text-label-md hover:bg-ld-overlay",
        link: "rounded-none p-0 h-auto text-ld-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 rounded-full px-4 text-label-sm text-ld-neutral",
        lg: "h-11 rounded-full px-6 text-label-md",
        icon: "h-11 w-11 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
