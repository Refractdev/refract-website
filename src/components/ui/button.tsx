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
          "rounded-lg bg-white text-black text-[13px] md:text-sm font-semibold px-3 py-1.5 md:px-3.5 md:py-2 hover:bg-gray-200 active:bg-gray-300",
        secondary:
          "rounded-lg bg-[#1a1a1a] text-white text-[13px] md:text-sm font-semibold px-3 py-1.5 md:px-3.5 md:py-2 hover:bg-[#141414] hover:text-[#d4d4d4] active:bg-[#101010]",
        tertiary:
          "rounded-none bg-transparent p-0 h-auto text-body-md text-ld-muted hover:text-ld-on-surface",
        ghost:
          "rounded-none bg-transparent p-0 h-auto text-body-md text-ld-muted hover:text-ld-on-surface",
        destructive:
          "rounded-lg bg-ld-error text-white text-[14px] font-medium hover:bg-ld-error/90 px-4 h-9",
        outline:
          "rounded-lg border border-[#2a2a2a] bg-transparent text-white text-[14px] font-medium hover:bg-white/5 px-4 h-9",
        link: "rounded-none p-0 h-auto text-ld-primary underline-offset-4 hover:underline",
        pricing:
          "rounded-full bg-[#121212] border border-[#2a2a2a] text-white text-[13px] md:text-[13.5px] tracking-[-0.02em] font-semibold px-2.5 py-1.5 hover:bg-[#2a2a2a] active:bg-[#232323] transition-colors",
        pricingPrimary:
          "rounded-full bg-white text-black text-[13px] md:text-sm font-semibold px-3 py-1.5 md:px-3.5 md:py-2 w-full hover:bg-gray-200 active:bg-gray-300",
        pricingCta:
          "rounded-full bg-[#1a1a1a] text-white font-medium py-2.5 w-full hover:bg-[#141414] active:bg-[#0a0a0a] transition-colors duration-300",
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