import { FC } from 'react';
import classes from './styles/index.module.scss';
import { FlexBox } from "../../../FlexBox";
import { DropdownValueType } from "../../types";
import { CheckMark } from "../../../../icons/CheckMark";
import classNames from "classnames";
import { Span } from "../../../Topography/Span";

type DropdownItemType = {
    item: DropdownValueType,
    isSelected: boolean,
    onClick: () => void,
}

export const DropdownItem: FC<DropdownItemType> = (
    { item, isSelected, onClick }
) => {
    const handleClick = () => {
        !item.isDisabled && onClick();
    };
    const itemClasses = classNames(classes.dropdownItem, {
        [classes.dropdownItem_disabled]: item.isDisabled,
    });

    return (
        <div onClick={handleClick} className={itemClasses}>
            <FlexBox justify='space-between' align='middle' style={{ height: '100%' }}>
                <Span weight='semiBold' className={classes.dropdownItem_text}>{item.title}</Span>
                {isSelected && (
                    <CheckMark className={classes.checkMark}/>
                )}
            </FlexBox>
        </div>
    );
}