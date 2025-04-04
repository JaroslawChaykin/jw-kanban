import { FC } from "react";
import { IBoard } from "../../../entities/boards/types";
import styled from "styled-components";
import { BoardItem } from "./BoardItem";

type BoardListProps = {
  boards: IBoard[];
};

const BoardListStyled = styled.div``;

export const BoardList: FC<BoardListProps> = ({ boards }) => {
  return (
    <BoardListStyled>
      {boards.map((board) => (
        <BoardItem key={board.id} board={board} />
      ))}
    </BoardListStyled>
  );
};
