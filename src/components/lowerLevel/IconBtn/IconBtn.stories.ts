import type { Meta, StoryObj } from "@storybook/react";
import IconBtn from "./IconBtn";

const meta = {
  title: "components/lowerLevel/IconBtn",
  component: IconBtn,

  tags: ["autodocs"],
} satisfies Meta<typeof IconBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CloseBadgeBtn: Story = {
  args: {
    variant: "close-badge",
    clickHandler: () => {},
  },
};

export const CloseAllBtn: Story = {
  args: {
    variant: "close-all",
    clickHandler: () => {},
  },
};

export const CloseModalBtn: Story = {
  args: {
    variant: "close-modal",
    clickHandler: () => {},
  },
};

export const FoldOptionsBtn: Story = {
  args: {
    variant: "fold",
    clickHandler: () => {},
  },
};

export const UnfoldOptionsBtn: Story = {
  args: {
    variant: "unfold",
    clickHandler: () => {},
  },
};
