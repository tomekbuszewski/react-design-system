import type { Meta, StoryObj } from "@storybook/react";
import Notification from "./Notification";

const meta: Meta<typeof Notification> = {
  title: "UI/Molecules/Notification",
  component: Notification,
};

export const Primary: StoryObj<typeof Notification> = {
  args: {
    children: "Hello from Storybook",
  },
};

export default meta;
