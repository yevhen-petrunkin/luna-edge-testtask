import type { Meta, StoryObj } from "@storybook/react";
import AssistiveString from "./AssistiveString";

const meta = {
  title: "components/lowerLevel/AssistiveString",
  component: AssistiveString,

  tags: ["autodocs"],
} satisfies Meta<typeof AssistiveString>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultAssistiveString: Story = {
  args: {
    text: "Enter your name, please.",
  },
};

export const ErrorAssistiveString: Story = {
  args: {
    text: "Enter your name, please.",
    error: { message: "Please type a valid name" },
  },
};
