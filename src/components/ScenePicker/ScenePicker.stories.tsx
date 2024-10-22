import { Meta, StoryObj } from "@storybook/react";
import { ScenePicker } from "./ScenePicker.tsx";

const meta = {
    title: "Components/ScenePicker",
    component: ScenePicker,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ScenePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultScenePickerStory: Story = {
    name: "Default",
    args: {},
};
