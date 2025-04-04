const colors = {
  wrapper_bg: "#000",
  bg: "#101213",
  fontColorMain: "#fff",
  fontColorSub: "#5F5F5F",
  accentPrimary: "#17181C",
  accentPrimaryHover: "#1E1F24",
  accentSecondary: "#1C2023",
  taskBg: "#1D1F20",
  border: "#2D2D2F",
  input: "#2D3338",
};

export const theme = {
  colors,
};

export type TColors = typeof colors;

export interface ITheme {
  colors: TColors;
}
