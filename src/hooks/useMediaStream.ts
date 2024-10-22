import { useCallback, useEffect, useState } from "react";

export const useMediaStream = () => {
    const [stream, setStream] = useState<MediaStream>();

    const aaaa = useCallback((videoConstraints: MediaTrackConstraints) => {
        if (!stream) return;

    }, [stream]);

    useEffect(() => {
        const videoConstraints: MediaTrackConstraints = {
            deviceId: 'default',
        };

        const getStream = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: videoConstraints });
                setStream(stream);
            } catch (error) {
                console.log('Access denied', error);
            }
        };

        getStream();
    }, []);


    return {
        stream,
    }
}