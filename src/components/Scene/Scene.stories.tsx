import { Meta, StoryObj } from "@storybook/react";
import { Scene } from "./Scene.tsx";

const meta = {
    title: "Components/Scene",
    component: Scene,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Scene>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultSceneStory: Story = {
    name: "Default",
    args: {},
};
