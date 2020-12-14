import css, { SystemStyleObject } from "@styled-system/css";

export type SxProps = { sx?: SystemStyleObject; theme?: Object };

export const sx = ({ sx, theme }: SxProps) => css(sx)(theme);
