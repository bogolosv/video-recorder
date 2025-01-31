import React, {FC, useCallback, useState} from "react";
import {Input} from "antd";
import {FlexBox} from "../../components/FlexBox";
import {Button} from "../../components/Button";
import useScenesStore from "../../store/scenes/useScenesStore.ts";

type AddSceneModalContentPropsType = {
    callback?: (sceneId: string) => void;
    onClose?: () => void;
}

export const AddSceneModalContent: FC<AddSceneModalContentPropsType> = (
    { callback, onClose }
) => {
    const [inputValue, setInputValue] = useState("");
    const { addScene } = useScenesStore();

    const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
        setInputValue(event.currentTarget.value);
    };

    const handleAddClick = useCallback(() => {
        const id = addScene({ name: inputValue });
        callback && callback(id);
        onClose && onClose();
    }, [addScene, inputValue, callback, onClose]);

    return (
        <>
            <Input placeholder="Scene name..." value={inputValue} onInput={handleInputChange}/>
            <FlexBox justify='space-between' align='middle' gap='small'>
                <Button onClick={onClose}>Cancel</Button>
                <Button primary onClick={handleAddClick}>Add</Button>
            </FlexBox>
        </>
    )
}