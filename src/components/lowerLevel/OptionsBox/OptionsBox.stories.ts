import type { Meta, StoryObj } from "@storybook/react";
import OptionsBox from "./OptionsBox";

const options = [
  {
    name: "bulbasaur",
    url: "https://pokeapi.co/api/v2/pokemon/1/",
  },
  {
    name: "ivysaur",
    url: "https://pokeapi.co/api/v2/pokemon/2/",
  },
  {
    name: "charmander",
    url: "https://pokeapi.co/api/v2/pokemon/4/",
  },
  {
    name: "charmeleon",
    url: "https://pokeapi.co/api/v2/pokemon/5/",
  },
  {
    name: "venusaur",
    url: "https://pokeapi.co/api/v2/pokemon/3/",
  },
];

const meta = {
  title: "components/lowerLevel/OptionsBox",
  component: OptionsBox,

  tags: ["autodocs"],
} satisfies Meta<typeof OptionsBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultOptionsBox: Story = {
  args: {
    options,
    visibility: true,
    clickHandler: () => {},
    className: "static",
  },
};
