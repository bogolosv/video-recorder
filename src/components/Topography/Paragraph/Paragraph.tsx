import { FC } from 'react';
import classes from './styles/index.module.scss';
import { ParagraphPropsType } from "../types";
import { useTopographyClasses } from "../hooks/useTopographyClasses";
import classNames from "classnames";
import usePropsWithoutTopography from "../hooks/usePropsWithoutTopography";

export const Paragraph: FC<ParagraphPropsType> = (
    { className, ...props }
) => {
    const topographyClasses = useTopographyClasses(props);
    const pProps = usePropsWithoutTopography(props);
    const paragraphClasses = classNames(className, topographyClasses, classes.p);

    return (
        <p className={paragraphClasses} {...pProps}/>
    );
}