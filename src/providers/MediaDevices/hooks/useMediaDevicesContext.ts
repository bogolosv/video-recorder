import { useContext } from 'react';
import { MediaDevicesContext } from '../const';

export function useMediaDevicesContext() {
    return useContext(MediaDevicesContext);
}