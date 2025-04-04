import styled from "styled-components";
import { CreateBoardModal } from "../../../features";
import { useAppSelector } from "../../../shared/lib/redux";
import { Title } from "../../../shared/ui";
import { BoardList } from "../../../features/BoardsList";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 280px;
  padding: 12px;
  color: ${({ theme }) => theme.colors.fontColorMain};
`;
const NavBarPaddingStyled = styled.div`
  padding: 16px;
`;
const NavBarListStyled = styled.div`
  flex-grow: 1;
`;

export const NavBar = () => {
  const boards = useAppSelector((state) => state.boards.boards);
  return (
    <Wrapper>
      <NavBarPaddingStyled>
        <Title as="h3" color="sub">
          Доски
        </Title>
      </NavBarPaddingStyled>

      <NavBarListStyled>
        <BoardList boards={boards} />
      </NavBarListStyled>

      <NavBarPaddingStyled>
        <CreateBoardModal />
      </NavBarPaddingStyled>
    </Wrapper>
  );
};
