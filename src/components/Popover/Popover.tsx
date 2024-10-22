import { FC, ReactNode } from 'react';
import { Tooltip } from "antd";
import { TooltipProps } from "antd/es/tooltip";

type PopoverPropsType = Omit<TooltipProps, 'title'> & {
    content: ReactNode,
}

export const Popover: FC<PopoverPropsType> = ({ content, ...props }) => {
    return (
        <Tooltip
            arrow={{
                pointAtCenter: true,
            }}
            title={content}
            trigger='click'
            getPopupContainer={(triggerNode: HTMLElement) => triggerNode.parentElement!}
            {...props}
        />
    );
}