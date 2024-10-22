import { FC, useCallback, useEffect, useRef, useState } from 'react';
import classes from './styles/index.module.scss';
import { Button, ButtonPropsType } from "../Button/Button.tsx";
import { FlexBox } from "../FlexBox";
import { VolumeLoudIcon } from "../../icons/VolumeLoudIcon.tsx";
import { VolumeMuteIcon } from "../../icons/VolumeMuteIcon.tsx";
import { VolumeSmallIcon } from "../../icons/VolumeSmallIcon.tsx";

type VolumeChangeButtonPropsType = Omit<ButtonPropsType, 'onVolumeChange'> & {
    volume: number;
    onVolumeChange: (volume: number) => void;
}

export const VolumeChangeButton: FC<VolumeChangeButtonPropsType> = (
    { volume, onVolumeChange }
) => {
    const [isPopupShown, setIsPopupShown] = useState(false);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleFlexBoxMouseOver = useCallback(() => {
        setIsPopupShown(true);
    }, []);
    const handleFlexBoxMouseOut = useCallback(() => {
        setIsPopupShown(false);
    }, []);
    const handleVolumeChange = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
        if(!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const y = rect.height - (event.clientY - rect.top);
        onVolumeChange(y / rect.height);
    }, [onVolumeChange, containerRef.current]);

    const handleMouseDown = useCallback(() => {
        setIsMouseDown(true);
    }, []);

    const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
        if(isMouseDown) {
            handleVolumeChange(event);
        }
    }, [isMouseDown, handleVolumeChange]);

    const handleMouseUp = useCallback(() => {
        setIsMouseDown(false);
    }, []);
    useEffect(() => {
        const handleKeydown = (event: KeyboardEvent) => {
            const difference = 0.1
            switch (event.code) {
                case 'ArrowUp': {
                    event.preventDefault();
                    onVolumeChange(volume + difference > 1 ? 1 : volume + difference);
                    break;
                }
                case 'ArrowDown': {
                    event.preventDefault();
                    onVolumeChange(volume - difference < 0 ? 0 : volume - difference);
                    break;
                }
            }
            document.removeEventListener('keydown', handleKeydown);
        }
        document.addEventListener('keydown', handleKeydown);
        return () => {
            document.removeEventListener('keydown', handleKeydown);
        }
    }, [volume, onVolumeChange]);

    const changeMuteStatus = useCallback(() => {
        onVolumeChange(volume === 0 ? 0.8 : 0)
    }, [onVolumeChange, volume]);

    return (
        <FlexBox
            className={classes.volumeButtonContainer}
            onMouseOver={handleFlexBoxMouseOver}
            onMouseOut={handleFlexBoxMouseOut}
        >
            <Button link Icon={volume === 0 ? VolumeMuteIcon : volume < 0.5 ? VolumeSmallIcon : VolumeLoudIcon} onClick={changeMuteStatus}/>
            {isPopupShown && (
                <FlexBox className={classes.popup}>
                    <div
                        className={classes.control}
                        onClick={handleVolumeChange}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        ref={containerRef}
                    >
                        <div className={classes.controlLine} style={{ height: volume * 100 }}/>
                    </div>
                </FlexBox>
            )}
        </FlexBox>
    );
}