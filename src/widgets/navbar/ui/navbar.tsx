import styled from "styled-components";
import { JButton } from "../../../shared";
import { Plus } from "lucide-react";

const Wrapper = styled.div`
  min-width: 250px;
  padding: 10px;
  color: ${({ theme }) => theme.colors.fontColorMain};
`;

export const NavBar = () => {
  return (
    <Wrapper>
      Hello
      <div>
        <JButton label={"New Request"} onClick={() => console.log(1)} />
        <JButton label={"New Project"} icon={<Plus size={14} />} full />
      </div>
    </Wrapper>
  );
};
