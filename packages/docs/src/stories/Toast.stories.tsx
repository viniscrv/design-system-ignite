import { StoryObj, Meta } from "@storybook/react";
import { Toast, ToastProps } from "@vini-ig-ui/react";

export default {
  title: "Surfaces/Toast",
  component: Toast,
  args: {
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<ToastProps>;

export const Primary: StoryObj<ToastProps> = {};
