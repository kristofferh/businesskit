import React from "react";
import { Close } from "../icons/close";
import { Container, Inner, Remove, RemoveContainer } from "./styles";

const SIZE = 14;

interface Props {
  bgColor?: string;
  isRemovable?: boolean;
  removeProps?: any;
}

export const Label: React.FC<Props> = ({
  children,
  bgColor,
  isRemovable,
  removeProps,
}) => (
  <Container bgColor={bgColor}>
    <Inner>{children}</Inner>
    {isRemovable && (
      <RemoveContainer {...removeProps}>
        <Remove {...removeProps}>
          <Close width={SIZE} height={SIZE} />
        </Remove>
      </RemoveContainer>
    )}
  </Container>
);

export default Label;
