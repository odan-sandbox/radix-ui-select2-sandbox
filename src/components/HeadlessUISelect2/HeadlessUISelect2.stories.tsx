import type { Meta, StoryObj } from "@storybook/react";

import { HeadlessUISelect2 } from "./HeadlessUISelect2";

const meta = {
  title: "HeadlessUISelect2",
  component: HeadlessUISelect2,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof HeadlessUISelect2>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { value: "1", label: "Wade Cooper" },
  { value: "2", label: "Arlene Mccoy" },
  { value: "3", label: "Devon Webb" },
  { value: "4", label: "Tom Cook" },
  { value: "5", label: "Tanya Fox" },
  { value: "6", label: "Hellen Schmidt" },
];
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: { options },
};
