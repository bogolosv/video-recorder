import { FC, useCallback } from 'react';
import classes from './styles/index.module.scss';
import { FlexBox } from "../../../components/FlexBox";
import { useMessageContext } from "../../../providers/Message/hooks/useMessageContext.ts";

type ColorSwatchPropsType = {
    color: string;
    title: string;
}

export const ColorSwatch: FC<ColorSwatchPropsType> = ({ color, title }) => {
    const { openMessage } = useMessageContext();

    const handleClick = useCallback(async () => {
        await navigator.clipboard.writeText(color);
        await openMessage(`Color copied ${color}`);
    }, [color, openMessage]);

    return (
        <FlexBox className={classes.container} column gap='medium' onClick={handleClick}>
            <div className={classes.color} style={{background: color}}/>
            <div className={classes.name}>{title}</div>
            <div className={classes.value}>{color}</div>
        </FlexBox>
    );
}