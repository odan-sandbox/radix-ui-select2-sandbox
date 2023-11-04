import type { Meta, StoryObj } from "@storybook/react";

import { DownshiftSelect2Draft } from "./DownshiftSelect2Draft";

const meta = {
  title: "DownshiftSelect2Draft",
  component: DownshiftSelect2Draft,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof DownshiftSelect2Draft>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {},
};
