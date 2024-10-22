import { Meta, StoryObj } from "@storybook/react";
import { BaseVideo } from "./BaseVideo.tsx";
import video from './demo.mp4';

const meta = {
    title: "Components/BaseVideo",
    component: BaseVideo,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        src: video,
    },
    argTypes: {
        src: {
            control: { type: 'text' },
        }
    }
} satisfies Meta<typeof BaseVideo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultBaseVideoStory: Story = {
    name: "Default",
};
