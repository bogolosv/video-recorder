import { useContext, useEffect } from 'react';
import { SettingsModalContext } from '../const';

export function useSettingsModal(container?: HTMLElement | null) {
    const context = useContext(SettingsModalContext);

    if (!context) {
        throw new Error('useSettingsModal must be used within a SettingsProvider');
    }

    const { setContainer, ...rest } = context;

    useEffect(() => {
        if (container) {
            setContainer(container);
        }
    }, [container, setContainer]);

    return {
        ...rest,
        setContainer,
    };
}