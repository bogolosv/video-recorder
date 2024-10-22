import { DependencyList, useCallback, useEffect, useRef, useState } from "react";

export const useVideoContainerSettings = (container: HTMLDivElement | null, deps: DependencyList = []) => {
    const [isVideoControl, setIsVideoControl] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const timeoutRef = useRef(0);
    const timeout = useRef(5000);

    const changeFullScreen = useCallback(async () => {
        if (!container) return;
        if (isFullScreen) {
            await document.exitFullscreen();
        }
        else {
            await container.requestFullscreen();
        }
    }, [isFullScreen, container]);

    const showControl = useCallback(() => {
        setIsVideoControl(true);
        clearTimeout(timeoutRef.current);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        timeoutRef.current = setTimeout(() => {
            setIsVideoControl(false);
        }, timeout.current);
    }, []);

    useEffect(showControl, [...deps, showControl]);

    useEffect(() => {
        if (!container) return;
        const handleMousemove = () => {
            showControl();
        };
        container.addEventListener('mousemove', handleMousemove);
        return () => {
            if (!container) return;
            container.removeEventListener('mousemove', handleMousemove);
        };
    }, [container]);

    useEffect(() => {
        if (!container) return;
        const handleDoubleClick = async () => {
            await changeFullScreen();
        };
        container.addEventListener('dblclick', handleDoubleClick);
        return () => {
            if (!container) return;
            container.removeEventListener('dblclick', handleDoubleClick);
        };
    }, [container, changeFullScreen]);

    useEffect(() => {
        if (!container) return;
        const handleFullScreenChange = async () => {
            setIsFullScreen(!!document.fullscreenElement);
        };
        container.addEventListener('fullscreenchange', handleFullScreenChange);
        return () => {
            if (!container) return;
            container.removeEventListener('fullscreenchange', handleFullScreenChange);
        };
    }, [container]);

    useEffect(() => {
        if (!container) return;
        if (!isVideoControl) {
            container.style.cursor = 'none'
        }
        else {
            container.style.cursor = 'default'
        }
    }, [isVideoControl, container]);

    return { isVideoControl, isFullScreen, changeFullScreen };
}