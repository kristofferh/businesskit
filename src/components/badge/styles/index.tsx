import styled from "@emotion/styled";
import { Close } from "../../icons/close";

const gray = (variant: any, theme: any) => {
  return variant === "outline"
    ? {
        backgroundColor: theme.colors.gray[1],
        color: theme.colors.gray[8],
        boxShadow: `0 0 0 1px ${theme.colors.gray[3]}`,
      }
    : {
        backgroundColor: theme.colors.gray[7],
        color: "#fff",
      };
};

export const Container = styled("span")<{
  sx?: any;
  variant?: any;
  theme?: any;
  colorScheme?: any;
}>(
  {
    boxSizing: "border-box",
    minWidth: 0,
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    textTransform: "uppercase",
    borderRadius: 2,
    fontWeight: "bold",
    whiteSpace: "nowrap",
    maxWidth: "100%",
    minHeight: 20,
  },
  ({ variant, theme, colorScheme }) => {
    // TODO: implement color schemes.
    function scheme(colorScheme: any) {
      switch (colorScheme) {
        default:
          return gray(variant, theme);
      }
    }
    return scheme(colorScheme);
  },
  ({ sx }) => ({ ...sx })
);

export const Inner = styled.span`
  padding: 0 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.1;
`;

export const RemoveContainer = styled.span`
  margin-left: -4px;
  padding: 0 4px 0 0;
  cursor: pointer;
  display: inline-flex;
`;

export const Remove = styled.button`
  padding: 0;
  cursor: pointer;
  appearance: none;
  border: 0;
  background: transparent;

  &:focus {
    outline: 2px solid rgb(255, 255, 0);
  }
`;

export const CloseIcon = styled(Close)`
  vertical-align: middle;
  display: block;
`;
