import { Meta, StoryObj } from "@storybook/react";
import { VideoRecorder } from "./VideoRecorder.tsx";
import { MediaDevicesProvider } from "../../providers/MediaDevices/MediaDevicesProvider.tsx";

const meta = {
    title: "Components/Video Recorder",
    component: VideoRecorder,
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
} satisfies Meta<typeof VideoRecorder>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultRecordButtonStory: Story = {
    name: "Default",
    args: {},
};
