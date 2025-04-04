import { FC } from "react";
import { IBoard } from "../../../entities/boards/types";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../shared/lib/redux";
import { setActiveBoard } from "../../../entities/boards/BoardActions";

type BoardItemProps = {
  board: IBoard;
};

const BoardItemStyled = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  height: 40px;
  margin: 2px 0;
  border-radius: 10px;
  padding: 0 16px;
  cursor: pointer;
  background: ${({ theme, $active }) => $active && theme.colors.accentPrimary};

  &:hover {
    background: ${({ theme }) => theme.colors.accentPrimary};
  }
`;

export const BoardItem: FC<BoardItemProps> = ({ board }) => {
  const activeBoardId = useAppSelector((state) => state.boards.activeBoardId);
  const dispatch = useAppDispatch();

  const handleSetActiveBoard = () => {
    if (activeBoardId === board.id) return;

    dispatch(setActiveBoard(board.id));
  };

  return (
    <BoardItemStyled
      $active={activeBoardId === board.id}
      onClick={() => handleSetActiveBoard()}
    >
      {board.name}
    </BoardItemStyled>
  );
};
