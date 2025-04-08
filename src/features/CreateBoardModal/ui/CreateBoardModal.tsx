import { useState } from "react";
import styled from "styled-components";
import { MoveUpRight, X } from "lucide-react";
import { IconButton, JButton, Modal, Title } from "../../../shared/ui";
import { CreateBoardForm, BoardFormInputs } from "./CreateBoardForm";
import { useAppDispatch } from "../../../shared/lib/redux";
import { createBoard } from "../../../entities/boards/BoardActions";
import { SubmitHandler } from "react-hook-form";

const ModalStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 600px;
  background: ${(props) => props.theme.colors.bg};
  border: 1px solid ${(props) => props.theme.colors.border};
  padding: 30px;
  border-radius: 16px;
`;

const ModalHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CreateBoardModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<BoardFormInputs> = (data) => {
    dispatch(
      createBoard({
        name: data.boardName,
      })
    );

    setIsModalOpen(false);
  };

  return (
    <div>
      <JButton
        label={"Новая доска"}
        icon={<MoveUpRight size={16} />}
        full
        outlined
        onClick={() => setIsModalOpen(true)}
      />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalStyled>
          <ModalHeaderStyled>
            <Title as="h1" weight={900}>
              Создать доску
            </Title>
            <IconButton
              icon={<X size={16} />}
              onClick={() => setIsModalOpen(false)}
            />
          </ModalHeaderStyled>

          <CreateBoardForm
            onSubmit={onSubmit}
            setIsModalOpen={() => setIsModalOpen(false)}
          />
          {/* <CreateBoardForm
            isEdit
            boardName="New 33"
            handleDeleteBoard={() => console.log("deleted")}
            onSubmit={onSubmit}
            setIsModalOpen={() => setIsModalOpen(false)}
          /> */}
        </ModalStyled>
      </Modal>
    </div>
  );
};
