export interface Props extends astroHTML.JSX.SVGAttributes {
  size?: number;
}

export type BobertoIcon = (_props: Props) => unknown;

export const colorDark = "var(--color-dark-950,#1C1C1C)";
export const colorBright = "var(--color-bright-50,#FFFCF7)";
export const colorJogos = "var(--color-jogos-500,#FF5343)";
export const colorAudiovisual = "var(--color-audiovisual-500,#00DD90)";
export const colorDesign = "var(--color-design-500,#FFA2FF)";
export const colorSistemas = "var(--color-sistemas-500,#01A0EA)";

export { default as BobertoBright } from "./bright.astro";
export { default as BobertoDark } from "./dark.astro";
export { default as BobertoJogos } from "./jogos.astro";
export { default as BobertoSistemas } from "./sistemas.astro";
export { default as BobertoDesign } from "./design.astro";
export { default as BobertoAudiovisual } from "./audiovisual.astro";
