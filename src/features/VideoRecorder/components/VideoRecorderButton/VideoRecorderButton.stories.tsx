import { Meta, StoryObj } from "@storybook/react";
import { VideoRecorderButton } from "./VideoRecorderButton.tsx";
import { PlayIcon } from "../../../../icons/PlayIcon.tsx";
import { PauseIcon } from "../../../../icons/PauseIcon.tsx";
import { FC } from "react";
import { CheckMark } from "../../../../icons/CheckMark.tsx";

const icons: Record<string, FC> = {
    Play: PlayIcon,
    Pause: PauseIcon,
    CheckMark: CheckMark,
};

const meta = {
    title: "Features/Video Recorder/VideoRecorderButton",
    component: VideoRecorderButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        Icon: PlayIcon,
    },
    argTypes: {
        Icon: {
            control: {
                type: 'select',
            },
            options: Object.keys(icons),
            mapping: icons,
        },
    },
} satisfies Meta<typeof VideoRecorderButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultVideoRecorderButtonStory: Story = {
    name: "Default",
    args: {},
};
