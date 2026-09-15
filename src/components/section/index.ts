import type { BobertoIcon } from "@/assets/svg/boberto/index.ts";
import {
  BobertoDark,
  BobertoAudiovisual,
  BobertoDesign,
  BobertoJogos,
  BobertoSistemas,
} from "@/assets/svg/boberto/index.ts";

import { type VariantProps, createTV, defaultConfig } from "tailwind-variants";

const tv = createTV({
  twMergeConfig: {
    extend: {
      classGroups: {
        "breakout-grid": ["breakout-grid"],
        "breakout-grid-cols": [
          "breakout-full",
          "breakout-feature",
          "breakout-popout",
          "breakout-content",
          "breakout-none",
        ],
        "breakout-grid-cols-size": [
          "breakout-full-*",
          "breakout-feature-*",
          "breakout-popout-*",
          "breakout-content-*",
          "breakout-none-*",
        ],
      },
      conflictingClassGroupModifiers: {
        "breakout-grid": ["grid-cols"],
        "breakout-grid-cols-size": ["grid-cols"],
      },
      conflictingClassGroups: {
        "breakout-grid-cols": ["breakout-grid-cols"],
      },
    },
  },
});

export const sectionStyles = tv({
  slots: {
    base: "has-[>_svg]:flex gap-2 text-center items-center p-4 text-dark-950 rounded-2xl uppercase font-jaro text-2xl md:text-3xl whitespace-nowrap",
    button: "cursor-pointer disabled:grayscale disabled:pointer-events-none disabled:select-none",
    anchor: "cursor-pointer data-disabled:grayscale data-disabled:pointer-events-none data-disabled:select-none",
  },
  variants: {
    variant: {
      default: { base: "bg-dark-950 text-bright-50" },
      design: { base: "bg-design-500" },
      audiovisual: { base: "bg-audiovisual-500" },
      jogos: { base: "bg-jogos-500" },
      sistemas: { base: "bg-sistemas-500" },
    },
    breakout: {
      content: { base: "breakout-content" },
      popout: { base: "breakout-popout" },
      feature: { base: "breakout-feature" },
    },
  },
  defaultVariants: {
    variant: "default",
    breakout: "popout",
  },
});

export interface SectionProps extends VariantProps<typeof sectionStyles> {
  "icon:hide"?: boolean;
}

type VariantKeys = keyof (typeof sectionStyles)["variants"]["variant"];

const bobertos: Record<VariantKeys, BobertoIcon> = {
  default: BobertoDark,
  audiovisual: BobertoAudiovisual,
  design: BobertoDesign,
  jogos: BobertoJogos,
  sistemas: BobertoSistemas,
};

export const getBoberto = (variant: VariantKeys) => bobertos[variant];

export { default as SectionHeader } from "./header.astro";
export { default as SectionButton } from "./button.astro";
export { default as SectionAnchor } from "./anchor.astro";
