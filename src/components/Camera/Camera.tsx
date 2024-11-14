import { FC, useEffect, useRef } from 'react';
import { BaseVideo } from "../BaseVideo";
import { BaseVideoRef } from "../BaseVideo/BaseVideo.tsx";
import { useMediaDevices } from "../../hooks/useMediaDevices.ts";

type CameraPropsType = MediaTrackConstraints & {
    onStreamAvailable?: (stream: MediaStream) => void
};

export const Camera: FC<CameraPropsType> = (
    {
        onStreamAvailable,
        deviceId,
        width,
        height,
    },
) => {
    const baseVideoRef = useRef<BaseVideoRef>(null);
    const { getStream } = useMediaDevices();

    useEffect(() => {
        getStream({ video: { deviceId, width, height } }).then(stream => {
            if (!baseVideoRef.current) return;
            onStreamAvailable && onStreamAvailable(stream!);
            baseVideoRef.current.video.srcObject = stream;
        });
    }, [deviceId, width, height]);

    return (
        <BaseVideo ref={baseVideoRef} autoPlay/>
    );
};