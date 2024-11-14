import type { Meta, StoryObj } from '@storybook/react';
import { useSceneAddCameraSourceModal } from './hooks/useSceneAddCameraSourceModal.ts';
import { FC, useCallback, useEffect } from "react";
import { Button } from "../../components/Button";
import { SceneAddCameraSourceModalProvider } from "./SceneAddCameraSourceModalProvider.tsx";
import { MediaDevicesProvider } from "../../providers/MediaDevices/MediaDevicesProvider.tsx";

const DemoWithoutContainer: FC = () => {
    const {openModal} = useSceneAddCameraSourceModal();
    useEffect(() => {
        openModal(console.log);
    }, []);

    const handleOpenModalClick = useCallback(() => {
        openModal(console.log);
    }, [openModal]);

    return (
        <Button primary onClick={handleOpenModalClick}>Open SceneAddCameraSource</Button>
    );
};

const meta = {
    component: DemoWithoutContainer,
    decorators: [(Story) => {
        return (
            <MediaDevicesProvider>
                <SceneAddCameraSourceModalProvider>
                    <Story/>
                </SceneAddCameraSourceModalProvider>
            </MediaDevicesProvider>
        )
    }],
    title: "Modals/SceneAddCameraSource",
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof DemoWithoutContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};