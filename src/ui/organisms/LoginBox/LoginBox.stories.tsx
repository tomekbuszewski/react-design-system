import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import LoginBox from "./LoginBox";
import { FormEvent } from "react";

const meta: Meta<typeof LoginBox> = {
  title: "UI/Organisms/LoginBox",
  component: LoginBox,
  parameters: {
    actions: {
      argTypesRegex: "^on.*",
    },
  },
};

export const Primary: StoryObj<typeof LoginBox> = {
  args: {
    className: "w-[300px]",
    onSubmit: (e: FormEvent) => {
      e.preventDefault();
      action("onSubmit")(e);
    },
  },
};

export default meta;
