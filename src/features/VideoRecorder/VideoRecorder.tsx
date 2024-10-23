import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import classes from './styles/index.module.scss';
import { RecordingButton } from "./components/RecordingButton";
import { VideoRecorderButton } from "./components/VideoRecorderButton";
import { PauseIcon } from "../../icons/PauseIcon.tsx";
import { PlayIcon } from "../../icons/PlayIcon.tsx";
import { MicrophoneMutedIcon } from "../../icons/MicrophoneMutedIcon.tsx";
import { MicrophoneIcon } from "../../icons/MicrophoneIcon.tsx";
import { PhotoIcon } from "../../icons/PhotoIcon.tsx";
import { ToolsIcon } from "../../icons/ToolsIcon.tsx";
import { getPossibleQualities, VideoQuality } from "../../utils/getPossibleQualities.ts";
import { VIDEO_QUALITY } from "./const.ts";
import { takePhotoFromVideo } from "../../utils/takePhotoFromVideo.ts";
import { dataURLtoBlob } from "../../utils/dataUrlToBlob.ts";
import { useMediaDevicesContext } from "../../providers/MediaDevices/hooks/useMediaDevicesContext.ts";
import { useMessageContext } from "../../providers/Message/hooks/useMessageContext.ts";
import { BaseVideo, BaseVideoRef } from "../../components/BaseVideo/BaseVideo.tsx";
import { useVideoContainerSettings } from "../../components/BaseVideo/hooks/useVideoContainerSettings.ts";
import { FlexBox } from "../../components/FlexBox";
import { Span } from "../../components/Topography/Span";
import { Popover } from "../../components/Popover";
import { Button } from "../../components/Button";

type VideoRecorderPropsType = {}

export type VideoRecorderRef = BaseVideoRef;

export const VideoRecorder = forwardRef<VideoRecorderRef, VideoRecorderPropsType>((
    _props, ref
) => {
    const messageRef = useRef<HTMLDivElement>(null);
    const { openMessage } = useMessageContext(messageRef.current);
    const [isPaused, setIsPaused] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [qualities, setQualities] = useState<VideoQuality[]>([]);
    const [currentQuality, setCurrentQuality] = useState(VideoQuality.FullHD)
    const baseVideoRef = useRef<BaseVideoRef>(null);
    const {
        videoInputs,
        // audioInputs,
        // audioOutputs
    } = useMediaDevicesContext();
    const [videoInput, setVideoInput] = useState<MediaDeviceInfo>();

    useImperativeHandle(ref, () => baseVideoRef.current!, [baseVideoRef.current]);

    useVideoContainerSettings(baseVideoRef.current?.container ?? null);
    const handlePlayPauseClick = useCallback(() => {
        setIsPaused(prevState => !prevState);
    }, []);
    const handleMuteUnmuteClick = useCallback(() => {
        setIsMuted(prevState => !prevState);
    }, []);
    const handleUtilsClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    }, []);

    useEffect(() => {
        if (!baseVideoRef.current) return;
        const videoSettings: MediaTrackConstraints = {
            deviceId: videoInput?.deviceId ?? 'default',
            ...VIDEO_QUALITY[currentQuality],
        };

        const getStream = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: videoSettings,
                });
                if (baseVideoRef.current) {
                    baseVideoRef.current.video.srcObject = stream;
                }

                const videoTrack = stream.getVideoTracks()[0];

                const capabilities = videoTrack.getCapabilities();
                if (capabilities.width?.max && capabilities.height?.max) {
                    setQualities(getPossibleQualities(capabilities.width.max, capabilities.height.max));
                }
            } catch (error) {
                console.log('Access denied', error);
            }
        };

        getStream();
    }, [baseVideoRef.current, videoInput, currentQuality]);

    const takePhoto = useCallback(async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (!baseVideoRef.current) return;
        const image = takePhotoFromVideo(baseVideoRef.current.video)
        const blob = dataURLtoBlob(image);
        if (navigator.clipboard && navigator.clipboard.write) {
            const item = new ClipboardItem({ "image/png": blob });
            await navigator.clipboard.write([item]);

            openMessage((
                <FlexBox column align='middle' gap='small'>
                    <Span>Copied!</Span>
                    <img src={image} alt="" style={{ width: '200px' }}/>
                </FlexBox>
            ), event);
        }
    }, []);

    return (
        <BaseVideo ref={baseVideoRef} className={classes.recorderContainer} autoPlay style={{
            transform: 'scaleX(-1)',
        }}>
            <FlexBox
                justify='space-between'
                align='middle'
                gap='small'
                className={classes.headerContainer}
                onClick={handleUtilsClick}
            >
                <Popover
                    content={
                        <FlexBox column>
                            {qualities.map(quality => {
                                const handleQualityClick = () => {
                                    setCurrentQuality(quality);
                                }
                                return (
                                    <Button key={quality} size='small' primary={quality === currentQuality} onClick={handleQualityClick}>
                                        {quality}
                                    </Button>
                                )
                            })}
                        </FlexBox>
                    }
                >
                    <VideoRecorderButton>
                        {currentQuality}
                    </VideoRecorderButton>
                </Popover>
            </FlexBox>
            <FlexBox
                justify='space-between'
                align='middle'
                gap='small'
                className={classes.recordingUtilsContainer}
                onClick={handleUtilsClick}
            >
                <VideoRecorderButton Icon={PhotoIcon} onClick={takePhoto}/>
                <FlexBox
                    justify='space-between'
                    align='middle'
                    gap='small'
                >
                    <VideoRecorderButton Icon={isPaused ? PlayIcon : PauseIcon} onClick={handlePlayPauseClick}/>
                    <RecordingButton/>
                    <VideoRecorderButton Icon={isMuted ? MicrophoneMutedIcon : MicrophoneIcon} onClick={handleMuteUnmuteClick}/>
                </FlexBox>
                <Popover content={(
                    <FlexBox column>
                        <Popover content={(
                            <FlexBox column>
                                {videoInputs.map(videoInput => {
                                    const handleButtonClick = () => {
                                        setVideoInput(videoInput);
                                    };
                                    return (
                                        <Button key={videoInput.deviceId} onClick={handleButtonClick}>{videoInput.label}</Button>
                                    )
                                })}
                            </FlexBox>
                        )}>
                            <Button>Video</Button>
                        </Popover>
                    </FlexBox>
                )}>
                    <VideoRecorderButton Icon={ToolsIcon}/>
                </Popover>
            </FlexBox>
            <div ref={messageRef}/>
        </BaseVideo>
    );
})