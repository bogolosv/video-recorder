import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { FlexBox } from "../../components/FlexBox";
import { useMediaDevices } from "../../hooks/useMediaDevices.ts";
import { DropdownValueType } from "../../components/Dropdown/types.ts";
import { Camera } from "../../components/Camera";
import { Dropdown } from "../../components/Dropdown";
import { getPossibleQualities, VideoQuality } from "../../utils/getPossibleQualities.ts";
import { VIDEO_QUALITY } from "../../features/VideoRecorder/const.ts";
import { Button } from "../../components/Button";

type SceneAddCameraSourceModalContentPropsType = {
    callback?: (value: MediaTrackConstraints) => void;
    onClose?: () => void;
}

export const SceneAddCameraSourceModalContent: FC<SceneAddCameraSourceModalContentPropsType> = (
    { callback, onClose }
) => {
    const { videoInputs } = useMediaDevices();
    const [currentDeviceId, setCurrentDeviceId] = useState<string | undefined>();
    const [currentQualityId, setCurrentQualityId] = useState<VideoQuality>();
    const [qualities, setQualities] = useState<VideoQuality[]>([]);

    const videoInputsDropdownValues: DropdownValueType[] = useMemo(() => {
        return videoInputs.map(value => ({
            title: value.label,
            id: value.deviceId,
        }));
    }, [videoInputs]);

    const qualitiesDropdownValues = useMemo(() => {
        return qualities.map(quality => ({
            title: quality,
            id: quality,
        }));
    }, [qualities]);

    const onCameraStreamAvailable = useCallback((stream: MediaStream) => {
        const videoTrack = stream.getVideoTracks()[0];

        const capabilities = videoTrack.getCapabilities();

        if (capabilities.width?.max && capabilities.height?.max) {
            setQualities(getPossibleQualities(capabilities.width.max, capabilities.height.max));
        }
    }, []);

    const setCurrentQualityIdDropdown = useCallback((value: string) => {
        setCurrentQualityId(value as VideoQuality);
    }, []);
    const handleAddClick = useCallback(() => {
        callback && callback({
            deviceId: currentDeviceId,
            ...VIDEO_QUALITY[currentQualityId as VideoQuality]
        });
        onClose && onClose();
    }, [callback, currentDeviceId, currentQualityId, onClose]);

    useEffect(() => {
        setCurrentDeviceId(videoInputs[0]?.deviceId);
    }, [videoInputs]);

    useEffect(() => {
        setCurrentQualityIdDropdown('');
        setQualities([])
    }, [currentDeviceId]);

    return (
        <FlexBox column gap='small' style={{ width: '300px' }}>
            <Dropdown values={videoInputsDropdownValues} currentId={currentDeviceId} setCurrentId={setCurrentDeviceId}/>
            <Dropdown
                values={qualitiesDropdownValues}
                currentId={currentQualityId}
                setCurrentId={setCurrentQualityIdDropdown}
                disabled={qualitiesDropdownValues.length === 0}
            />
            <Camera
                deviceId={currentDeviceId}
                {...VIDEO_QUALITY[currentQualityId as VideoQuality]}
                onStreamAvailable={onCameraStreamAvailable}
            />
            <FlexBox justify='center'>
                <Button onClick={onClose}>Cancel</Button>
                <Button primary onClick={handleAddClick}>Add</Button>
            </FlexBox>
        </FlexBox>
    )
}