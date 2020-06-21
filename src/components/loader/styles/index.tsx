import { css, keyframes } from "@emotion/core";
import styled from "@emotion/styled";

export const buttonSpin = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0deg);
    transform-origin: center center;
  }

  to {
    transform: translate(-50%, -50%) rotate(360deg);
    transform-origin: center center;
  }
`;

export const dash = keyframes`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 100;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 200;
    stroke-dashoffset: -100px;
  }
`;

export const Container = styled.div<{ containerSize: number }>`
  position: relative;
  width: ${({ containerSize }) => containerSize}px;
  height: ${({ containerSize }) => containerSize}px;
`;

export const SVG = styled.svg<{ dashAnimation: boolean }>`
  animation: ${buttonSpin}
    ${({ dashAnimation }) => (dashAnimation ? "1.5s" : "0.9s")} infinite
    cubic-bezier(0.08, 0.03, 1, 1.04);
  display: block;
  pointer-events: none;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Spinner = styled.circle<{ dashAnimation: boolean }>`
  ${({ dashAnimation }) =>
    dashAnimation
      ? css`
          animation: ${dash} 2.2s infinite ease-in-out;
          stroke-dashoffset: 0;
          stroke-dasharray: 1, 200;
        `
      : `
        stroke-dashoffset: -80;
        stroke-dasharray: 200;
        `};
  stroke-linecap: round;
`;
