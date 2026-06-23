import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const customFontSizes = [
  "headline-display",
  "headline-lg",
  "headline-md",
  "headline-sm",
  "body-lg",
  "body-md",
  "body-sm",
  "label-lg",
  "label-md",
  "label-sm",
  "caption",
  "display-xxl",
  "display-xl",
  "display-lg",
  "display-sm",
  "heading-md",
  "heading-sm",
  "subtitle",
  "button-md",
  "button-sm",
  "code-md",
] as const;

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: [...customFontSizes] }],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
