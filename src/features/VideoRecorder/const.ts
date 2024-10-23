import { VideoQuality } from "../../utils/getPossibleQualities.ts";

export const VIDEO_QUALITY = {
    [VideoQuality.SD]: {
        width: 640,
        height: 480,
    },
    [VideoQuality.HD]: {
        width: 1280,
        height: 720,
    },
    [VideoQuality.FullHD]: {
        width: 1920,
        height: 1080,
    },
    [VideoQuality.FullHDUltra]: {
        width: 1920,
        height: 1440,
    },
    [VideoQuality.TwoK]: {
        width: 2560,
        height: 1440,
    },
    [VideoQuality.FourK]: {
        width: 3840,
        height: 2160,
    },
    [VideoQuality.EightK]: {
        width: 7680,
        height: 4320,
    },
}