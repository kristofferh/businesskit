/// <reference types="react" />
export declare const buttonSpin: import("@emotion/serialize").Keyframes;
export declare const dash: (spinnerLength: number) => import("@emotion/serialize").Keyframes;
export declare const Container: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
} & {
    containerSize: number;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const SVG: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
} & {
    dashAnimation: boolean;
}, import("react").SVGProps<SVGSVGElement>, {}>;
export declare const Spinner: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
} & {
    dashAnimation: boolean;
    spinnerLength: number;
}, import("react").SVGProps<SVGCircleElement>, {}>;
