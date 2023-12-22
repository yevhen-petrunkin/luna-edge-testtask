import type { Meta, StoryObj } from "@storybook/react";
import Label from "./Label";

const meta = {
  title: "components/lowerLevel/Label",
  component: Label,

  tags: ["autodocs"],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OptionalLabel: Story = {
  args: {
    id: "label",
    text: "Optional Label",
  },
};

export const RequiredLabel: Story = {
  args: {
    id: "label",
    text: "Required Label",
    required: true,
  },
};
