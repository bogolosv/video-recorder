import { CSSProperties, FC, ReactNode } from 'react';
import classes from './styles/index.module.scss';
import { PaddingBoxPosition } from "./const";
import classNames from "classnames";
import { SizesType } from "../../styles/const/sizes/index.module.scss";

type PaddingBoxRenderType = {
    [key in `${keyof SizesType}${PaddingBoxPosition}`]?: boolean;
} & {
    [key in `${keyof SizesType}`]?: boolean;
} & {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
}

type PaddingBoxType = PaddingBoxRenderType & {
    render?: FC<PaddingBoxRenderType>;
}

export const PaddingBox: FC<PaddingBoxType> = (
    { children, render, className, style, ...props }
) => {
    // @ts-ignore
    const paddingBoxClassNames = classNames(Object.keys(props).filter((item) => props[item]).map(item => classes[item]), className);

    if(render) {
        return render({className: paddingBoxClassNames, style, children});
    }

    return (
        <div style={style} className={paddingBoxClassNames}>
            {children}
        </div>
    );
}