import { FC } from 'react';
import classes from './styles/index.module.scss';
import { Row } from "antd";
import { RowProps } from "antd/es/grid/row";
import classNames from "classnames";
import { SizesType } from "../../styles/const/sizes/index.module.scss";

type FlexBoxPropsType = {
    gap?: keyof SizesType;
    column?: boolean;
    flexWrap?: boolean;
}

export const FlexBox: FC<FlexBoxPropsType & RowProps> = (
    {
        gap,
        children,
        column,
        flexWrap,
        className,
        ...props
    }
) => {
    const flexBoxClassNames = classNames( className, {
        [classes.flexBox]: true,
        [classes[`gap_${gap}`]]: !!gap,
        [classes.column]: column,
        [classes.flexWrap]: flexWrap,
    });

    return (
        <Row className={flexBoxClassNames} {...props}>
            {children}
        </Row>
    );
}