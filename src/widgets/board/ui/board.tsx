import styled from "styled-components";
import { Title } from "../../../shared/ui";

const BoardOutStyled = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px;
`;

const BoardStyled = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.fontColorMain};
  background: ${({ theme }) => theme.colors.bg};
  overflow-x: scroll;
  overflow-y: hidden;
`;

export const Board = () => {
  return (
    <BoardOutStyled>
      <BoardStyled>
        <Title color="sub">Your boards</Title>
      </BoardStyled>
    </BoardOutStyled>
  );
};
