export type SceneAddCameraSourceModalStateType = {
    isOpen?: boolean;
    openModal: (callback: (value: MediaTrackConstraints) => void) => void;
    setContainer: (container: HTMLElement) => void;
}