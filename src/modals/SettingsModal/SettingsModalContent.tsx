import { FC, useCallback } from "react";
import useSettingsStore from "../../store/settings/useSettingsStore.ts";
import { VideoQuality } from "../../utils/getPossibleQualities.ts";
import { FlexBox } from "../../components/FlexBox";
import { Dropdown } from "../../components/Dropdown";
import { PaddingBox } from "../../components/PaddingBox";
import { VIDEO_QUALITY_DROPDOWN_ITEMS } from "./const.ts";

export const SettingsModalContent: FC = () => {
    const { quality, setQuality } = useSettingsStore();
    const setVideoQualityId = useCallback((quality: string) => {
        setQuality(quality as VideoQuality)
    }, [setQuality]);

    return (
        <PaddingBox medium>
            <FlexBox column gap='small'>
                <Dropdown title={'Video quality'} values={VIDEO_QUALITY_DROPDOWN_ITEMS} currentId={quality} setCurrentId={setVideoQualityId}/>
            </FlexBox>
        </PaddingBox>
    )
}