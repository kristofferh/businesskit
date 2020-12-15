/** @jsxImportSource @emotion/react */
import React from "react";
import { Container, Inner, Remove, RemoveContainer, CloseIcon } from "./styles";
import { white } from "../../styles/colors";
import { CSSObject } from "@emotion/react";

const SIZE = 14;

export type Variant = "solid" | "outline";

export interface Props {
  className?: string;
  isRemovable?: boolean;
  removeProps?: any;
  removeColor?: string;
  variant?: Variant;
  sx?: CSSObject;
}

export const Badge: React.FC<Props> = ({
  children,
  isRemovable,
  removeProps,
  removeColor,
  sx,
  className,
  variant,
}) => {
  return (
    <Container className={className} variant={variant} sx={sx}>
      <Inner>{children}</Inner>
      {isRemovable && (
        <RemoveContainer {...removeProps}>
          <Remove {...removeProps}>
            <CloseIcon width={SIZE} height={SIZE} color={removeColor} />
          </Remove>
        </RemoveContainer>
      )}
    </Container>
  );
};

Badge.defaultProps = {
  variant: "solid",
  removeColor: white,
};

export default Badge;
