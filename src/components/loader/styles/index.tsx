import { css, keyframes } from "@emotion/core";
import styled from "@emotion/styled";

export const buttonSpin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const dash = keyframes`
  0% {
    stroke-dashoffset: 180;
  }
  50% {
    stroke-dashoffset: 110;
    transform: rotate(135deg);
  }
  100% {
    stroke-dashoffset: 180;
    transform: rotate(360deg);
  }
`;

export const Container = styled.div<{ containerSize: number }>`
  position: relative;
  width: ${({ containerSize }) => containerSize}px;
  height: ${({ containerSize }) => containerSize}px;
`;

export const SVG = styled.svg<{ dashAnimation: boolean }>`
  transform-origin: center center;
  animation: ${buttonSpin}
    ${({ dashAnimation }) => (dashAnimation ? "1.5s" : "0.9s")} infinite linear;
  display: block;
  pointer-events: none;
`;

export const Spinner = styled.circle<{ dashAnimation: boolean }>`
  ${({ dashAnimation }) =>
    dashAnimation
      ? css`
          animation: ${dash} 1.5s infinite ease-in-out forwards;
          stroke-dasharray: 200;
          stroke-dashoffset: 0;
          transform-origin: center;
        `
      : `
        stroke-dashoffset: -80;
        stroke-dasharray: 200;
        `};
  stroke-linecap: round;
`;
