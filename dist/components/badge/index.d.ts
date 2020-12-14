/** @jsxImportSource @emotion/react */
import React from "react";
import { CSSObject } from "@emotion/react";
export declare type Variant = "solid" | "outline";
export interface Props {
    className?: string;
    isRemovable?: boolean;
    removeProps?: any;
    removeColor?: string;
    variant?: Variant;
    sx?: CSSObject;
}
export declare const Badge: React.FC<Props>;
export default Badge;
