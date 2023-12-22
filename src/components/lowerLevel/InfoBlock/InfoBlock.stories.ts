import type { Meta, StoryObj } from "@storybook/react";
import InfoBlock from "./InfoBlock";

const teamMember = {
  id: 132,
  name: "ditto",
  imageUrl:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
  experience: 101,
  height: 3,
  weight: 40,
  abilities: ["limber", "imposter"],
};

const meta = {
  title: "components/lowerLevel/InfoBlock",
  component: InfoBlock,

  tags: ["autodocs"],
} satisfies Meta<typeof InfoBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultInfoBlock: Story = {
  args: {
    teamMember,
  },
};
