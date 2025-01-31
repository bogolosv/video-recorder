export type AddSceneModalStateType = {
    isOpen?: boolean;
    openModal: (callback: (sceneId: string) => void) => void;
    setContainer: (container: HTMLElement) => void;
}