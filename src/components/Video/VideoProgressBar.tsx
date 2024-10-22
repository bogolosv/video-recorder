import classes from './styles/index.module.scss';
import { FC, useCallback, useEffect, useRef, useState } from "react";

type VideoProgressBarPropsType = {
    currentTime: number;
    duration: number;
    onChange: (currentTime: number) => void;
}

export const VideoProgressBar: FC<VideoProgressBarPropsType> = (
    { duration, currentTime, onChange }
) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMouseDown, setIsMouseDown] = useState(false);

    const handleChangeTime = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
        if(!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left;
        onChange(duration * (x / rect.width));
    }, [onChange, duration]);

    const handleMouseDown = useCallback(() => {
        setIsMouseDown(true);
    }, []);

    const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
        if(isMouseDown) {
            handleChangeTime(event);
        }
    }, [isMouseDown, handleChangeTime]);

    const handleMouseUp = useCallback(() => {
        setIsMouseDown(false);
    }, []);

    useEffect(() => {
        const handleKeydown = (event: KeyboardEvent) => {
            const time = 10_000
            switch (event.code) {
                case 'ArrowRight': {
                    onChange(currentTime + time > duration ? duration : currentTime + time);
                    break;
                }
                case 'ArrowLeft': {
                    onChange(currentTime - time < 0 ? 0 : currentTime - time);
                    break;
                }
            }
            document.removeEventListener('keydown', handleKeydown);
        }
        document.addEventListener('keydown', handleKeydown);
        return () => {
            document.removeEventListener('keydown', handleKeydown);
        }
    }, [currentTime, duration, onChange]);

    return (
        <div
            ref={containerRef}
            className={classes.progressBarContainer}
            onClick={handleChangeTime}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
        >
            <div className={classes.progressLine} style={{ width: `${currentTime/duration*100}%` }}/>
        </div>
    );
};