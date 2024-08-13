import type { Meta, StoryObj } from "@storybook/react";
import SomeKindOfComponent from "./SomeKindOfComponent";

const meta: Meta<typeof SomeKindOfComponent> = {
  title: "UI/SomeKindOfComponent",
  component: SomeKindOfComponent,
};

export const Primary: StoryObj<typeof SomeKindOfComponent> = {
  args: {
    children: "Hello from Storybook",
  },
};

export default meta;
