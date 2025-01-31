import {useContext, useEffect} from 'react';
import {AddSceneModalContext} from '../const';

export function useAddSceneModal(container?: HTMLElement | null) {
    const context = useContext(AddSceneModalContext);

    if (!context) {
        throw new Error('useAddSceneModal must be used within a AddSceneProvider');
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