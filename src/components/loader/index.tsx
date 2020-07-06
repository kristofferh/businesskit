import React, { CSSProperties } from "react";
import { SVG, Spinner, Container } from "./styles";

interface Props {
  backgroundColor?: string;
  borderWidth?: number;
  color?: string;
  size?: number;
  style?: CSSProperties;
  showBackground?: boolean;
  className?: string;
  spinnerClassName?: string;
  spinnerStyle?: CSSProperties;
  showDashAnimation?: boolean;
}

export const Loader: React.FC<Props> = ({
  color,
  style,
  className,
  size,
  borderWidth,
  backgroundColor,
  showBackground,
  spinnerClassName,
  spinnerStyle,
  showDashAnimation,
}) => {
  return (
    <Container containerSize={size} style={style} className={className}>
      <SVG
        dashAnimation={showDashAnimation}
        height={size}
        width={size}
        viewBox="0 0 40 40"
      >
        <g fill="none">
          {showBackground ? (
            <circle
              stroke={backgroundColor}
              strokeWidth={borderWidth}
              r={(size - borderWidth) / 2}
              cx="50%"
              cy="50%"
            />
          ) : null}
          <Spinner
            dashAnimation={showDashAnimation}
            className={spinnerClassName}
            style={spinnerStyle}
            stroke={color}
            strokeWidth={borderWidth}
            r={(size - borderWidth) / 2}
            cx="50%"
            cy="50%"
          />
        </g>
      </SVG>
    </Container>
  );
};

Loader.defaultProps = {
  backgroundColor: "#dedede",
  borderWidth: 5,
  color: "#53b3d4",
  size: 40,
};

export default Loader;
