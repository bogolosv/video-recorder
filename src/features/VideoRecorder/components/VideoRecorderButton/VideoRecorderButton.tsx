import { ButtonHTMLAttributes, DetailedHTMLProps, FC, SVGProps } from 'react';
import classes from './styles/index.module.scss';
import classNames from "classnames";

type VideoRecorderButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    Icon?: FC<SVGProps<SVGSVGElement>>;
}

export const VideoRecorderButton: FC<VideoRecorderButtonPropsType> = (
    { Icon, className, children, ...props }
) => {
    const buttonClasses = classNames(classes.button, className);
    return (
        <button className={buttonClasses} {...props}>
            {children}
            {Icon && <Icon className={classes.icon} width='24px' height='24px' />}
        </button>
    );
}