import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[background-color,border-color,color] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-ld-neutral disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "rounded-md bg-[#fcfdff] text-black hover:bg-[#f1f7fe] text-[14px] font-medium px-4 h-9",
        secondary:
          "rounded-md bg-[#101012] text-[#fcfdff] text-[14px] font-medium border border-[rgba(255,255,255,0.14)] hover:bg-white/5 px-4 h-9",
        tertiary:
          "rounded-none bg-transparent p-0 h-auto text-body-md text-ld-muted hover:text-ld-on-surface",
        ghost:
          "rounded-none bg-transparent p-0 h-auto text-body-md text-ld-muted hover:text-ld-on-surface",
        destructive:
          "rounded-md bg-ld-error text-[#fcfdff] text-[14px] font-medium hover:bg-ld-error/90 px-4 h-9",
        outline:
          "rounded-md border border-[rgba(255,255,255,0.14)] bg-transparent text-[#fcfdff] text-[14px] font-medium hover:bg-white/5 px-4 h-9",
        link: "rounded-none p-0 h-auto text-ld-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "",
        sm: "px-3 py-1.5 text-[13px] h-8",
        lg: "px-5 py-2.5 text-[15px] h-10",
        icon: "h-9 w-9 rounded-md",
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
