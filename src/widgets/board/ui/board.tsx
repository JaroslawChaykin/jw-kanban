import styled from "styled-components";

const BoardStyled = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  height: 100%;
  padding: 10px;
  border-radius: 4px;
  color: #ffffff;
  background: #101214;
  overflow-x: scroll;
  overflow-y: hidden;
`;

export const Board = () => {
  return <BoardStyled></BoardStyled>;
};
