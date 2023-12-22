import type { Meta, StoryObj } from "@storybook/react";

import Input from "./Input";

// const name = {
//   id: "01",
//   label: "Name",
//   placeholder: "John",
//   name: "userName",
//   assistiveText: "Enter your name, please",
//   options: {
//     pattern: {
//       value: "^[a-zA-Z]+$",
//       message: "Please type a valid name.",
//     },
//     minLength: {
//       value: 2,
//       message: "Please type at least 2 characters.",
//     },
//     maxLength: {
//       value: 12,
//       message: "Please type no more than 12 characters.",
//     },
//   },
// };

// const surname = {
//   id: "02",
//   label: "Surname",
//   placeholder: "Johnson",
//   name: "userName",
//   assistiveText: "Enter your name, please",
//   options: {
//     pattern: {
//       value: "^[a-zA-Z]+$",
//       message: "Please type a valid name.",
//     },
//     minLength: {
//       value: 2,
//       message: "Please type at least 2 characters.",
//     },
//     maxLength: {
//       value: 12,
//       message: "Please type no more than 12 characters.",
//     },
//   },
// };

const meta = {
  title: "components/lowerLevel/Input",
  component: Input,

  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const Name: Story = {
//   args: {
//     input: name,
//     register,
//     errors,
//     className: "w-[400px]",
//   },
// };

// export const Surname: Story = {
//   args: {
//     input: surname,
//     register,
//     errors,
//     className: "w-[400px]",
//   },
// };
