import { useContext, useEffect } from 'react';
import { MessageContext } from '../const';

export function useMessageContext(container?: HTMLElement | null) {
    const context = useContext(MessageContext);

    if (!context) {
        throw new Error('useMessage must be used within a MessageProvider');
    }

    const { openMessage, setContainer } = context;

    useEffect(() => {
        if (container) {
            setContainer(container);
        }
    }, [container, setContainer]);

    return {
        openMessage,
        setContainer,
    };
}