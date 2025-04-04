import { FC, ReactNode } from "react";
import styled from "styled-components";

type TitleProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  color?: "main" | "sub";
  weight?: 400 | 500 | 700 | 900;
  children: ReactNode;
};

const TitleStyled = styled(({ level = "h1", ...props }) => {
  const Tag = level;
  return <Tag {...props} />;
})<TitleProps>`
  font-size: ${({ level }) => {
    switch (level) {
      case "h1":
        return "32px";
      case "h2":
        return "28px";
      case "h3":
        return "24px";
      case "h4":
        return "20px";
      case "h5":
        return "16px";
      case "h6":
        return "14px";
      default:
        return "32px";
    }
  }};

  font-weight: ${({ weight }) => weight};
  color: ${({ theme, color }) =>
    color === "main" ? theme.colors.fontColorMain : theme.colors.fontColorSub};
  font-family: "LTSuperior", sans-serif;
`;

export const Title: FC<TitleProps> = ({
  as = "h1",
  weight = 400,
  color = "main",
  children,
}) => {
  return (
    <TitleStyled level={as} weight={weight} color={color}>
      {children}
    </TitleStyled>
  );
};
