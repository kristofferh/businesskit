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

export const dash = (spinnerLength: number) => keyframes`
  0% {
    stroke-dashoffset: ${spinnerLength * 0.9};
  }
  50% {
    stroke-dashoffset: ${spinnerLength * 0.1};
    transform: rotate(135deg);
  }
  100% {
    stroke-dashoffset: ${spinnerLength * 0.9};
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

export const Spinner = styled.circle<{
  dashAnimation: boolean;
  spinnerLength: number;
}>`
  ${({ dashAnimation, spinnerLength }) =>
    dashAnimation
      ? css`
          animation: ${dash(spinnerLength)} 1.5s infinite ease-in-out forwards;
          stroke-dasharray: ${spinnerLength};
          stroke-dashoffset: 0;
          transform-origin: center;
        `
      : `
        stroke-dashoffset: ${spinnerLength * 0.75};
        stroke-dasharray: ${spinnerLength};
        `};
  stroke-linecap: round;
`;
