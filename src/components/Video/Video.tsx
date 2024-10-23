import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef } from 'react';
import classes from './styles/index.module.scss';
import { PlayIcon } from "../../icons/PlayIcon.tsx";
import { Button } from "../Button";
import { useVideoSettings } from "./hooks/useVideoSettings.ts";
import { FlexBox } from "../FlexBox";
import { FullScreenIcon } from "../../icons/FullScreenIcon.tsx";
import { FullScreenQuitIcon } from "../../icons/FullScreenQuitIcon.tsx";
import classNames from "classnames";
import { PauseIcon } from "../../icons/PauseIcon.tsx";
import { PIPIcon } from "../../icons/PIPIcon.tsx";
import { DownloadIcon } from "../../icons/DownloadIcon.tsx";
import { Span } from "../Topography/Span";
import moment from "moment";
import { VideoProgressBar } from "./VideoProgressBar.tsx";
import { BaseVideo } from "../BaseVideo";
import { BaseVideoPropsType, BaseVideoRef } from "../BaseVideo/BaseVideo.tsx";
import { useVideoContainerSettings } from "../BaseVideo/hooks/useVideoContainerSettings.ts";
import { VolumeChangeButton } from "./VolumeChangeButton.tsx";
import { WarningIcon } from "../../icons/WarningIcon.tsx";

type VideoPropsType = BaseVideoPropsType & {
    onDownload?: () => void;
    src: string;
}

export const Video = forwardRef<BaseVideoRef, VideoPropsType>(
({
    onClick,
    onDownload,
    children,
    ...props
}, ref
) => {
    const baseVideoRef = useRef<BaseVideoRef>(null);
    const {
        isPlaying,
        play,
        pause,
        togglePIP,
        duration,
        currentTime,
        changeCurrentTime,
        volume,
        changeVolume,
        error,
    } = useVideoSettings(baseVideoRef.current?.video ?? null);
    const {
        isVideoControl,
        changeFullScreen,
        isFullScreen
    } = useVideoContainerSettings(baseVideoRef.current?.container ?? null, [volume, isPlaying]);

    const footerClasses = classNames(classes.footer, {
        [classes.footerHidden]: !isVideoControl,
    });

    useImperativeHandle(ref, () => baseVideoRef.current!, [baseVideoRef.current]);

    const handlePlayClick = useCallback(async () => {
        if (isPlaying) {
            pause();
        } else {
            await play();
        }
    }, [isPlaying, pause, play]);

    const handleVideoClick = useCallback((event: React.MouseEvent<HTMLVideoElement>) => {
        if(onClick) onClick(event);
        handlePlayClick();
    }, [onClick, handlePlayClick]);

    const handleFullScreenButtonClick = useCallback(async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        await changeFullScreen();
    }, [changeFullScreen]);

    const handleFooterClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    }, []);

    const handleVideoDownload = useCallback(() => {
        if(onDownload) onDownload()
    }, [onDownload]);

    useEffect(() => {
        const handleDocumentKeydown = async (event: KeyboardEvent) => {
            if (event.code === 'Space') {
                event.preventDefault();
                await handlePlayClick();
            }
        }
        document.addEventListener('keydown', handleDocumentKeydown);
        return () => {
            document.removeEventListener('keydown', handleDocumentKeydown);
        }
    }, [handlePlayClick]);

    return (
        <BaseVideo ref={baseVideoRef} onClick={handleVideoClick} {...props}>
            {error ? (
                <FlexBox column justify='center' align='middle' className={classes.error} gap='medium'>
                    <WarningIcon/>
                    <Span size='medium'>{error}</Span>
                </FlexBox>
            ) : (
                <>
                    {!isPlaying && <Button link className={classes.bigPlay} Icon={PlayIcon} onClick={handlePlayClick}/>}
                    <FlexBox
                        justify='space-between'
                        align='middle'
                        gap='small'
                        className={footerClasses}
                        onClick={handleFooterClick}
                    >
                        <FlexBox align='middle' gap='small'>
                            {isPlaying ? (
                                <Button
                                    link
                                    onClick={pause}
                                    Icon={PauseIcon}
                                />
                            ): (
                                <Button
                                    link
                                    onClick={play}
                                    Icon={(props) => (
                                        <PlayIcon width='24px' height='24px' {...props}/>
                                    )}
                                />
                            )}
                            <Span size='small'>
                                {moment(currentTime).format("mm:ss")} / {moment(duration).format("mm:ss")}
                            </Span>
                        </FlexBox>
                        <VideoProgressBar currentTime={currentTime} duration={duration} onChange={changeCurrentTime}/>
                        <FlexBox gap='small' align='middle'>
                            {onDownload && (
                                <Button
                                    link
                                    Icon={DownloadIcon}
                                    onClick={handleVideoDownload}
                                />
                            )}
                            <VolumeChangeButton volume={volume} onVolumeChange={changeVolume}/>
                            <Button
                                link
                                onClick={togglePIP}
                                Icon={PIPIcon}
                            />
                            <Button
                                link
                                onClick={handleFullScreenButtonClick}
                                Icon={isFullScreen ? FullScreenQuitIcon : FullScreenIcon}
                            />
                        </FlexBox>
                    </FlexBox>
                    {children}
                </>
            )}
        </BaseVideo>
    );
});
