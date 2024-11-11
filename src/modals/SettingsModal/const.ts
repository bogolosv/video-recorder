import { createContext } from 'react';
import { SettingsModalStateType } from './types';
import { DropdownValueType } from "../../components/Dropdown/types.ts";
import { VideoQuality } from "../../utils/getPossibleQualities.ts";

export const SettingsModalContext = createContext(undefined as unknown as SettingsModalStateType);

export const VIDEO_QUALITY_DROPDOWN_ITEMS: DropdownValueType[] = [
    { id: VideoQuality.SD, title: VideoQuality.SD },
    { id: VideoQuality.HD, title: VideoQuality.HD },
    { id: VideoQuality.FullHD, title: VideoQuality.FullHD },
    { id: VideoQuality.FullHDUltra, title: VideoQuality.FullHDUltra },
    { id: VideoQuality.TwoK, title: VideoQuality.TwoK },
    { id: VideoQuality.FourK, title: VideoQuality.FourK },
    { id: VideoQuality.EightK, title: VideoQuality.EightK },
]