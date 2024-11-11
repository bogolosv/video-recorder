import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { SettingsState } from './types';
import { VideoQuality } from "../../utils/getPossibleQualities.ts";

const useSettingsStore = create<SettingsState>()(
    persist(
        (set) => ({
            quality: VideoQuality.FullHD,
            setQuality: (quality) => set({ quality }),
        }),
        {
            name: 'settings-storage',
        }
    )
);

export default useSettingsStore;
