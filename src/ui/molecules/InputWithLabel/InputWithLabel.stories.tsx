import type { Meta, StoryObj } from "@storybook/react";
import InputWithLabel from "./InputWithLabel";

const meta: Meta<typeof InputWithLabel> = {
  title: "UI/Molecules/InputWithLabel",
  component: InputWithLabel,
};

export const Primary: StoryObj<typeof InputWithLabel> = {
  args: {
    label: "Hello from Storybook",
    placeholder: "Type something here",
    id: "storybook-input",
  },
};

export default meta;
