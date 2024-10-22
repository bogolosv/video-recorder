import { FC } from 'react';
import { SpanPropsType } from "../types";
import { useTopographyClasses } from "../hooks/useTopographyClasses";
import classNames from "classnames";
import usePropsWithoutTopography from "../hooks/usePropsWithoutTopography";

export const Span: FC<SpanPropsType> = (
    { className, children, ...props }
) => {
    const topographyClasses = useTopographyClasses(props);
    const spanProps = usePropsWithoutTopography(props);
    const spanClasses = classNames(className, topographyClasses);

    return (
        <span className={spanClasses} {...spanProps}>
            {children}
        </span>
    );
}