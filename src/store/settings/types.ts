import { VideoQuality } from "../../utils/getPossibleQualities.ts";

export interface SettingsState {
    quality: VideoQuality;
    setQuality: (quality: VideoQuality) => void;
}
