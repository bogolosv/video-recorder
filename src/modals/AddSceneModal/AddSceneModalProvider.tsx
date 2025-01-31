import {FC, ReactNode, useCallback, useState} from 'react';
import {AddSceneModalContext} from './const';
import {Modal} from "../../components/Modal";
import {AddSceneModalContent} from "./AddSceneModalContent.tsx";

type AddSceneModalProviderPropsType = {
    children: ReactNode;
}

export const AddSceneModalProvider: FC<AddSceneModalProviderPropsType> = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [container, setContainer] = useState<HTMLElement>();
    const [callback, setCallback] = useState<(sceneId: string) => void>();

    const close = useCallback(() => {
        setIsOpen(false);
    }, []);
    const open = useCallback((callback: (sceneId: string) => void) => {
        setIsOpen(true);
        setCallback(() => callback);
    }, []);

    return (
        <AddSceneModalContext.Provider value={{
            setContainer, isOpen, openModal: open
        }}>
            {children}
            <Modal
                open={isOpen}
                title={('Add Scene')}
                onClose={close}
                container={container}
                removeContainerOnExit={!container}
            >
                <AddSceneModalContent callback={callback} onClose={close}/>
            </Modal>
        </AddSceneModalContext.Provider>
    );
}