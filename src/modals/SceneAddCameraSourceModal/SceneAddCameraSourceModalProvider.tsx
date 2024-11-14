import { FC, ReactNode, useCallback, useState } from 'react';
import { SceneAddCameraSourceModalContext } from './const';
import { Modal } from "../../components/Modal";
import { SceneAddCameraSourceModalContent } from "./SceneAddCameraSourceModalContent.tsx";

type SceneAddCameraSourceModalProviderPropsType = {
    children: ReactNode;
}

export const SceneAddCameraSourceModalProvider: FC<SceneAddCameraSourceModalProviderPropsType> = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [container, setContainer] = useState<HTMLElement>();
    const [callback, setCallback] = useState<(value: MediaTrackConstraints) => void>();

    const close = useCallback(() => {
        setIsOpen(false);
    }, []);
    const open = useCallback((callback: (value: MediaTrackConstraints) => void) => {
        setIsOpen(true);
        setCallback(() => callback);
    }, []);

    return (
        <SceneAddCameraSourceModalContext.Provider value={{
            setContainer, isOpen, openModal: open
        }}>
            {children}
            <Modal
                open={isOpen}
                title={('Add camera source')}
                onClose={close}
                container={container}
                removeContainerOnExit={!container}
            >
                <SceneAddCameraSourceModalContent onClose={close} callback={callback}/>
            </Modal>
        </SceneAddCameraSourceModalContext.Provider>
    );
}