import { FC, forwardRef, InputHTMLAttributes, Ref } from "react";
import styled from "styled-components";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
}

const InputStyled = styled.input<{ $isError: boolean }>`
  width: 100%;
  height: 60px;
  padding: 0 20px;
  font-size: 18px;
  font-family: "LTSuperior", sans-serif;
  font-weight: 700;
  border: ${({ $isError }) => ($isError ? "1px solid red" : "none")};
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

export const JInput: FC<InputProps> = forwardRef(({ isError = false, ...rest }, ref: Ref<HTMLInputElement>) => {
  return <InputStyled ref={ref} {...rest} $isError={isError} />;
})
