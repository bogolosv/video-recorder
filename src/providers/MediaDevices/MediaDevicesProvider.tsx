import { FC, ReactNode } from 'react';
import { MediaDevicesContext } from './const';
import { useMediaDevices } from "../../hooks/useMediaDevices.ts";

type MediaDevicesProviderPropsType = {
    children: ReactNode;
}

export const MediaDevicesProvider: FC<MediaDevicesProviderPropsType> = ({children}) => {
    const devices = useMediaDevices();

    return (
        <MediaDevicesContext.Provider value={devices}>
            {children}
        </MediaDevicesContext.Provider>
    );
}