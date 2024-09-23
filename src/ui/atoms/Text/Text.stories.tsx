import type { Meta, StoryObj } from "@storybook/react";
import Text from "./Text";

const meta: Meta<typeof Text> = {
  title: "UI/Atoms/Text",
  component: Text,
};

export const Primary: StoryObj<typeof Text> = {
  args: {
    children: "Hello from Storybook",
  },
};

export default meta;
