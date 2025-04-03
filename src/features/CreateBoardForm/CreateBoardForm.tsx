import { useState } from "react";
import styled from "styled-components";
import { Plus } from "lucide-react";
import { JButton, Modal, Title } from "../../shared/ui";

const ModalStyled = styled.div`
  width: 600px;
  background: red;
  padding: 20px;
  border-radius: 16px;
`;

export const CreateBoardForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <JButton
        label={"New Project"}
        icon={<Plus size={14} />}
        full
        outlined
        onClick={() => setIsModalOpen(true)}
      />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalStyled>
          <Title as="h2">Hello</Title>
        </ModalStyled>
      </Modal>
    </div>
  );
};
