import styled, { ThemeProvider } from "styled-components";
import { StoreProvider } from "./providers/StoreProvider";
import { NavBar } from "../widgets/navbar";
import { Board } from "../widgets/board";
import { GlobalFonts } from "./styles/fonts";
import { theme } from "./styles/theme";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  padding: 5px;
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
