import { CSSProperties, FC, useEffect, useRef, useState } from 'react';
import classes from './styles/index.module.scss';
import { DropdownPositionType, DropdownValueType } from "../../types";
import { FlexBox } from "../../../FlexBox";
import { PaddingBox } from "../../../PaddingBox";
import { DropdownItem } from "../DropdownItem";

type DropdownContentType = {
    onClose: () => void;
    dropdownPosition: DropdownPositionType;
    values: DropdownValueType[];
    currentId?: string;
    setCurrentId: (value: string) => void;
}

export const DropdownContent: FC<DropdownContentType> = (
    {
        onClose,
        dropdownPosition,
        values,
        currentId,
        setCurrentId,
    }
) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerStyle, setContainerStyle] = useState<CSSProperties>({
        left: -1000,
        top: -1000,
    });

    useEffect(() => {
        if(containerRef.current) {
            const padding = 24;
            const element = (document.documentElement ?? document.body.parentNode ?? document.body);
            const { clientHeight, clientWidth } = element;
            const container = containerRef.current.getBoundingClientRect();
            setContainerStyle({
                top: clientHeight - (padding * 2) - container.height - dropdownPosition.y > 0
                    ? dropdownPosition.y + dropdownPosition.height
                    : dropdownPosition.y - container.height,
                left: clientWidth - padding - container.width - dropdownPosition.x > 0
                    ? dropdownPosition.x
                    : clientWidth - padding - container.width,
            });
        }
    }, [values.length]);

    return (
        <div>
            <div className={classes.dropdownContent_background} onClick={onClose}/>
            <div
                style={containerStyle}
                className={classes.dropdownContent_container}
                ref={containerRef}
            >
                {values.length > 0 && (
                    <PaddingBox small className={classes.dropdownContent_scroll}>
                        <FlexBox column>
                            {values.map(value => {
                                const handleItemClick = () => {
                                    onClose();
                                    setCurrentId(value.id);
                                };
                                return (
                                    <DropdownItem
                                        item={value}
                                        isSelected={value.id === currentId}
                                        onClick={handleItemClick}
                                        key={value.id}
                                    />
                                )
                            })}
                        </FlexBox>
                    </PaddingBox>
                )}
            </div>
        </div>
    );
}