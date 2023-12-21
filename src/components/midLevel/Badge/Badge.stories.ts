import type { Meta, StoryObj } from "@storybook/react";
import Badge from "./Badge";

const meta = {
  title: "components/midLevel/Badge",
  component: Badge,

  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultBadge: Story = {
  args: {
    text: "badge",
    clickHandler: () => {},
  },
};
