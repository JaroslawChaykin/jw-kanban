import { useState } from "react";
import styled from "styled-components";
import { Plus } from "lucide-react";
import { JButton, Modal, Title } from "../../../shared/ui";

const Wrapper = styled.div`
  min-width: 250px;
  padding: 20px;
  color: ${({ theme }) => theme.colors.fontColorMain};
`;

const ModalStyled = styled.div`
  width: 600px;
  background: red;
  padding: 20px;
  border-radius: 16px;
`;

export const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Wrapper>
      <div>
        <JButton
          label={"New Project"}
          icon={<Plus size={14} />}
          full
          outlined
          onClick={() => setIsModalOpen(true)}
        />
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalStyled>
          <Title as="h2">Hello</Title>
        </ModalStyled>
      </Modal>
    </Wrapper>
  );
};
