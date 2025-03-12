import styled from "styled-components";

const ColumnStyled = styled.div`
  flex-shrink: 0;
  width: 300px;
  padding: 10px;
  background: #272727;
  border-radius: 15px;
  overflow-y: scroll;
`;

export const Column = () => {
  return <ColumnStyled></ColumnStyled>;
};
