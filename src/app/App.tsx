import styled from "styled-components";
import { StoreProvider } from "./providers/StoreProvider";

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  padding: 10px;
  background: black;
`;

const ContentSides = styled.div`
  padding: 10px;
  border-radius: 20px;
  color: #ffffff;
  background: #131313;
`;

const NavBar = styled(ContentSides)`
  min-width: 250px;
`;

const KanbanBoard = styled(ContentSides)`
  display: flex;
  gap: 10px;
  width: 100%;
  height: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
`;

const StatusColumn = styled.div`
  flex-shrink: 0;
  width: 300px;
  padding: 10px;
  background: #272727;
  border-radius: 15px;
  overflow-y: scroll;
`;

export const App = () => {
  return (
    <StoreProvider>
      <Wrapper>
        <NavBar>
          <div>Твои доски</div>
        </NavBar>
        <KanbanBoard>
          <StatusColumn>some text 0</StatusColumn>
          <StatusColumn>
            some text some text some text some text some text some text some
            text some text some text some text some text some text some text
            some text some text some text some text some text some text some
            text some text some text some text some text some text some text
            some text some text some text some text
          </StatusColumn>
        </KanbanBoard>
      </Wrapper>
    </StoreProvider>
  );
};
