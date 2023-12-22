import type { Meta, StoryObj } from "@storybook/react";

import Form from "./Form";

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
  title: "components/higherLevel/Form",
  component: Form,

  tags: ["autodocs"],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultForm: Story = {
  args: {
    options,
  },
};
