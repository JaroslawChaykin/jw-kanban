import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: ReactNode | string;
}

const ButtonStyled = styled.button`
  width: 100%;
`;

export const JButton: FC<ButtonProps> = ({ label, ...rest }) => {
  return <ButtonStyled {...rest}>{label}</ButtonStyled>;
};
