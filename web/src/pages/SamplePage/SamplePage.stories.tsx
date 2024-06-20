import type { Meta, StoryObj } from "@storybook/react";

import SamplePage from "./SamplePage";

const meta: Meta<typeof SamplePage> = {
	component: SamplePage,
};

export default meta;

type Story = StoryObj<typeof SamplePage>;

export const Primary: Story = {};
