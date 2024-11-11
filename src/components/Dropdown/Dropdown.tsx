import { FC, ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import classes from './styles/index.module.scss';
import { FlexBox } from "../FlexBox";
import { DropdownCollapseIcon } from "../../icons/DropdownCollapseIcon";
import classNames from "classnames";
import { PaddingBox } from "../PaddingBox";
import { createPortal } from "react-dom";
import { DropdownContent } from "./components/DropdownContent";
import { DropdownPositionType, DropdownValueType } from "./types";
import { Span } from "../Topography/Span";

type DropdownPropType = {
    icon?: ReactNode;
    isCurrentTitleHidden?: boolean;
    values: DropdownValueType[];
    currentId?: string;
    disabled?: boolean;
    setCurrentId: (value: string) => void;
    title?: string;
    onClick?: () => Promise<void>;
}

export const Dropdown: FC<DropdownPropType> = (
    {
        icon,
        isCurrentTitleHidden,
        values,
        currentId,
        disabled,
        setCurrentId,
        title,
        onClick,
    }
) => {
    const [isShownDropdownContent, setIsShownDropdownContent] = useState(false);
    const [dropdownPosition, setDropdownPosition] = useState<DropdownPositionType>();
    const dropdownRef = useRef<HTMLDivElement>(null);

    const div = useMemo(() => {
        const root = document.createElement('div');
        dropdownRef.current?.after(root);
        return root;
    }, [dropdownRef.current, isShownDropdownContent]);
    const selectedDropdownValue = useMemo(() => values.find(value => value.id === currentId), [currentId]);

    const dropdownClasses = classNames(classes.dropdownContainer, {
        [classes.dropdownContainer_enabled]: !disabled,
        [classes.dropdownContainer_disabled]: disabled,
        [classes.dropdownContainer_active]: isShownDropdownContent,
    });
    const handleDropdownOpen = async () => {
        if (disabled) return;

        if (onClick) await onClick();
        
        const position = dropdownRef.current!.getBoundingClientRect();
        setDropdownPosition({
            x: position.x,
            y: position.y,
            height: position.height,
            width: position.width,
        });
        setIsShownDropdownContent(true);
    };

    const handleDropdownClose = () => {
        setIsShownDropdownContent(false);
    };
    useEffect(() => {
        return () => {
            div.remove();
        }
    }, [isShownDropdownContent]);

    return (
        <div>
            <div onClick={handleDropdownOpen} className={dropdownClasses} ref={dropdownRef} title={title}>
                <PaddingBox smallHR style={{ height: '100%' }}>
                    <FlexBox justify='space-between' align='middle' style={{ height: '100%' }}>
                        <FlexBox justify='center' align='middle' gap='tiny' style={{ width: '100%' }}>
                            {icon}
                            {!isCurrentTitleHidden && (
                                <FlexBox gap='medium' align='middle' justify='space-between' style={{ width: '100%' }}>
                                    <Span weight='normal' size='small' className={classes.dropdownContainer_text}>
                                        {title}:
                                    </Span>
                                    <Span weight='semiBold' size='small' className={classes.dropdownContainer_text}>
                                        {selectedDropdownValue?.title ?? 'Select'}
                                    </Span>
                                </FlexBox>
                            )}
                            {title && isCurrentTitleHidden && (
                                <Span weight='semiBold' size='small' className={classes.dropdownContainer_text}>
                                    {title}
                                </Span>
                            )}
                        </FlexBox>
                        <DropdownCollapseIcon/>
                    </FlexBox>
                </PaddingBox>
            </div>
            {isShownDropdownContent && values.length > 0 && createPortal(
                <DropdownContent
                    onClose={handleDropdownClose}
                    dropdownPosition={dropdownPosition!}
                    values={values}
                    currentId={currentId}
                    setCurrentId={setCurrentId}
                />,
                div
            )}
        </div>
    );
}