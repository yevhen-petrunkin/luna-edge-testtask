import type { Meta, StoryObj } from "@storybook/react";

import Modal from "./Modal";

const meta = {
  title: "components/higherLevel/Modal",
  component: Modal,

  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultModal: Story = {
  args: {
    children: "Modal Window",
    clickHandler: () => {},
  },
};
