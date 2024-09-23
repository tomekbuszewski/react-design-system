import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  title: "UI/Atoms/Input",
  component: Input,
};

export const Primary: StoryObj<typeof Input> = {
  args: {
    placeholder: "Hello from Storybook",
  },
};

export default meta;
