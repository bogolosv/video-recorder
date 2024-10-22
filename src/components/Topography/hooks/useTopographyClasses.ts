import { TopographyProps } from "../types";
import classNames from "classnames";
import classes from "../styles/index.module.scss";

export const useTopographyClasses = <T extends TopographyProps>(
    {
        size,
        weight,
    }: T
) => {
    return classNames(
        classes[`size_${size}`],
        classes[`weight_${weight}`],
        classes.lineHeight,
    );
}