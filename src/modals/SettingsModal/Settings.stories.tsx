import type { Meta, StoryObj } from '@storybook/react';
import { useSettingsModal } from './hooks/useSettingsModal.ts';
import { FC, useEffect } from "react";
import { Button } from "../../components/Button";
import { SettingsModalProvider } from "./SettingsModalProvider.tsx";

const DemoWithoutContainer: FC = () => {
  const { openModal } = useSettingsModal();
  useEffect(openModal, []);

  return (
      <Button primary onClick={openModal}>Open Settings</Button>
  );
};

const meta = {
  component: DemoWithoutContainer,
  decorators: [(Story) => {
    return (
        <SettingsModalProvider><Story/></SettingsModalProvider>
    )
  }],
  title: "Modals/Settings",
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DemoWithoutContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};