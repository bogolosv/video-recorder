export enum VideoQuality {
    SD = 'SD',
    HD = 'HD',
    FullHD = 'Full HD',
    FullHDUltra = 'Full HD Ultra',
    TwoK = '2K',
    FourK = '4K',
    EightK = '8K',
}

export function getPossibleQualities(maxWidth: number, maxHeight: number): VideoQuality[] {
    const qualities: VideoQuality[] = [];

    if (maxWidth >= 640 && maxHeight >= 480) {
        qualities.push(VideoQuality.SD); // SD (640x480)
    }
    if (maxWidth >= 1280 && maxHeight >= 720) {
        qualities.push(VideoQuality.HD); // HD (1280x720)
    }
    if (maxWidth >= 1920 && maxHeight >= 1080) {
        qualities.push(VideoQuality.FullHD); // Full HD (1920x1080)
    }
    if (maxWidth >= 1920 && maxHeight >= 1440) {
        qualities.push(VideoQuality.FullHDUltra); // 1080p Ultra (1920x1440)
    }
    if (maxWidth >= 2560 && maxHeight >= 1440) {
        qualities.push(VideoQuality.TwoK); // 2K (2560x1440)
    }
    if (maxWidth >= 3840 && maxHeight >= 2160) {
        qualities.push(VideoQuality.FourK); // 4K (3840x2160)
    }
    if (maxWidth >= 7680 && maxHeight >= 4320) {
        qualities.push(VideoQuality.EightK); // 8K (7680x4320)
    }

    return qualities;
}
