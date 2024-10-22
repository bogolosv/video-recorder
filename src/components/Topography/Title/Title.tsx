import { FC } from 'react';
import classes from './styles/index.module.scss';
import classNames from "classnames";
import { TitleType } from "../types";
import { useTopographyClasses } from "../hooks/useTopographyClasses";
import usePropsWithoutTopography from "../hooks/usePropsWithoutTopography";

export const Title: FC<TitleType> = (
    {
        level = 1,
        className,
        ...props
    }
) => {
    const topographyClasses = useTopographyClasses(props);
    const hProps = usePropsWithoutTopography(props);
    const titleClasses = classNames(
        className,
        topographyClasses,
        classes.h,
    );

    return (
        <>
            {level === 1 && (
                <h1 className={titleClasses} {...hProps} />
            )}
            {level === 2 && (
                <h2 className={titleClasses} {...hProps} />
            )}
            {level === 3 && (
                <h3 className={titleClasses} {...hProps} />
            )}
            {level === 4 && (
                <h4 className={titleClasses} {...hProps} />
            )}
            {level === 5 && (
                <h5 className={titleClasses} {...hProps} />
            )}
            {level === 6 && (
                <h6 className={titleClasses} {...hProps} />
            )}
        </>
    );
}