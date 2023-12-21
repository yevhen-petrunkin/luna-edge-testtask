import type { Meta, StoryObj } from "@storybook/react";
import Title from "./Title";

const meta = {
  title: "components/lowerLevel/Title",
  component: Title,

  tags: ["autodocs"],
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "DefaultTitle",
  },
};

export const MainTitle: Story = {
  args: {
    text: "MainTitle",
    variant: "h1",
    className: "text-center",
  },
};

export const SubTitle: Story = {
  args: {
    text: "SubTitle",
  },
};
