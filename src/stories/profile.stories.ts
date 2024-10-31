import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import {
    ProfileSidebarComponent
} from "../app/templates/main-template/components/profile-sidebar/profile-sidebar.component";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ProfileSidebarComponent> = {
  title: 'Example/Profile',
  component: ProfileSidebarComponent,
  tags: ['autodocs'],
  argTypes: {

  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {  },
};

export default meta;
type Story = StoryObj<ProfileSidebarComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Profile: Story = {
    args: {
    },
};
