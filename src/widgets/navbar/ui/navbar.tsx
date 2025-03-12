import styled from "styled-components";
import { JButton } from "../../../shared";

const Wrapper = styled.div`
  min-width: 250px;
  padding: 10px;
  color: #ffffff;
`;

export const NavBar = () => {
  return (
    <Wrapper>
      Hello
      <div>
        <JButton label={"Title"} onClick={() => console.log(1)} />
        <JButton label={"Title"} />
      </div>
    </Wrapper>
  );
};
