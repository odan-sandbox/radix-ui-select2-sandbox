import type { Meta, StoryObj } from "@storybook/react";

import { ZagJsSelect2 } from "./zag-js-select2";

const meta = {
  title: "ZagJsSelect2",
  component: ZagJsSelect2,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ height: "300px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ZagJsSelect2>;

export default meta;
type Story = StoryObj<typeof meta>;

const comboboxData = [
  { label: "Zambia", value: "ZA" },
  { label: "Benin", value: "BN" },
  //...
];
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    labelText: "Select country",
    options: comboboxData,
    onChange: (value: string) => {
      console.log("onChange", value);
    },
    onClickCreate(value) {
      console.log("onClickCreate", value);
    },
  },
};
