import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';

import {LogoComponent} from "../app/templates/main-template/components/logo/logo.component";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<LogoComponent> = {
  title: 'Example/Logo',
  component: LogoComponent,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<LogoComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Logo: Story = {
    args: {
        user: {
            name: 'Jane Doe',
        },
    },
};
