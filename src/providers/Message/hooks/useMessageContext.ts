import { useContext } from 'react';
import { MessageContext } from '../const';

export function useMessageContext() {
    return useContext(MessageContext);
}