import { Meta, StoryObj } from "@storybook/react";
import { Settings } from "./Settings.tsx";

const meta = {
    title: "Components/Settings",
    component: Settings,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Settings>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultSettingsStory: Story = {
    name: "Default",
    args: {},
};
