import styled, { ThemeProvider } from "styled-components";
import { StoreProvider } from "./providers/StoreProvider";
import { GlobalFonts } from "./styles/fonts";
import { theme } from "./styles/theme";
import { Board, NavBar } from "../widgets";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.wrapper_bg};
`;

export const App = () => {
  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <GlobalFonts />
        <Wrapper>
          <NavBar />
          <Board />
        </Wrapper>
      </ThemeProvider>
    </StoreProvider>
  );
};
