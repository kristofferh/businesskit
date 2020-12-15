import styled from "@emotion/styled";
import { Close } from "../../icons/close";

export const Container = styled("span")<{
  sx?: any;
  variant?: any;
}>(
  {
    boxSizing: "border-box",
    minWidth: 0,
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    textTransform: "uppercase",
    borderRadius: 2,
    color: "#fff",
    fontWeight: "bold",
    whiteSpace: "nowrap",
    maxWidth: "100%",
    minHeight: 20,
  },
  ({ theme }: any) => ({
    backgroundColor: theme.colors.gray[7],
  }),
  ({ variant }) => {
    return variant === "outline"
      ? {
          border: "1px solid blue",
        }
      : {};
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
