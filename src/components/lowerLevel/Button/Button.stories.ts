import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta = {
  title: "components/lowerLevel/Button",
  component: Button,

  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// PRIMARY BASE

export const PrimaryBase: Story = {
  args: {
    text: "Button",
    clickHandler: () => {},
  },
};

export const PrimarySubmitBase: Story = {
  args: {
    text: "Submit",
    type: "submit",
    clickHandler: () => {},
  },
};

export const PrimaryBaseDisabled: Story = {
  args: {
    text: "Disabled",
    clickHandler: () => {},
    disabled: true,
  },
};

export const PrimarySubmitBaseDisabled: Story = {
  args: {
    text: "Submit",
    type: "submit",
    clickHandler: () => {},
    disabled: true,
  },
};

export const PrimaryBaseDecorated: Story = {
  args: {
    text: "Decorated",
    clickHandler: () => {},
    decorated: true,
  },
};

export const PrimarySubmitBaseDecorated: Story = {
  args: {
    text: "Submit",
    type: "submit",
    clickHandler: () => {},
    decorated: true,
  },
};

export const PrimaryBaseDecoratedDisabled: Story = {
  args: {
    text: "Decorated",
    clickHandler: () => {},
    decorated: true,
    disabled: true,
  },
};

export const PrimarySubmitBaseDecoratedDisabled: Story = {
  args: {
    text: "Submit",
    type: "submit",
    clickHandler: () => {},
    decorated: true,
    disabled: true,
  },
};

// PRIMARY LARGE

export const PrimaryLarge: Story = {
  args: {
    text: "Button",
    size: "lg",
    clickHandler: () => {},
  },
};

export const PrimarySubmitLarge: Story = {
  args: {
    text: "Submit",
    type: "submit",
    size: "lg",
    clickHandler: () => {},
  },
};

export const PrimaryLargeDisabled: Story = {
  args: {
    text: "Disabled",
    size: "lg",
    clickHandler: () => {},
    disabled: true,
  },
};

export const PrimarySubmitLargeDisabled: Story = {
  args: {
    text: "Submit",
    type: "submit",
    size: "lg",
    clickHandler: () => {},
    disabled: true,
  },
};

export const PrimaryLargeDecorated: Story = {
  args: {
    text: "Decorated",
    size: "lg",
    clickHandler: () => {},
    decorated: true,
  },
};

export const PrimarySubmitLargeDecorated: Story = {
  args: {
    text: "Submit",
    type: "submit",
    size: "lg",
    clickHandler: () => {},
    decorated: true,
  },
};

export const PrimaryLargeDecoratedDisabled: Story = {
  args: {
    text: "Decorated",
    size: "lg",
    clickHandler: () => {},
    decorated: true,
    disabled: true,
  },
};

export const PrimarySubmitLargeDecoratedDisabled: Story = {
  args: {
    text: "Submit",
    type: "submit",
    size: "lg",
    clickHandler: () => {},
    decorated: true,
    disabled: true,
  },
};

// TEXT BASE

export const TextBase: Story = {
  args: {
    text: "Button",
    variant: "text",
    clickHandler: () => {},
  },
};

export const TextSubmitBase: Story = {
  args: {
    text: "Submit",
    type: "submit",
    variant: "text",
    clickHandler: () => {},
  },
};

export const TextBaseDisabled: Story = {
  args: {
    text: "Disabled",
    variant: "text",
    clickHandler: () => {},
    disabled: true,
  },
};

export const TextSubmitBaseDisabled: Story = {
  args: {
    text: "Submit",
    type: "submit",
    variant: "text",
    clickHandler: () => {},
    disabled: true,
  },
};

export const TextBaseDecorated: Story = {
  args: {
    text: "Decorated",
    variant: "text",
    clickHandler: () => {},
    decorated: true,
  },
};

export const TextSubmitBaseDecorated: Story = {
  args: {
    text: "Submit",
    type: "submit",
    variant: "text",
    clickHandler: () => {},
    decorated: true,
  },
};

export const TextBaseDecoratedDisabled: Story = {
  args: {
    text: "Decorated",
    variant: "text",
    clickHandler: () => {},
    decorated: true,
    disabled: true,
  },
};

export const TextSubmitBaseDecoratedDisabled: Story = {
  args: {
    text: "Submit",
    type: "submit",
    variant: "text",
    clickHandler: () => {},
    decorated: true,
    disabled: true,
  },
};

// TEXT LARGE

export const TextLarge: Story = {
  args: {
    text: "Button",
    variant: "text",
    size: "lg",
    clickHandler: () => {},
  },
};

export const TextSubmitLarge: Story = {
  args: {
    text: "Submit",
    type: "submit",
    variant: "text",
    size: "lg",
    clickHandler: () => {},
  },
};

export const TextLargeDisabled: Story = {
  args: {
    text: "Disabled",
    variant: "text",
    size: "lg",
    clickHandler: () => {},
    disabled: true,
  },
};

export const TextSubmitLargeDisabled: Story = {
  args: {
    text: "Submit",
    type: "submit",
    variant: "text",
    size: "lg",
    clickHandler: () => {},
    disabled: true,
  },
};

export const TextLargeDecorated: Story = {
  args: {
    text: "Decorated",
    variant: "text",
    size: "lg",
    clickHandler: () => {},
    decorated: true,
  },
};

export const TextSubmitLargeDecorated: Story = {
  args: {
    text: "Submit",
    type: "submit",
    variant: "text",
    size: "lg",
    clickHandler: () => {},
    decorated: true,
  },
};

export const TextLargeDecoratedDisabled: Story = {
  args: {
    text: "Decorated",
    variant: "text",
    size: "lg",
    clickHandler: () => {},
    decorated: true,
    disabled: true,
  },
};

export const TextSubmitLargeDecoratedDisabled: Story = {
  args: {
    text: "Submit",
    type: "submit",
    variant: "text",
    size: "lg",
    clickHandler: () => {},
    decorated: true,
    disabled: true,
  },
};
