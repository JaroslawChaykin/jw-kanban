import styled from "styled-components";
import { Plus } from "lucide-react";
import { JButton } from "../../../shared/ui";

const Wrapper = styled.div`
  min-width: 250px;
  padding: 20px;
  color: ${({ theme }) => theme.colors.fontColorMain};
`;

export const NavBar = () => {
  return (
    <Wrapper>
      <div>
        <JButton
          label={"New Project"}
          icon={<Plus size={14} />}
          full
          outlined
        />
      </div>
    </Wrapper>
  );
};
