import { FC, ReactNode, useCallback, useState } from 'react';
import { SettingsModalContext } from './const';
import { Modal } from "../../components/Modal";
import { SettingsModalContent } from "./SettingsModalContent.tsx";

type SettingsModalProviderPropsType = {
    children: ReactNode;
}

export const SettingsModalProvider: FC<SettingsModalProviderPropsType> = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [container, setContainer] = useState<HTMLElement>();

    const close = useCallback(() => {
        setIsOpen(false);
    }, []);
    const open = useCallback(() => {
        setIsOpen(true);
    }, []);

    return (
        <SettingsModalContext.Provider value={{
            setContainer, isOpen, openModal: open
        }}>
            {children}
            <Modal
                open={isOpen}
                title={('Settings')}
                onClose={close}
                container={container}
                removeContainerOnExit={!container}
            >
                <SettingsModalContent/>
            </Modal>
        </SettingsModalContext.Provider>
    );
}