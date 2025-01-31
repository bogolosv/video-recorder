import type {Meta, StoryObj} from '@storybook/react';
import {useAddSceneModal} from './hooks/useAddSceneModal.ts';
import {FC, useEffect} from "react";
import {Button} from "../../components/Button";
import {AddSceneModalProvider} from "./AddSceneModalProvider.tsx";

const DemoWithoutContainer: FC = () => {
    const {openModal} = useAddSceneModal();
    useEffect(openModal, []);

    return (
        <Button primary onClick={openModal}>Open AddScene</Button>
    );
};

const meta = {
    component: DemoWithoutContainer,
    decorators: [(Story) => {
        return (
            <AddSceneModalProvider><Story/></AddSceneModalProvider>
        )
    }],
    title: "Modals/AddScene",
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof DemoWithoutContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};