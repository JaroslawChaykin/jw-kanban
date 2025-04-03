import { FC, InputHTMLAttributes } from "react";
import styled from "styled-components";

const InputStyled = styled.input`
  width: 100%;
  height: 60px;
  padding: 0 20px;
  font-size: 18px;
  border: none;
  border-radius: 14px;
  background: ${(props) => props.theme.colors.input};
  color: ${(props) => props.theme.colors.fontColorMain};
  &::placeholder {
    color: ${(props) => props.theme.colors.fontColorSub};
  }
  &:focus {
    outline: 4px solid black;
  }
`;

export const JInput: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  ...rest
}) => {
  return <InputStyled {...rest} />;
};
