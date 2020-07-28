import React, { CSSProperties, useEffect, useRef, useState } from "react";
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
  const [spinnerLength, setSpinnerLength] = useState(100);
  const spinnerRef = useRef<SVGCircleElement>(null);
  useEffect(() => {
    if (spinnerRef.current) {
      try {
        const length = Math.round(spinnerRef.current.getTotalLength());
        setSpinnerLength(length);
      } catch (e) {
        setSpinnerLength(0);
      }
    }
  }, [size, borderWidth, showDashAnimation, spinnerRef]);

  return (
    <Container containerSize={size} style={style} className={className}>
      <SVG
        dashAnimation={showDashAnimation}
        height={size}
        width={size}
        viewBox={`0 0 ${size} ${size}`}
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
            ref={spinnerRef}
            dashAnimation={showDashAnimation}
            className={spinnerClassName}
            style={spinnerStyle}
            stroke={color}
            strokeWidth={borderWidth}
            r={(size - borderWidth) / 2}
            cx="50%"
            cy="50%"
            spinnerLength={spinnerLength}
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
