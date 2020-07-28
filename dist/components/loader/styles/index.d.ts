/// <reference types="react" />
export declare const buttonSpin: import("@emotion/serialize").Keyframes;
export declare const dash: (spinnerLength: number) => import("@emotion/serialize").Keyframes;
export declare const Container: import("@emotion/styled-base").StyledComponent<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    containerSize: number;
}, object>;
export declare const SVG: import("@emotion/styled-base").StyledComponent<import("react").SVGProps<SVGSVGElement>, {
    dashAnimation: boolean;
}, object>;
export declare const Spinner: import("@emotion/styled-base").StyledComponent<import("react").SVGProps<SVGCircleElement>, {
    dashAnimation: boolean;
    spinnerLength: number;
}, object>;
