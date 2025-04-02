import styled from "styled-components";
import { Board, NavBar } from "../../widgets";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.wrapper_bg};
`;

export const Overview = () => {
  return (
    <Wrapper>
      <NavBar />
      <Board />
    </Wrapper>
  );
};
