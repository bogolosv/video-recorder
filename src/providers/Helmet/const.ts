import { createContext } from 'react';
import { HelmetStateType } from './types';

export const HelmetContext = createContext(undefined as unknown as HelmetStateType);
