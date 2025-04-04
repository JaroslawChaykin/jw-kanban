import "styled-components";
import { ITheme } from "./app/styles/theme";

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
