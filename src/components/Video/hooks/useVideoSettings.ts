import { useEffect, useMemo, useState } from "react";

export const useVideoSettings = (video: HTMLVideoElement | null) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(1);
    const [currentTime, setCurrentTime] = useState(0);
    const duration = useMemo(() => video && video.duration ? video.duration * 1000 : 0, [video?.duration]);
    const [error, setError] = useState<string | null>(null);

    const play = async () => {
        if (!video) return;
        await video.play();
    };
    const pause = () => {
        if (!video) return;
        video.pause();
    };
    const changeVolume = (volume: number) => {
        if (!video) return;
        video.volume = volume > 1 ? 1 : volume < 0 ? 0 : volume;
    };
    const changeCurrentTime = (currentTime: number) => {
        if (!video) return;
        video.currentTime = currentTime / 1000;
    };

    const togglePIP = async () => {
        if (!video) return;
        if (document.pictureInPictureElement) {
            await document.exitPictureInPicture();
        } else if (document.pictureInPictureEnabled) {
            await video.requestPictureInPicture();
        }
    }

    useEffect(() => {
        if (!video) return;
        const handleVideoPlay = () => {
            setIsPlaying(true);
        };
        const handleVideoPause = () => {
            setIsPlaying(false);
        };
        function handleVideoError (this: HTMLVideoElement) {
            setError('Something went wrong!');
            setIsPlaying(false);
        }
        function handleLoadedData (this: HTMLVideoElement) {
            setError(null);
        }
        video.addEventListener('play', handleVideoPlay);
        video.addEventListener('pause', handleVideoPause);
        video.addEventListener('error', handleVideoError);
        video.addEventListener('loadeddata', handleLoadedData);
        return () => {
            if (!video) return;
            video.removeEventListener('play', handleVideoPlay);
            video.removeEventListener('pause', handleVideoPause);
            video.removeEventListener('error', handleVideoError);
            video.removeEventListener('loadeddata', handleLoadedData);
        };
    }, [video]);

    useEffect(() => {
        if (!video) return;
        const handleChangeVolume = (event: Event) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            setVolume(event.target.volume);
        };
        video.addEventListener('volumechange', handleChangeVolume);
        return () => {
            if (!video) return;
            video.removeEventListener('play', handleChangeVolume);
        };
    }, [video]);

    useEffect(() => {
        if (!video) return;
        const handleProgress = (event: Event) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            setCurrentTime(event.target.currentTime * 1000);
        };
        video.addEventListener('timeupdate', handleProgress);
        return () => {
            if (!video) return;
            video.removeEventListener('timeupdate', handleProgress);
        };
    }, [video]);

    return { isPlaying, play, pause, changeVolume, volume, togglePIP, currentTime, duration, changeCurrentTime, error };
}