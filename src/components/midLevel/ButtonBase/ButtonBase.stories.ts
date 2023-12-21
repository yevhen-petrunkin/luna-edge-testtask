import type { Meta, StoryObj } from "@storybook/react";
import ButtonBase from "./ButtonBase";

const meta = {
  title: "components/midLevel/ButtonBase",
  component: ButtonBase,

  tags: ["autodocs"],
} satisfies Meta<typeof ButtonBase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalButtonBase: Story = {
  args: {
    clickHandler: () => {},
  },
};
