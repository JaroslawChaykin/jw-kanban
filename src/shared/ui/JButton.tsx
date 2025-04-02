import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  full?: boolean;
  label: ReactNode | string;
}

const ButtonStyled = styled.button<{ $fullWidth: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.$fullWidth ? "100%" : "auto")};
  padding: ${(props) => (props.$fullWidth ? 0 : "0px 12px")};
  height: 40px;
  font-family: "LTSuperior";
  font-weight: 700;
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.accentPrimary};
  color: ${({ theme }) => theme.colors.fontColorMain};
`;

const IconStyled = styled.span`
  display: flex;
  padding-right: 4px;
`;

export const JButton: FC<ButtonProps> = ({
  label,
  icon,
  full = false,
  ...rest
}) => {
  return (
    <ButtonStyled {...rest} $fullWidth={full}>
      {icon && <IconStyled>{icon}</IconStyled>}
      <span>{label}</span>
    </ButtonStyled>
  );
};
