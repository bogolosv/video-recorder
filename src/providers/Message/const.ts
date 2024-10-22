import { createContext } from 'react';
import { MessageStateType } from './types';

export const MessageContext = createContext(undefined as unknown as MessageStateType);
