import React, { SVGAttributes } from "react";
export interface SVGIconProps extends SVGAttributes<SVGElement> {
    color?: string;
    className?: string;
}
export declare const SVGIcon: React.FC<SVGIconProps>;
