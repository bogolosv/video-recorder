import { useContext, useEffect } from 'react';
import { SceneAddCameraSourceModalContext } from '../const';

export function useSceneAddCameraSourceModal(container?: HTMLElement | null) {
    const context = useContext(SceneAddCameraSourceModalContext);

    if (!context) {
        throw new Error('useSceneAddCameraSourceModal must be used within a SceneAddCameraSourceProvider');
    }

    const {setContainer, ...rest} = context;

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