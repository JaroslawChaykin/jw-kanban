import styled from "styled-components";
import { StoreProvider } from "./providers/StoreProvider";
import { NavBar } from "../widgets/navbar";
import { Board } from "../widgets/board";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  padding: 5px;
  background: black;
`;

export const App = () => {
  return (
    <StoreProvider>
      <Wrapper>
        <NavBar />
        <Board />
      </Wrapper>
    </StoreProvider>
  );
};
