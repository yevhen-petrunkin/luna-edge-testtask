import type { Meta, StoryObj } from "@storybook/react";

import Select from "./Select";

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
  title: "components/midLevel/Select",
  component: Select,

  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultSelect: Story = {
  args: {
    selectData: {
      id: "select",
      label: "Default Select",
      message: "Assistive Text",
      error: { message: "Error message" },
    },
    options,
    changeHandler: () => {},
  },
};
