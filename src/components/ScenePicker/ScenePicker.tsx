import { FC } from 'react';
// import classes from './styles/index.module.scss';
import { Button } from "../Button";
import { AddSceneIcon } from "../../icons/AddSceneIcon.tsx";

type ScenePickerPropsType = {}

export const ScenePicker: FC<ScenePickerPropsType> = () => {
    return (
        <>
            <Button primary size='small' Icon={AddSceneIcon}>Add</Button>
        </>
    );
}