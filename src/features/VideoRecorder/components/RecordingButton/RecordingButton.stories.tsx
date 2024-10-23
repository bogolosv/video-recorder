import { Meta, StoryObj } from "@storybook/react";
import { RecordingButton } from "./RecordingButton.tsx";

const meta = {
    title: "Features/Video Recorder/RecordingButton",
    component: RecordingButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof RecordingButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultRecordingButtonStory: Story = {
    name: "Default",
    args: {},
};
