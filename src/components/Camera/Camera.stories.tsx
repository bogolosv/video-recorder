import { Meta, StoryObj } from "@storybook/react";
import { Camera } from "./Camera.tsx";
import { MediaDevicesProvider } from "../../providers/MediaDevices/MediaDevicesProvider.tsx";

const meta = {
    title: "Components/Camera",
    component: Camera,
    decorators: [(Story) => {
        return (
            <MediaDevicesProvider>
                <Story/>
            </MediaDevicesProvider>
        )
    }],
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Camera>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultCameraStory: Story = {
    name: "Default",
    args: {},
};
