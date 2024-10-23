import type { Preview } from "@storybook/react";
import { MessageProvider } from "../src/providers/Message/MessageProvider";
import '../src/styles/index.scss';

const preview: Preview = {
  decorators: (Story) => {
    return (
        <MessageProvider>
          <Story/>
        </MessageProvider>
    )
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
