export interface Props extends astroHTML.JSX.SVGAttributes {
  size?: number;
}

export const colorDark = "var(--color-dark-950,#1c1c1c)";
export const colorBright = "var(--color-bright-50,#fffcf7)";

export { default as BobertoBright } from "./bright.astro";
export { default as BobertoDark } from "./dark.astro";
