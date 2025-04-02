import { ThemeProvider } from "styled-components";
import { StoreProvider } from "./providers/StoreProvider";
import { GlobalFonts } from "./styles/fonts";
import { theme } from "./styles/theme";
import { Overview } from "../pages/Overview/Overview";

export const App = () => {
  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <GlobalFonts />
        <Overview />
      </ThemeProvider>
    </StoreProvider>
  );
};
