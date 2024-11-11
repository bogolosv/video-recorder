import type { Meta, StoryObj } from '@storybook/react';
import { FC, useEffect, useRef } from "react";
import { Button } from "../../components/Button";
import video from "../../components/BaseVideo/demo.mp4";
import { Video } from "../../components/Video";
import { useSettingsModal } from "../../modals/SettingsModal/hooks/useSettingsModal.ts";
import { SettingsModalProvider } from "../../modals/SettingsModal/SettingsModalProvider.tsx";
import { Span } from "../../components/Topography/Span";
import { FlexBox } from "../../components/FlexBox";

type DemoProps = {
  isContainer?: boolean;
};

const Demo: FC<DemoProps> = ({ isContainer}) => {
  return (
      <>
        {isContainer ? (
            <DemoInContainer/>
        ) : (
            <DemoWithoutContainer/>
        )}
      </>
  );
};

const DemoInContainer: FC = () => {
  const messageRef = useRef<HTMLDivElement>(null);
  const { openModal, setContainer } = useSettingsModal(messageRef.current);

  useEffect(() => {
    if (messageRef.current) setContainer(messageRef.current);
  }, [messageRef.current]);

  return (
      <>
        <FlexBox column gap='small'>
          <Span size='medium' weight='semiBold'>It is important to show the modal in container, when you in full screen mode.</Span>
          <Video src={video}>
            <Button primary onClick={openModal} style={{ position: 'absolute' }}>
              Open Modal
            </Button>
            <div ref={messageRef}/>
          </Video>
        </FlexBox>
      </>
  )
};

const DemoWithoutContainer: FC = () => {
  const { openModal } = useSettingsModal();
  useEffect(openModal, []);

  return (
      <Button primary onClick={openModal}>Open Modal</Button>
  );
};

const meta = {
  component: Demo,
  decorators: [(Story) => {
    return (
        <SettingsModalProvider><Story/></SettingsModalProvider>
    )
  }],
  title: "Components/Modal",
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Demo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithContainer: Story = {
  args: { isContainer: true }
};