export type SettingsModalStateType = {
    isOpen?: boolean;
    openModal: () => void;
    setContainer: (container: HTMLElement) => void;
}