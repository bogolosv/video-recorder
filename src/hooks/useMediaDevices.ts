import { useCallback, useEffect, useState } from "react";

export const useMediaDevices = () => {
    const [audioInputs, setAudioInputs] = useState<MediaDeviceInfo[]>([]);
    const [audioOutputs, setAudioOutputs] = useState<MediaDeviceInfo[]>([]);
    const [videoInputs, setVideoInputs] = useState<MediaDeviceInfo[]>([]);

    const enumerateDevices = useCallback(async () => {
        const devices = await navigator.mediaDevices.enumerateDevices();

        const audioInputs = devices.filter(device => device.kind === 'audioinput');
        const audioOutputs = devices.filter(device => device.kind === 'audiooutput');
        const videoInputs = devices.filter(device => device.kind === 'videoinput');
        setAudioInputs(audioInputs);
        setVideoInputs(videoInputs);
        setAudioOutputs(audioOutputs);
    }, []);
    const getStream = useCallback(async (constraints?: MediaStreamConstraints) => {
        try {
            return await navigator.mediaDevices.getUserMedia(constraints);
        } catch (error) {
            console.log('Access denied', error);
            return null;
        }
    }, []);

    useEffect(() => {
        const handleDeviceChange = async () => {
            await enumerateDevices();
        }
        navigator.mediaDevices.addEventListener('devicechange', handleDeviceChange);
        return () => {
            navigator.mediaDevices.removeEventListener('devicechange', handleDeviceChange);
        }
    }, [enumerateDevices]);

    useEffect(() => {
        enumerateDevices();
    }, [enumerateDevices]);

    return {
        videoInputs,
        audioInputs,
        audioOutputs,
        getStream,
    }
}