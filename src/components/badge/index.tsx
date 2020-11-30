/** @jsxImportSource @emotion/react */
import React from "react";
import { Close } from "../icons/close";
import { Container, Inner, Remove, RemoveContainer } from "./styles";
import { white } from "../../styles/colors";
import { css, useTheme } from "@emotion/react";

const SIZE = 14;

type Variant = "solid" | "outline";

export interface Props {
  bg?: string;
  isRemovable?: boolean;
  removeProps?: any;
  removeColor?: string;
  variant?: Variant;
}

export const Badge: React.FC<Props> = ({
  children,
  bg,
  isRemovable,
  removeProps,
  removeColor = white,
}) => {
  const theme = useTheme();
  console.log(theme);
  return (
    <Container background={bg}>
      <Inner>{children}</Inner>
      {isRemovable && (
        <RemoveContainer {...removeProps}>
          <Remove {...removeProps}>
            <Close
              width={SIZE}
              height={SIZE}
              color={removeColor}
              css={css({ verticalAlign: "middle", display: "block" })}
            />
          </Remove>
        </RemoveContainer>
      )}
    </Container>
  );
};

Badge.defaultProps = {
  variant: "solid",
};

export default Badge;
