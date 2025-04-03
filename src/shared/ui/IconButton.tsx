import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  outlined?: boolean;
}

const ButtonStyled = styled.button<{ $outlined: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: ${({ theme, $outlined }) =>
    `1px solid ${
      $outlined ? theme.colors.border : theme.colors.accentPrimary
    }`};
  background: ${({ theme }) => theme.colors.accentPrimary};
  color: ${({ theme }) => theme.colors.fontColorMain};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentPrimaryHover};
  }
`;

export const IconButton: FC<ButtonProps> = ({
  icon,
  outlined = false,
  ...rest
}) => {
  return (
    <ButtonStyled {...rest} $outlined={outlined}>
      {icon}
    </ButtonStyled>
  );
};
