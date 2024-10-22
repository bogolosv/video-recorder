import { ButtonHTMLAttributes, DetailedHTMLProps, FC, SVGProps } from 'react';
import classes from './styles/index.module.scss';
import classNames from "classnames";
import { FlexBox } from "../FlexBox";

export type ButtonPropsType = {
    size?: 'small' | 'medium' | "large";
    /**
     * Is primary style
     */
    primary?: boolean;
    /**
     * Is link style
     */
    link?: boolean;
    /**
     * Aligning of the content of the Button
     */
    placement?: 'center' | 'start' | 'end' | "space-between";
    /**
     * Icon of the Button
     */
    Icon?: FC<SVGProps<SVGSVGElement>>;
    /**
     * Aligning of the icon in the Button
     */
    iconPlacement?: 'left' | 'right';
    /**
     * Is icon styled as a button
     */
    styledIcon?: boolean;
    href?: string;
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const Button: FC<ButtonPropsType> = (
    {
        size = 'large',
        link = false,
        primary = false,
        placement = 'center',
        className,
        children,
        Icon,
        iconPlacement = 'left',
        styledIcon = true,
        ...props
    }
) => {
    const buttonClasses = classNames(className, classes.button, classes[`button_${size}`], {
        [classes.button_default]: !link && !primary,
        [classes.button_link]: link && !primary,
        [classes.button_primary]: primary,
    });

    const iconClasses = classNames({
        [classes.svg]: styledIcon,
    });

    return (
        <button className={buttonClasses} {...props}>
            <FlexBox justify={placement} gap='tiny' align='middle'>
                {!!Icon && iconPlacement === 'left' && (
                    <Icon className={iconClasses}/>
                )}
                {children}
                {!!Icon && iconPlacement === 'right' && (
                    <Icon className={iconClasses}/>
                )}
            </FlexBox>
        </button>
    );
}