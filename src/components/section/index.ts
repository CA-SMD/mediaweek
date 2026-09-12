import type { BobertoIcon } from "@/assets/svg/boberto";
import { BobertoDark, BobertoAudiovisual, BobertoDesign, BobertoJogos, BobertoSistemas } from "@/assets/svg/boberto";

import { tv, type VariantProps } from "tailwind-variants";

export const sectionStyles = tv({
  slots: {
    base: "has-[>_svg]:flex gap-2 text-center items-center p-4 breakout-popout text-dark-950 rounded-2xl uppercase font-jaro text-2xl md:text-3xl whitespace-nowrap",
    button: "cursor-pointer disabled:grayscale disabled:pointer-events-none disabled:select-none",
    anchor: "cursor-pointer data-disabled:grayscale data-disabled:pointer-events-none data-disabled:select-none",
  },
  variants: {
    variant: {
      default: "bg-dark-950 text-bright-50",
      design: "bg-design-500",
      audiovisual: "bg-audiovisual-500",
      jogos: "bg-jogos-500",
      sistemas: "bg-sistemas-500",
    },
  },
  defaultVariants: {
    variant: "default",
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
