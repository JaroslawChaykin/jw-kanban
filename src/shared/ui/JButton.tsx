import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: ReactNode | string;
}

const ButtonStyled = styled.button`
  width: 100%;
  font-family: "LTSuperior";
  font-weight: 400;
`;

export const JButton: FC<ButtonProps> = ({ label, ...rest }) => {
  return <ButtonStyled {...rest}>{label}</ButtonStyled>;
};
