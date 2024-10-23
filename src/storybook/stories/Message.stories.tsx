import type { Meta, StoryObj } from '@storybook/react';
import React, { FC, ReactNode, useCallback, useRef } from "react";
import { useMessageContext } from "../../providers/Message/hooks/useMessageContext.ts";
import { Button } from "../../components/Button";
import { Video } from "../../components/Video";
import video from '../../components/BaseVideo/demo.mp4';
import { FlexBox } from "../../components/FlexBox";
import { Span } from "../../components/Topography/Span";

type DemoProps = {
  message: ReactNode;
  isDynamic?: boolean;
  isContainer?: boolean;
};

const Demo: FC<DemoProps> = ({ message, isDynamic, isContainer }: DemoProps) => {
    const messageRef = useRef<HTMLDivElement>(null);
  const { openMessage } = useMessageContext(messageRef.current);
  const onButtonClick = useCallback(async (event: React.MouseEvent<HTMLButtonElement>) => {
      await openMessage(message, isDynamic ? event : undefined);
  }, [openMessage, message, isDynamic]);


  return (
      <FlexBox column gap='large'>
          <Button primary onClick={onButtonClick}>
              Open Message
          </Button>
          {isContainer && (
              <FlexBox column gap='small'>
                  <Span size='medium' weight='semiBold'>It is important to show the message in container, when you in full screen mode.</Span>
                  <Video src={video}>
                      <Button primary onClick={onButtonClick} style={{ position: 'absolute' }}>
                          Open Message
                      </Button>
                      <div ref={messageRef}/>
                  </Video>
              </FlexBox>
          )}
      </FlexBox>
  );
};

const meta = {
    component: Demo,
    title: "Hooks/useMessageContext",
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        message: "New Message!"
    }
} satisfies Meta<typeof Demo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: "Default",
};

export const Dynamic: Story = {
    name: "Dynamic",
    args: {
        isDynamic: true,
    },
};

export const InContainer: Story = {
    name: "In Container",
    args: {
        isContainer: true,
    },
};