import { Meta, StoryObj } from "@storybook/react";
import { Popover } from "./Popover.tsx";
import { Button } from "../Button";

const meta = {
    title: "Components/Popover",
    component: Popover,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        children: {
            control: false,
        },
        content: {
            control: 'text'
        }
    }
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultPopoverStory: Story = {
    name: "Default",
    args: {
        content: 'Hello',
        children: <Button>Hello</Button>
    },
};
