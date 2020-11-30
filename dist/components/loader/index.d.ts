import React, { CSSProperties } from "react";
export interface Props {
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
export declare const Loader: React.FC<Props>;
export default Loader;
