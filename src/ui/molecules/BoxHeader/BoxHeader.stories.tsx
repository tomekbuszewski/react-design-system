import type { Meta, StoryObj } from "@storybook/react";
import BoxHeader from "./BoxHeader";

const meta: Meta<typeof BoxHeader> = {
  title: "UI/Molecules/BoxHeader",
  component: BoxHeader,
};

export const Primary: StoryObj<typeof BoxHeader> = {
  args: {
    children: "Hello from Storybook",
  },
};

export default meta;
