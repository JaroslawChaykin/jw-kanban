import { useState } from "react";
import styled from "styled-components";
import { MoveUpRight, X } from "lucide-react";
import { JButton, Modal, Title } from "../../../shared/ui";
import { IconButton } from "../../../shared/ui/IconButton";
import { CreateBoardForm } from "./CreateBoardForm";

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
  const [boardName, setBoardName] = useState("");

  const onSubmit = () => {
    console.log(boardName);
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
            boardName={boardName}
            handleBoardName={setBoardName}
            handleSubmit={() => onSubmit()}
            setIsModalOpen={() => setIsModalOpen(false)}
          />
        </ModalStyled>
      </Modal>
    </div>
  );
};
