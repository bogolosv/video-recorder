import { FC } from 'react';
// import classes from './styles/index.module.scss';
import { Dropdown } from "../Dropdown";

type SettingsPropsType = {}

export const Settings: FC<SettingsPropsType> = () => {
    return (
        <>
            <Dropdown values={[{ id: '1', title: 'Hello' }, { id: '2', title: 'Hello' }]} setCurrentId={() => {}}/>
        </>
    );
}