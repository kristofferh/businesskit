import React from "react";
declare type Variant = "solid" | "outline";
interface Props {
    bg?: string;
    isRemovable?: boolean;
    removeProps?: any;
    removeColor?: string;
    variant: Variant;
}
export declare const Badge: React.FC<Props>;
export default Badge;
