import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  full?: boolean;
  label: ReactNode | string;
  outlined?: boolean;
}

const ButtonStyled = styled.button<{ $fullWidth: boolean; $outlined: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
  padding: 0 12px;
  height: 40px;
  font-family: "LTSuperior", sans-serif;
  font-weight: 700;
  font-size: 16px;
  border-radius: 10px;
  border: ${({ theme, $outlined }) =>
    `1px solid ${
      $outlined ? theme.colors.border : theme.colors.accentPrimary
    }`};
  background: ${({ theme }) => theme.colors.accentPrimary};
  color: ${({ theme }) => theme.colors.fontColorMain};
  cursor: pointer;
  user-select: none;

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.accentPrimaryHover};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const IconStyled = styled.span`
  display: flex;
  padding-right: 4px;
`;

export const JButton: FC<ButtonProps> = ({
  label,
  icon,
  full = false,
  outlined = false,
  ...rest
}) => {
  return (
    <ButtonStyled {...rest} $fullWidth={full} $outlined={outlined}>
      {icon && <IconStyled>{icon}</IconStyled>}
      <span>{label}</span>
    </ButtonStyled>
  );
};
