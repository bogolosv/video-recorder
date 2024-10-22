import { Meta, StoryObj } from "@storybook/react";
import { Video } from "./Video.tsx";
import video from '../BaseVideo/demo.mp4';

const meta = {
    title: "Components/Video",
    component: Video,
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
} satisfies Meta<typeof Video>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultVideoStory: Story = {
    name: "Default",
};
