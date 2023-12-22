import type { Meta, StoryObj } from "@storybook/react";

import TeamBoard from "./TeamBoard";

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
  title: "components/higherLevel/TeamBoard",
  component: TeamBoard,

  tags: ["autodocs"],
} satisfies Meta<typeof TeamBoard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultTeamBoard: Story = {
  args: {
    userData: {
      userName: "User Name",
      userSurname: "User Surname",
    },
    participants: [teamMember],

    clickHandler: () => {},
  },
};
