import { Meta, StoryObj } from "@storybook/react";
import { Layout } from "./Layout.tsx";

const meta = {
    title: "Components/Layout",
    component: Layout,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Layout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultLayoutStory: Story = {
    name: "Default",
    args: {},
};
