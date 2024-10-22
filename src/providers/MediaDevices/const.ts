import { createContext } from 'react';
import { MediaDevicesStateType } from './types';

export const MediaDevicesContext = createContext(undefined as unknown as MediaDevicesStateType);
