import { StoryObj, Meta } from "@storybook/react";
import { Button, Tooltip, TooltipProps } from "@vini-ig-ui/react";

export default {
  title: "Surfaces/Tooltip",
  component: Tooltip,
  args: {
    element: <Button variant="primary">Hover me</Button>,
    content: "Lorem ipsum"
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<TooltipProps>;

export const Primary: StoryObj<TooltipProps> = {};
