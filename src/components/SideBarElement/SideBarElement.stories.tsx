import type { Meta, StoryObj } from '@storybook/react';
import SideBarElement from './SideBarElement';
import { withRouter } from 'storybook-addon-react-router-v6';

const meta = {
  title: 'Components/SideBarElement',
  component: SideBarElement,
  decorators: [withRouter],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: 'aci-orange',
        values: [
          { name: 'aci-orange', value: '#FCA311' },
        ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    isSection: { control: 'boolean' },
    icon: { control: 'object' },
    path: { control: 'text' },
    isExpanded: { control: 'boolean' },
    ignoreIsSelected: { control: 'boolean' },
  },
} satisfies Meta<typeof SideBarElement>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * SideBarElement with isExpanded and isSection set to true.
 */
export const SectionExpanded: Story = {
  args: {
    label: 'Skills',
    icon: { iconName: 'phone_in_talk' },
    path: '/skills',
    isExpanded: true,
    isSection: true,
  },
};

/**
 * SideBarElement with isExpanded set to false and isSection set to true.
 */
export const SectionUnexpanded: Story = {
  args: {
    label: 'Skills',
    icon: { iconName: 'phone_in_talk' },
    path: '/skills',
    isExpanded: false,
    isSection: true,
  },
};

/**
 * SideBarElement with isExpanded set to true and isSection set to true.
 */
export const SectionExpandedSelection: Story = {
  args: {
    label: 'Skills',
    icon: { iconName: 'phone_in_talk' },
    path: '/',
    isExpanded: true,
    isSection: true,
  },
};

/**
 * SideBarElement with isExpanded set to true and isSection set to false.
 */
export const NotSectionExpanded: Story = {
  args: {
    label: 'Skills',
    icon: { iconName: 'phone_in_talk' },
    path: '/skills',
    isExpanded: true,
    isSection: false,
  },
};

/**
 * SideBarElement with isExpanded and isSection set to false.
 */
export const NotSectionUnexpanded: Story = {
  args: {
    label: 'Skills',
    icon: { iconName: 'phone_in_talk' },
    path: '/skills',
    isExpanded: false,
    isSection: false,
  },
};

/**
 * SideBarElement with isExpanded set to true and isSection set to false.
 */
export const NotSectionExpandedSelection: Story = {
  args: {
    label: 'Skills',
    icon: { iconName: 'phone_in_talk' },
    path: '/',
    isExpanded: true,
    isSection: false,
  },
};
