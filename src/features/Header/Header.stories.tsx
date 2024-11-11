import { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header.tsx";

const meta = {
    title: "Components/Header",
    component: Header,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultHeaderStory: Story = {
    name: "Default",
    args: {},
};
