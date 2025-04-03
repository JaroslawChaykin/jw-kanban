import styled from "styled-components";
import { Title } from "../../../shared/ui";
import { CreateBoardModal } from "../../../features";

const Wrapper = styled.div`
  min-width: 250px;
  padding: 20px;
  color: ${({ theme }) => theme.colors.fontColorMain};
`;

export const NavBar = () => {
  return (
    <Wrapper>
      <div>
        <Title color="sub">Your kanban</Title>
        <CreateBoardModal />
      </div>
    </Wrapper>
  );
};
